"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const QUICK_PROMPTS = [
  "Tell me about NEMIS rollout",
  "What industries has he worked in?",
  "What is his AI and GIS expertise?",
  "How can I contact him?"
];

function getAssistantReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("nemis") || text.includes("education")) {
    return "He leads the national NEMIS rollout across 10,000+ schools, coordinating large-scale onboarding for teachers, students, and administrative officers with governance and readiness controls.";
  }

  if (text.includes("air force") || text.includes("defence") || text.includes("secure")) {
    return "He has extensive enterprise IT and program leadership experience in secure and mission-critical environments, including command-level stakeholder coordination and governance-focused delivery.";
  }

  if (text.includes("ai") || text.includes("computer vision") || text.includes("gis") || text.includes("remote sensing")) {
    return "His technical scope includes applied AI/computer vision, anomaly detection workflows, and GIS/remote sensing decision support integrated with operational delivery contexts.";
  }

  if (text.includes("sport") || text.includes("pentathlon")) {
    return "As Vice President of the Sri Lanka Modern Pentathlon Federation, he supported national-level uplift and conduct of the National Pentathlon Challenge 2025.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return "You can use the Contact section form on this website or connect via LinkedIn. Typical response time is within 1-2 business days.";
  }

  if (text.includes("experience") || text.includes("background")) {
    return "He brings 15+ years of delivery leadership across government, defence, education, enterprise IT, AI, and geospatial systems.";
  }

  return "I can help with NEMIS delivery scope, defence/secure-context experience, AI/GIS capabilities, leadership roles, or contact details. Ask one of those and I will provide a focused summary.";
}

export function Chatbot() {
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: 1,
        role: "assistant",
        text: "Hello. I am Iroshan's site assistant. Ask about program delivery, NEMIS, secure IT leadership, AI/GIS expertise, or contact details."
      }
    ],
    []
  );
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => {
      const nextId = prev.length + 1;
      return [
        ...prev,
        { id: nextId, role: "user", text: trimmed },
        { id: nextId + 1, role: "assistant", text: getAssistantReply(trimmed) }
      ];
    });
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm">
      {open ? (
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
          <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
            <p className="text-sm font-semibold">Website Assistant</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1 text-xs hover:bg-white/10"
            >
              Close
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-xl px-3 py-2 text-sm ${
                  message.role === "assistant"
                    ? "bg-brand-mist text-brand-ink"
                    : "bg-brand-teal text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-brand-border p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-lg border border-brand-border px-2 py-1 text-xs text-brand-navy hover:bg-brand-mist"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-teal"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-navy px-3 py-2 text-sm font-semibold text-white hover:bg-brand-steel"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto block rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-steel"
        >
          Chat with Assistant
        </button>
      )}
    </div>
  );
}
