import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedStrip } from "@/components/ui/RelatedStrip";
import { CtaBand } from "@/components/ui/CtaBand";
import { INDUSTRIES, SERVICES, CASE_STUDIES } from "@/lib/data";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.description };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relevantServices = industry.relevantServiceSlugs
    .map((s) => SERVICES.find((service) => service.slug === s))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  const caseStudy = industry.caseStudySlug
    ? CASE_STUDIES.find((c) => c.slug === industry.caseStudySlug)
    : undefined;

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
        eyebrow="Industry"
        title={industry.title}
        subtitle={industry.description}
      />

      <Section>
        <SectionHeading eyebrow="Common challenges" title={`What ${industry.title} teams run into`} />
        <ul className="mt-8 max-w-2xl space-y-3">
          {industry.challenges.map((challenge) => (
            <li key={challenge} className="flex gap-3 text-slate-700">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {challenge}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <RelatedStrip
          title="Relevant services"
          items={relevantServices.map((s) => ({
            href: `/services/${s.slug}`,
            title: s.title,
            description: s.shortDescription,
          }))}
        />
      </Section>

      {caseStudy && (
        <Section>
          <RelatedStrip
            title="A related case study"
            items={[
              {
                href: `/portfolio/${caseStudy.slug}`,
                title: caseStudy.title,
                description: caseStudy.summary,
                eyebrow: caseStudy.category,
              },
            ]}
          />
        </Section>
      )}

      <Section className="bg-surface">
        <CtaBand
          title={`Let's talk about ${industry.title.toLowerCase()}.`}
          subtitle="Tell us about your project and we'll help you find the right approach."
        />
      </Section>
    </>
  );
}
