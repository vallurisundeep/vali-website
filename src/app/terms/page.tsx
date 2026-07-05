import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

const LAST_UPDATED = "July 1, 2026";

export default function TermsPage() {
  return (
    <Section>
      <div className="prose-content mx-auto max-w-[70ch]">
        <h1 className="font-heading text-3xl font-bold text-ink">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          These terms govern your use of valits.com. By using this site, you agree to them.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Use of this site</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You may use this site to learn about {COMPANY.name}&apos;s services and to contact us.
          Content on this site — including text, graphics, and the Vali name and logo — is owned
          by {COMPANY.name} and may not be copied or reused without permission.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">No guarantee of availability</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We aim to keep this site available and accurate, but we make no guarantee that it will
          always be error-free, uninterrupted, or fully up to date.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Engagement terms</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          This site is informational. Submitting a contact or quote request does not create a
          contractual relationship between you and {COMPANY.name}. Any actual engagement for
          services — including scope, pricing, and delivery terms — is governed by a separate
          signed agreement between {COMPANY.name} and the client.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Changes to these terms</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We may update these terms from time to time. The &quot;Last updated&quot; date above
          reflects the most recent revision.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Contact us</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
