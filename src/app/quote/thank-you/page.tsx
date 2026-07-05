import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Quote request received",
  robots: { index: false },
};

export default function QuoteThankYouPage() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-md text-center">
        <CheckCircle2 className="mx-auto text-primary" size={48} />
        <h1 className="mt-6 font-heading text-3xl font-bold text-ink">
          Thanks — your request is in.
        </h1>
        <p className="mt-3 text-slate-600">
          We&apos;ll review the details and follow up within one business day with next steps.
        </p>
        <Button href="/" variant="outline" className="mt-8">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
