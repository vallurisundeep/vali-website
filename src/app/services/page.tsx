import type { Metadata } from "next";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vali LLC is a technology services company delivering custom technology services to its clients — from a single specialist to a full dedicated team.",
};

export default function ServicesPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="What we do"
        title="End-to-end technology services"
        subtitle="Vali LLC is a technology services company delivering custom technology services to its clients — from a single specialist to a full dedicated team."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Engagement models"
          title="Work with us the way that fits your project"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.08}>
              <Card className="h-full text-center">
                <h3 className="font-heading text-lg font-semibold text-ink">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{model.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <CtaBand
          title="Not sure which service you need?"
          subtitle="Tell us about your project and we'll help you figure out the right fit."
        />
      </Section>
    </>
  );
}
