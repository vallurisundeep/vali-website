import type { Metadata } from "next";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { JobCard } from "@/components/ui/JobCard";
import { Reveal } from "@/components/ui/Reveal";
import { CAREERS_CULTURE, JOBS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build the future with Vali LLC — explore open roles in engineering and infrastructure.",
};

export default function CareersPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        eyebrow="Join Vali"
        title="Build the future with us."
        subtitle="At Vali, we believe in innovation, collaboration, and excellence. We're building solutions that make a difference and looking for passionate people to join us."
      />

      <Section>
        <SectionHeading
          eyebrow="Why work with us"
          title="A place to do your best work"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAREERS_CULTURE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full text-center">
                <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Open roles" title="Current openings" />
        <div className="mt-10 space-y-4">
          {JOBS.map((job, i) => (
            <Reveal key={job.slug} delay={i * 0.08}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
