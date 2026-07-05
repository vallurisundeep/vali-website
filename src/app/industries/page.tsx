import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Vali LLC brings domain-deep consultants to High Tech, Healthcare, Finance, Manufacturing, Higher Education, Public Sector, and Retail/E-commerce.",
};

export default function IndustriesPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        eyebrow="Who we serve"
        title="Domain-deep expertise, wherever you operate"
        subtitle="We adapt our services to the realities of your industry — its constraints, its stakes, and what 'good' actually looks like for your users."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 3) * 0.08}>
              <Link href={`/industries/${industry.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <industry.icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {industry.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <CtaBand
          title="Don't see your industry?"
          subtitle="We adapt fast — tell us about your business and we'll show you how we can help."
        />
      </Section>
    </>
  );
}
