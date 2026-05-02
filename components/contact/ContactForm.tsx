"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const inquiryTypes = ["Business", "Collaboration", "Fan Message", "Other"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
  website: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  type: inquiryTypes[0],
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "loading") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim() || !form.type.trim() || !form.message.trim()) {
      return "Please fill in all fields.";
    }

    if (!emailPattern.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          type: form.type.trim(),
          message: form.message.trim(),
          website: form.website.trim(),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setForm(initialFormState);
      setStatus("success");
      setFeedback("Thank you. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send message.");
    }
  };

  const isLoading = status === "loading";

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        onChange={(event) => updateField("website", event.target.value)}
        tabIndex={-1}
        type="text"
        value={form.website}
      />
      <label className="grid gap-2">
        <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Name</span>
        <input
          className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold disabled:cursor-not-allowed disabled:opacity-60"
          name="name"
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          required
          type="text"
          value={form.name}
          disabled={isLoading}
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Email</span>
        <input
          className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold disabled:cursor-not-allowed disabled:opacity-60"
          name="email"
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="mail@example.com"
          required
          type="email"
          value={form.email}
          disabled={isLoading}
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Type</span>
        <select
          className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite focus:border-royalGold disabled:cursor-not-allowed disabled:opacity-60"
          name="type"
          onChange={(event) => updateField("type", event.target.value)}
          required
          value={form.type}
          disabled={isLoading}
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Message</span>
        <textarea
          className="min-h-44 rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold disabled:cursor-not-allowed disabled:opacity-60"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Please write your inquiry."
          required
          value={form.message}
          disabled={isLoading}
        />
      </label>
      {feedback ? (
        <p
          className={`rounded-md border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/30 bg-rose-300/10 text-rose-100"
          }`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
      <div>
        <GlowButton type="submit" disabled={isLoading}>
          <Send className="size-4" />
          {isLoading ? "SENDING..." : "SEND"}
        </GlowButton>
      </div>
    </form>
  );
}
