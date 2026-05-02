import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: unknown;
      email?: unknown;
      type?: unknown;
      message?: unknown;
    };

    const { name, email, type, message } = body;

    if (!isValidText(name) || !isValidText(email) || !isValidText(type) || !isValidText(message)) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const contact = {
      name: name.trim(),
      email: email.trim(),
      type: type.trim(),
      message: message.trim(),
    };

    // Future mail service integration point: Resend, SendGrid, etc.
    console.log("Contact:", contact);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }
}
