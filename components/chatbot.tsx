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

export function Chatbot() {
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: 1,
        role: "assistant",
        text: "Hello. I am Iroshan's AI assistant. Ask about program delivery, NEMIS, secure IT leadership, AI/GIS expertise, or contact details."
      }
    ],
    []
  );

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      role: "user",
      text: trimmed
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: nextMessages.map((item) => ({
            role: item.role,
            text: item.text
          }))
        })
      });

      const payload = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      const assistantText =
        payload.reply ??
        payload.error ??
        "I am unable to respond right now. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: "assistant",
          text: assistantText
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: "assistant",
          text: "I am unable to connect right now. Please try again shortly."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm">
      {open ? (
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
          <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
            <p className="text-sm font-semibold">AI Assistant</p>
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
                  onClick={() => void sendMessage(prompt)}
                  disabled={loading}
                  className="rounded-lg border border-brand-border px-2 py-1 text-xs text-brand-navy hover:bg-brand-mist disabled:opacity-60"
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
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-brand-navy px-3 py-2 text-sm font-semibold text-white hover:bg-brand-steel disabled:opacity-60"
              >
                {loading ? "..." : "Send"}
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
          Chat with AI Assistant
        </button>
      )}
    </div>
  );
}
