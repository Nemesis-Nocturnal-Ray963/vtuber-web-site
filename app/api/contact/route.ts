import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 60 * 1000;
const rejectAtRequestCount = 3;
const maxFieldLength = {
  name: 120,
  email: 254,
  type: 80,
  message: 5000,
} as const;

const adminSubject = "[CONTACT] \u65b0\u898f\u554f\u3044\u5408\u308f\u305b";
const autoReplySubject =
  "\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059";
const labels = {
  name: "\u540d\u524d",
  email: "\u30e1\u30fc\u30eb",
  type: "\u7a2e\u5225",
  message: "\u672c\u6587",
  submittedContent: "\u9001\u4fe1\u5185\u5bb9",
} as const;

const ipRequestLog = new Map<string, number[]>();
const emailRequestLog = new Map<string, number[]>();

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  type?: unknown;
  message?: unknown;
  website?: unknown;
};

type ContactInput = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type ContactInsert = ContactInput;

function isValidText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function sanitizeText(value: string) {
  return value.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(store: Map<string, number[]>, key: string, now: number) {
  const recentRequests = (store.get(key) || []).filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  );

  if (recentRequests.length + 1 >= rejectAtRequestCount) {
    store.set(key, recentRequests);
    return true;
  }

  store.set(key, [...recentRequests, now]);
  return false;
}

function logContactEvent(
  event: "accepted" | "rejected",
  details: Record<string, string | number>,
) {
  console.log("Contact API:", {
    event,
    at: new Date().toISOString(),
    ...details,
  });
}

