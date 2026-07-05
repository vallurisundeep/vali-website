import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // TODO: wire up to a real delivery mechanism (e.g. Resend, Formspree, or an
  // internal mailer). No secrets are configured here — this is a stub that
  // validates the payload and always succeeds so the front end can be built
  // against it.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
