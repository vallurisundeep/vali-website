import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CtaBandProps = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CtaBand({
  title,
  subtitle,
  primaryCta = { label: "Get a Quote", href: "/quote" },
  secondaryCta = { label: "Contact Us", href: "/contact" },
}: CtaBandProps) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep via-primary to-accent-to px-8 py-16 text-center sm:px-16">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={primaryCta.href} variant="ghost" className="bg-white !text-primary-deep hover:!bg-white/90">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="ghost">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
