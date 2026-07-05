import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

type DetailHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  subtitle: string;
  metaRow?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function DetailHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  metaRow,
  primaryCta,
  secondaryCta,
}: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-noise-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-white">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent-from">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>

        {metaRow && metaRow.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-slate-400">
            {metaRow.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap gap-4">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
