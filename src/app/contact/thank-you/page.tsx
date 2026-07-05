import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Message received",
  robots: { index: false },
};

export default function ContactThankYouPage() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-md text-center">
        <CheckCircle2 className="mx-auto text-primary" size={48} />
        <h1 className="mt-6 font-heading text-3xl font-bold text-ink">Message received.</h1>
        <p className="mt-3 text-slate-600">
          Thanks for reaching out — we typically respond within one business day.
        </p>
        <Button href="/" variant="outline" className="mt-8">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