function validateContactBody(body: ContactRequestBody) {
  const { name, email, type, message, website } = body;

  if (typeof website === "string" && website.trim().length > 0) {
    return {
      ok: false as const,
      code: "honeypot",
      message: "送信できませんでした。時間をおいてもう一度お試しください。",
      status: 400,
    };
  }

  if (
    !isValidText(name) ||
    !isValidText(email) ||
    !isValidText(type) ||
    !isValidText(message)
  ) {
    return {
      ok: false as const,
      code: "required_fields",
      message: "未入力の項目があります。すべての項目をご入力ください。",
      status: 400,
    };
  }

  const contact = {
    name: sanitizeText(name),
    email: sanitizeText(email).toLowerCase(),
    type: sanitizeText(type),
    message: sanitizeText(message),
  };

  if (!emailPattern.test(contact.email)) {
    return {
      ok: false as const,
      code: "invalid_email",
      message: "メールアドレスの形式をご確認ください。",
      status: 400,
    };
  }

  if (
    contact.name.length > maxFieldLength.name ||
    contact.email.length > maxFieldLength.email ||
    contact.type.length > maxFieldLength.type ||
    contact.message.length > maxFieldLength.message
  ) {
    return {
      ok: false as const,
      code: "field_too_long",
      message: "入力内容が長すぎます。内容を短くしてもう一度お試しください。",
      status: 400,
    };
  }

  return {
    ok: true as const,
    contact,
  };
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function createSupabaseServerClient() {
  return createClient(
    getRequiredEnv("SUPABASE_URL"),
    getRequiredEnv("SUPABASE_ANON_KEY"),
    {
      auth: {
        persistSession: false,
      },
    },
  );
}

function createAdminNotificationLines(contact: ContactInput) {
  return [
    `${labels.name}: ${contact.name}`,
    `${labels.email}: ${contact.email}`,
    `${labels.type}: ${contact.type}`,
    "",
    `${labels.message}:`,
    contact.message,
  ];
}

function createAutoReplyLines(contact: ContactInput) {
  return [
    `${contact.name} \u69d8`,
    "",
    "\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",
    "\u5185\u5bb9\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f\u3002\u62c5\u5f53\u8005\u304c\u78ba\u8a8d\u306e\u3046\u3048\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u8fd4\u4fe1\u3044\u305f\u3057\u307e\u3059\u3002",
    "",
    "\u4eca\u5f8c\u306e\u6d41\u308c:",
    "1. \u9001\u4fe1\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
    "2. \u5185\u5bb9\u306b\u5fdc\u3058\u3066\u62c5\u5f53\u8005\u3088\u308a\u3054\u9023\u7d61\u3057\u307e\u3059\u3002",
    "3. \u8fd4\u4fe1\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u901a\u5e383\u301c5\u55b6\u696d\u65e5\u4ee5\u5185\u306b\u78ba\u8a8d\u3057\u307e\u3059\u3002",
    "\u5185\u5bb9\u306b\u3088\u3063\u3066\u306f\u8fd4\u4fe1\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",
    "",
    `${labels.submittedContent}:`,
    `${labels.type}: ${contact.type}`,
    "",
    contact.message,
  ];
}

function createAdminNotificationText(contact: ContactInput) {
  return [adminSubject, "", ...createAdminNotificationLines(contact)].join(
    "\n",
  );
}

function createAutoReplyText(contact: ContactInput) {
  return createAutoReplyLines(contact).join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br />");
}

function createEmailHtml(title: string, lines: string[]) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1f2937;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">${escapeHtml(title)}</h1>
      <div>${lines.map((line) => (line ? escapeHtml(line) : "<br />")).join("")}</div>
    </div>
  `;
}

async function saveContact(contact: ContactInsert) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("contacts").insert(contact);

  if (error) {
    throw new Error(`Supabase insert failed: ${error.message}`);
  }
}

async function sendContactEmails(contact: ContactInput) {
  const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
  const from =
    process.env.CONTACT_FROM_EMAIL || "Contact Form <onboarding@resend.dev>";
  const adminEmail = getRequiredEnv("CONTACT_ADMIN_EMAIL");

  const adminText = createAdminNotificationText(contact);
  const autoReplyText = createAutoReplyText(contact);

  const [adminResult, autoReplyResult] = await Promise.all([
    resend.emails.send({
      from,
      to: adminEmail,
      replyTo: contact.email,
      subject: adminSubject,
      text: adminText,
      html: createEmailHtml(
        adminSubject,
        createAdminNotificationLines(contact),
      ),
    }),
    resend.emails.send({
      from,
      to: contact.email,
      subject: autoReplySubject,
      text: autoReplyText,
      html: createEmailHtml(autoReplySubject, createAutoReplyLines(contact)),
    }),
  ]);

  if (adminResult.error) {
    throw new Error(
      `Resend admin notification failed: ${adminResult.error.message}`,
    );
  }

  if (autoReplyResult.error) {
    throw new Error(
      `Resend auto reply failed: ${autoReplyResult.error.message}`,
    );
  }

  return {
    adminEmailId: adminResult.data?.id,
    autoReplyEmailId: autoReplyResult.data?.id,
  };
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  try {
    let body: ContactRequestBody;

    try {
      body = (await req.json()) as ContactRequestBody;
    } catch {
      logContactEvent("rejected", {
        reason: "invalid_request_body",
        ip,
      });

      return NextResponse.json(
        {
          success: false,
          message: "送信内容を確認できませんでした。入力内容をご確認ください。",
        },
        { status: 400 },
      );
    }

    const validation = validateContactBody(body);

    if (!validation.ok) {
      logContactEvent("rejected", {
        reason: validation.code,
        ip,
      });

      return NextResponse.json(
        { success: false, message: validation.message },
        { status: validation.status },
      );
    }

    const { contact } = validation;
    const now = Date.now();

    if (isRateLimited(ipRequestLog, ip, now)) {
      logContactEvent("rejected", {
        reason: "ip_rate_limit",
        ip,
        email: contact.email,
      });

      return NextResponse.json(
        {
          success: false,
          message: "短時間に複数回送信されています。時間をおいてもう一度お試しください。",
        },
        { status: 429 },
      );
    }

    if (isRateLimited(emailRequestLog, contact.email, now)) {
      logContactEvent("rejected", {
        reason: "email_rate_limit",
        ip,
        email: contact.email,
      });

      return NextResponse.json(
        {
          success: false,
          message: "短時間に複数回送信されています。時間をおいてもう一度お試しください。",
        },
        { status: 429 },
      );
    }

    await saveContact(contact);
    logContactEvent("accepted", {
      step: "supabase_saved",
      ip,
      email: contact.email,
      type: contact.type,
    });

    const emailIds = await sendContactEmails(contact);

    logContactEvent("accepted", {
      step: "emails_sent",
      ip,
      email: contact.email,
      type: contact.type,
      adminEmailId: emailIds.adminEmailId || "unknown",
      autoReplyEmailId: emailIds.autoReplyEmailId || "unknown",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logContactEvent("rejected", {
      reason: "server_error",
      ip,
    });
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "送信に失敗しました。恐れ入りますが、時間をおいてもう一度お試しください。",
      },
      { status: 500 },
    );
  }
}
