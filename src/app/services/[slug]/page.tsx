import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { RelatedStrip } from "@/components/ui/RelatedStrip";
import { CtaBand } from "@/components/ui/CtaBand";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const modelsForService = ENGAGEMENT_MODELS.filter((m) =>
    service.engagementModels.includes(m.title as (typeof service.engagementModels)[number]),
  );

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow="Service"
        title={service.title}
        subtitle={service.promise}
        primaryCta={{ label: "Get a Quote", href: "/quote" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />

      <Section>
        <div className="max-w-3xl space-y-4">
          {service.overview.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="What's included" title="Capabilities" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.includes.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.08}>
              <Card className="h-full">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-ink">{item.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our approach" title="How we deliver" />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {service.approach.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.08}>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Stack" title="Tech & tools we use" />
        <div className="mt-8 flex flex-wrap gap-3">
          {service.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {modelsForService.length > 0 && (
          <div className="mt-14">
            <SectionHeading eyebrow="Engagement models" title="How you can work with us on this" />
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {modelsForService.map((model) => (
                <Card key={model.title} className="h-full">
                  <h3 className="font-heading text-base font-semibold text-ink">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{model.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion faqs={service.faqs} />
        </div>
      </Section>

      <Section className="bg-surface">
        <RelatedStrip
          title="Related services"
          items={related.map((s) => ({
            href: `/services/${s.slug}`,
            title: s.title,
            description: s.shortDescription,
          }))}
        />
      </Section>

      <Section>
        <CtaBand
          title={`Ready to talk about ${service.title.toLowerCase()}?`}
          subtitle="Get a quote or tell us about your project — we'll follow up within one business day."
        />
      </Section>
    </>
  );
}
