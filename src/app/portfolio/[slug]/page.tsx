import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { RelatedStrip } from "@/components/ui/RelatedStrip";
import { CtaBand } from "@/components/ui/CtaBand";
import { CASE_STUDIES, SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  const servicesUsed = study.serviceSlugs
    .map((s) => SERVICES.find((service) => service.slug === s))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  const related = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: study.title },
        ]}
        eyebrow={study.category}
        title={study.title}
        subtitle={study.summary}
        metaRow={[study.industry, study.engagementModel, study.duration]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <Card>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-400">
                At a glance
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Client</dt>
                  <dd className="text-right font-medium text-ink">{study.client}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Industry</dt>
                  <dd className="text-right font-medium text-ink">{study.industry}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Services</dt>
                  <dd className="text-right font-medium text-ink">
                    {servicesUsed.map((s) => s.title).join(", ")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Timeline</dt>
                  <dd className="text-right font-medium text-ink">{study.duration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Team size</dt>
                  <dd className="text-right font-medium text-ink">{study.teamSize}</dd>
                </div>
              </dl>
            </Card>
          </div>

          <div className="space-y-10">
            <div>
              <SectionHeading eyebrow="The challenge" title="What we were solving for" />
              <div className="mt-4 space-y-4">
                {study.challenge.map((paragraph, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Our approach" title="How we tackled it" />
              <div className="mt-4 space-y-4">
                {study.approach.map((paragraph, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <ul className="mt-5 space-y-2">
                {study.whatWeDid.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <SectionHeading eyebrow="Results" title="What came of it" dark />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {study.results.map((result) => (
            <StatCard key={result.label} value={result.value} label={result.label} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-slate-300">{study.resultsNarrative}</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Stack" title="Technology used" />
        <div className="mt-6 flex flex-wrap gap-3">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <TestimonialCard quote={study.quote.quote} name={study.quote.name} role={study.quote.role} />
      </Section>

      <Section>
        <RelatedStrip
          title="Related case studies"
          items={related.map((s) => ({
            href: `/portfolio/${s.slug}`,
            title: s.title,
            description: s.summary,
            eyebrow: s.category,
          }))}
        />
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
