import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies covering custom software, cloud migration, data engineering, and staffing engagements delivered by Vali LLC.",
};

export default function PortfolioPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        eyebrow="Proof over promises"
        title="Work that speaks for itself"
        subtitle="A look at how we've helped clients tackle software builds, cloud migrations, data projects, and staffing engagements."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.1}>
              <Link href={`/portfolio/${study.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {study.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-ink">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {study.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the case study
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
          title="Start a project like this."
          subtitle="Tell us about your challenge and we'll help you scope the right approach."
        />
      </Section>
    </>
  );
}
