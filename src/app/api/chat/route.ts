import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/portfolio-context";

// Rate limiting (simple in-memory)
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 20; // max requests per window
const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_IN_CONTEXT = 20;

// Provider configuration
const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
const GROQ_MODEL = "openai/gpt-oss-120b";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  messages: ChatMessage[];
}

export async function POST(request: NextRequest) {
  // Check if API key is configured
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The AI assistant is currently unavailable. You can still explore the portfolio or contact the developer directly.",
      },
      { status: 503 }
    );
  }

  // Rate limiting
  const clientIp = getClientIp(request);
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  // Parse request body
  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 }
    );
  }

  // Validate messages
  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json(
      { error: "Messages are required." },
      { status: 400 }
    );
  }

  // Trim to max messages in context
  const messages = body.messages.slice(-MAX_MESSAGES_IN_CONTEXT);

  // Validate and sanitize each message
  const sanitizedMessages: Array<{ role: string; content: string }> = [];
  for (const msg of messages) {
    if (
      !msg.role ||
      !msg.content ||
      (msg.role !== "user" && msg.role !== "assistant")
    ) {
      continue;
    }

    const content =
      typeof msg.content === "string"
        ? msg.content.slice(0, MAX_MESSAGE_LENGTH)
        : "";

    if (content.trim()) {
      sanitizedMessages.push({ role: msg.role, content });
    }
  }

  if (sanitizedMessages.length === 0) {
    return NextResponse.json(
      { error: "No valid messages provided." },
      { status: 400 }
    );
  }

  // Build system prompt with portfolio context
  const systemPrompt = buildSystemPrompt();

  // Construct Groq API request (OpenAI-compatible format)
  const apiMessages = [
    { role: "system", content: systemPrompt },
    ...sanitizedMessages,
  ];

  try {
    const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: apiMessages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", response.status);
      return NextResponse.json(
        {
          error:
            "The AI assistant encountered an error. Please try again or contact the developer directly.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    // Extract the response content
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        {
          error:
            "The AI assistant returned an empty response. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Groq API request failed:", error);
    return NextResponse.json(
      {
        error:
          "Unable to connect to the AI assistant. Please try again or contact the developer directly.",
      },
      { status: 502 }
    );
  }
}
