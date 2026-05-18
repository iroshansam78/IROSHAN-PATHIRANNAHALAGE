import OpenAI, { APIError } from "openai";
import { NextResponse } from "next/server";

type IncomingMessage = {
  role: "assistant" | "user";
  text: string;
};

function fallbackReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("nemis") || text.includes("education")) {
    return "He leads the national NEMIS rollout across 10,000+ schools, coordinating onboarding for teachers, students, and administrative officers with governance and readiness controls.";
  }
  if (
    text.includes("air force") ||
    text.includes("defence") ||
    text.includes("secure")
  ) {
    return "He has enterprise IT and program leadership experience in secure mission-critical contexts, including governance, command-level coordination, and delivery oversight.";
  }
  if (
    text.includes("ai") ||
    text.includes("computer vision") ||
    text.includes("gis") ||
    text.includes("remote sensing")
  ) {
    return "His technical scope includes applied AI/computer vision and GIS/remote sensing for operational decision support.";
  }
  if (text.includes("sport") || text.includes("pentathlon")) {
    return "As Vice President of the Sri Lanka Modern Pentathlon Federation, he supported the National Pentathlon Challenge 2025 and represented Sri Lanka as a Team Official at the UIPM Pentathlon World Championship in Egypt.";
  }
  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return "Use the website contact form or LinkedIn. Typical response time is within 1-2 business days.";
  }
  return "He is a strategic program leader with 15+ years of experience across government, defence, enterprise IT, AI, and geospatial systems. Ask about NEMIS, secure IT leadership, AI/GIS, or contact details.";
}

const PROFILE_CONTEXT = `
You are the website AI assistant for Iroshan Pathirannahalage.
Tone: concise, credible, professional.
Do not invent details. If unknown, say so briefly.

Key profile facts:
- Strategic program and project leader with 15+ years of delivery in government, defence, education, enterprise IT, GIS, and AI contexts.
- Leads Sri Lanka NEMIS national rollout across 10,000+ schools.
- NEMIS onboarding scale includes: 240,000 teachers, 4.2M students, 15,000 administrative officers.
- Enterprise IT/CIO-function and command-level delivery experience in secure mission-critical environments (Sri Lanka Air Force).
- Experience includes governance, RAID management, procurement and tender support, architecture oversight, and operational readiness.
- AI/CV and GIS/Remote Sensing expertise applied for operational decision support.
- Leadership: Vice President, Sri Lanka Modern Pentathlon Federation; supported National Pentathlon Challenge 2025; represented Sri Lanka as a Team Official at the UIPM Pentathlon World Championship in Egypt.
- Contact: use website contact form or LinkedIn profile.

Safety constraints:
- Never disclose or infer classified or sensitive military details.
- Keep response under 120 words unless user asks for detail.
`;

function normalizeMessages(input: unknown): IncomingMessage[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((item) => item && typeof item === "object")
    .map((item) => item as Partial<IncomingMessage>)
    .filter(
      (item): item is IncomingMessage =>
        (item.role === "assistant" || item.role === "user") &&
        typeof item.text === "string" &&
        item.text.trim().length > 0
    )
    .slice(-10);
}

export async function POST(request: Request) {
  let userText = "";
  try {
    const body = (await request.json()) as { messages?: unknown };
    const messages = normalizeMessages(body.messages);

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Please provide a message." },
        { status: 400 }
      );
    }

    userText =
      [...messages].reverse().find((item) => item.role === "user")?.text ?? "";
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: fallbackReply(userText) }, { status: 200 });
    }

    const client = new OpenAI({ apiKey });
    const model = process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini";

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.3,
      max_tokens: 220,
      messages: [
        {
          role: "system",
          content: PROFILE_CONTEXT
        },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.text
        }))
      ]
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: "AI assistant returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof APIError) {
      if (error.status === 401 || error.status === 403) {
        return NextResponse.json(
          {
            reply:
              "AI service authentication failed. Please verify OPENAI_API_KEY. For now, here is a quick summary: " +
              fallbackReply(userText)
          },
          { status: 200 }
        );
      }

      if (error.status === 429) {
        return NextResponse.json(
          {
            reply:
              "AI service is currently rate-limited. Here is a fallback answer: " +
              fallbackReply(userText)
          },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(
      {
        reply:
          "AI assistant is temporarily unavailable. Here is a fallback answer: " +
          fallbackReply(userText)
      },
      { status: 200 }
    );
  }
}
