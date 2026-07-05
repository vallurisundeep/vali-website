import { NextResponse } from "next/server";

type QuotePayload = {
  name: string;
  email: string;
  company?: string;
  services: string[];
  engagementModel?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<QuotePayload>;

  if (!body.name || !body.email || !body.services?.length) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and at least one service are required." },
      { status: 400 },
    );
  }

  // TODO: wire up to a real delivery mechanism (e.g. Resend, Formspree, or an
  // internal mailer/CRM). No secrets are configured here — this is a stub
  // that validates the payload and always succeeds so the front end can be
  // built against it.
  console.log("Quote request submission:", body);

  return NextResponse.json({ ok: true });
}
