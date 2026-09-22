import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const GRAPH_API_VERSION = process.env.WHATSAPP_GRAPH_API_VERSION ?? "v25.0";
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

function normalizeText(value: string) {
  return value.trim().toLocaleUpperCase("es-ES");
}

function extractIncomingMessages(payload: any) {
  const changes = payload?.entry?.flatMap((entry: any) => entry?.changes ?? []) ?? [];

  return changes.flatMap((change: any) => {
    if (change?.field !== "messages") return [];

    const value = change?.value ?? {};
    return (value.messages ?? [])
      .filter((message: any) => message?.type === "text" && message?.from && message?.text?.body)
      .map((message: any) => ({
        from: message.from as string,
        body: message.text.body as string,
      }));
  });
}

async function sendTextMessage(to: string, body: string) {
  if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
    console.error("WhatsApp is not configured: missing token or Phone Number ID.");
    return;
  }

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body },
      }),
    },
  );

  if (!response.ok) {
    console.error("WhatsApp send error:", await response.text());
  }
}

function replyFor(text: string) {
  if (normalizeText(text) === "HOLA") {
    return "Bienvenido/a a Sindicato de Operarios.\n\n1. Afiliarme gratis\n2. Hacer test de prueba\n\nResponde con 1 o 2.";
  }

  return "Escribe HOLA para ver el menú de Sindicato de Operarios.";
}

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get("hub.mode");
  const token = request.nextUrl.searchParams.get("hub.verify_token");
  const challenge = request.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token && token === VERIFY_TOKEN && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    for (const message of extractIncomingMessages(payload)) {
      await sendTextMessage(message.from, replyFor(message.body));
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    return NextResponse.json({ received: false }, { status: 400 });
  }
}
