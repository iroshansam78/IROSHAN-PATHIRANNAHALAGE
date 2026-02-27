"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactCopy } from "@/content/contact";
import { site } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  message: string;
  requestCall: boolean;
  phone: string;
};

export function Contact() {
  const initialState = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      message: "",
      requestCall: false,
      phone: ""
    }),
    []
  );
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        throw new Error(result.error ?? "Unable to send message at this time.");
      }

      setStatus({
        type: "success",
        text: "Thank you. Your message has been sent successfully."
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to send message at this time."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-shell py-14 md:py-20">
      <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-card md:p-10">
        <h2 className="section-title">{contactCopy.title}</h2>
        <p className="section-lead">{contactCopy.subtitle}</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-brand-ink md:text-base">{contactCopy.body}</p>
        <div className="mt-6 space-y-2 text-sm text-brand-steel">
          <p>{contactCopy.availability}</p>
          <p>{contactCopy.response}</p>
          <p>{contactCopy.privacy}</p>
          <p>
            Email: <a className="font-medium text-brand-navy hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2">
          <label className="text-sm text-brand-ink">
            Name
            <input
              className="mt-1 w-full rounded-xl border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-teal"
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />
          </label>
          <label className="text-sm text-brand-ink">
            Work Email
            <input
              className="mt-1 w-full rounded-xl border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-teal"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              required
            />
          </label>
          <label className="text-sm text-brand-ink md:col-span-2">
            Message
            <textarea
              className="mt-1 min-h-32 w-full rounded-xl border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-teal"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              required
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-ink md:col-span-2">
            <input
              type="checkbox"
              checked={form.requestCall}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  requestCall: event.target.checked
                }))
              }
            />
            Request a call
          </label>
          {form.requestCall ? (
            <label className="text-sm text-brand-ink md:col-span-2">
              Preferred Contact Number (optional)
              <input
                className="mt-1 w-full rounded-xl border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-teal"
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, phone: event.target.value }))
                }
                placeholder="+94 ..."
              />
            </label>
          ) : null}

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-steel disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : contactCopy.primaryCta}
            </button>
          </div>
          {status.type !== "idle" ? (
            <p
              className={`text-sm md:col-span-2 ${
                status.type === "success" ? "text-brand-teal" : "text-red-700"
              }`}
            >
              {status.text}
            </p>
          ) : null}
        </form>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-brand-border px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist">
            {contactCopy.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
