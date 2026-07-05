import type { Metadata } from "next";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ABOUT_VALUES, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vali LLC was founded in 2006 with a vision of transforming today's business-systems challenges into tomorrow's successes.",
};

const LEADERSHIP = [
  {
    name: "Elena Cho",
    role: "Founder & CEO",
    bio: "Founded Vali in 2006 and still leads with the same principle: win by making clients win first.",
  },
  {
    name: "Marcus Reyes",
    role: "VP of Engineering",
    bio: "Oversees delivery quality across every engagement, from architecture reviews to code standards.",
  },
  {
    name: "Sarah Whitfield",
    role: "Head of Client Delivery",
    bio: "Makes sure every engagement starts with the right team and stays on track from kickoff to launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Vali"
        title={`Transforming business-systems challenges into successes since ${COMPANY.founded}.`}
        subtitle="Vali LLC was founded in 2006 with a vision of transforming today's business-systems challenges into tomorrow's successes. Our committed experts are passionate about working alongside our customers to achieve their strategic objectives."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="What drives us"
              title="“Grow together” isn't a slogan."
              subtitle="It's how we engage. We win when our clients win — every engagement is built around a genuine, long-term partnership, not a one-off transaction."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Why Vali"
              title="Business expertise, not just technical skill"
              subtitle="We pair deep technical execution with stringent developer vetting, dedicated teams, and delivery within the parameters and goals we agree to — so you always know what to expect."
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Our values"
          title="What we hold ourselves to"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <Card className="h-full text-center">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* <Section>
        <SectionHeading eyebrow="Leadership" title="The people behind Vali" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {LEADERSHIP.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <Card className="text-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-from to-accent-to text-2xl font-semibold text-white">
                  {person.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="text-sm text-slate-500">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section> */}

      <Section className="bg-white">
        <CtaBand
          title="Let's talk about what you're building."
          subtitle="We'd love to learn about your goals and how we can help you get there."
        />
      </Section>
    </>
  );
}
