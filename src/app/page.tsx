import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatCard } from "@/components/ui/StatCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { VALUE_PROPS, SERVICES, PROCESS_STEPS, STATS, TESTIMONIAL } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Value props */}
      <Section>
        <SectionHeading
          eyebrow="Why Vali"
          title="Consultants who solve the real problem"
          subtitle="Not just another staffing vendor — a technology partner that understands your business as well as your stack."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {VALUE_PROPS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Card className="h-full">
                <span className="font-heading text-3xl font-bold text-primary/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services overview */}
      <Section className="bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-end technology services"
            subtitle="From a single specialist to a full dedicated team — six ways we help you build and grow."
          />
          <Button href="/services" variant="outline" className="shrink-0">
            All services
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* How we work */}
      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A simple process, built for momentum"
          align="center"
          className="mx-auto"
        />
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative text-center">
              <div className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm">
                <step.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <Section className="bg-ink text-white">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <StatCard value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-surface">
        <Reveal>
          <TestimonialCard
            quote={TESTIMONIAL.quote}
            name={TESTIMONIAL.name}
            role={TESTIMONIAL.role}
          />
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section className="bg-white">
        <CtaBand
          title="Let's build something together."
          subtitle="Tell us what you're working on and we'll help you find the right people and the right approach."
        />
      </Section>
    </>
  );
}
