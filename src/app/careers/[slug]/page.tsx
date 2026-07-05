import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { JOBS, CAREERS_CULTURE, COMPANY } from "@/lib/data";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.summary };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();

  const mailtoHref = `mailto:${COMPANY.careersEmail}?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}`;

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
        eyebrow="Open role"
        title={job.title}
        subtitle={job.summary}
        metaRow={[job.type, job.location, job.team]}
        primaryCta={{ label: "Apply Now", href: mailtoHref }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="About the role" title="What you'll do" />
            <div className="mt-4 space-y-4">
              {job.about.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="mt-8 font-heading text-base font-semibold text-ink">
              Responsibilities
            </h3>
            <ul className="mt-3 space-y-2">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-ink">
              Requirements / What you&apos;ll bring
            </h3>
            <ul className="mt-3 space-y-2">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-base font-semibold text-ink">Nice to have</h3>
            <ul className="mt-3 space-y-2">
              {job.niceToHave.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Why Vali" title="A place to do your best work" align="center" className="mx-auto" />
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

      <Section>
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Interested in this role?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
            >
              <Mail size={16} />
              Apply Now
            </a>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              See all openings
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
