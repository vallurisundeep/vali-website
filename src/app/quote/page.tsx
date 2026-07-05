import type { Metadata } from "next";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Tell us about your project and get a quote from Vali LLC — custom software, cloud, data, UX, QA, and staffing.",
};

const TRUST_SIGNALS = [
  `Founded ${COMPANY.founded}`,
  "Rigorously vetted talent",
  "US-based, client-first",
  "Response within one business day",
];

export default function QuotePage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
        eyebrow="Get a Quote"
        title="Tell us about your project."
        subtitle="Share a few details and we'll follow up with next steps — no obligation, no pressure."
        metaRow={TRUST_SIGNALS}
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <Card>
            <QuoteForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
