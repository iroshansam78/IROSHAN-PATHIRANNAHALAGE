import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  requestCall?: boolean;
  phone?: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "name",
  "email",
  "message"
];

function sanitize(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;
    for (const field of REQUIRED_FIELDS) {
      const value = payload[field];
      if (!value || typeof value !== "string" || sanitize(value).length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const email = sanitize(payload.email!);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL ?? "iroshansam@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? user;

    const missing: string[] = [];
    if (!host) missing.push("SMTP_HOST");
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");
    if (!to) missing.push("CONTACT_TO_EMAIL");
    if (!from) missing.push("CONTACT_FROM_EMAIL");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          error: `Contact service is not configured. Missing: ${missing.join(
            ", "
          )}`
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    const phone =
      typeof payload.phone === "string" ? payload.phone.trim() : "";

    const textBody = [
      `Name: ${sanitize(payload.name!)}`,
      `Work Email: ${email}`,
      `Request a call: ${payload.requestCall ? "Yes" : "No"}`,
      `Preferred number: ${phone.length > 0 ? sanitize(phone) : "Not provided"}`,
      "",
      "Message:",
      payload.message!.trim()
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Website Contact] ${sanitize(payload.name!)}`,
      text: textBody
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}
