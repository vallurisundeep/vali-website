import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

const LAST_UPDATED = "July 1, 2026";

export default function PrivacyPage() {
  return (
    <Section>
      <div className="prose-content mx-auto max-w-[70ch]">
        <h1 className="font-heading text-3xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          {COMPANY.name} (&quot;Vali,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy.
          This policy explains what information we collect through valits.com, how we use it, and
          the choices you have.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Information we collect</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          When you submit our contact or quote forms, we collect the information you provide —
          typically your name, email address, company, and details about your project. We also
          collect standard technical information (such as pages visited and browser type) through
          basic analytics to understand how the site is used.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">How we use information</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We use the information you submit to respond to your inquiry, follow up on quote
          requests, and, where relevant, evaluate candidates for open roles. We do not sell your
          personal information, and we only share it with third parties where necessary to operate
          the site (for example, hosting and email delivery providers) or as required by law.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Cookies &amp; analytics</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We may use basic, privacy-respecting analytics to understand aggregate site traffic. We
          do not use this data to build advertising profiles.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Data retention &amp; your choices</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We retain submitted information for as long as needed to respond to your inquiry or
          fulfill the purpose it was collected for. You can request that we delete your
          information at any time by emailing us at the address below.
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Contact us</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Questions about this policy, or requests to access or delete your information, can be
          sent to{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
