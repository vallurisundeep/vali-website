import Link from "next/link";
import { Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <Compass className="mx-auto text-primary" size={48} />
        <p className="mt-6 font-heading text-6xl font-bold text-ink">404</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-ink">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-primary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
