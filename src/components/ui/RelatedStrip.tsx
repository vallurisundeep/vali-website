import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

type RelatedItem = {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
};

export function RelatedStrip({
  title,
  items,
}: {
  title: string;
  items: RelatedItem[];
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <SectionHeading title={title} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block h-full">
            <Card className="flex h-full flex-col">
              {item.eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.eyebrow}
                </span>
              )}
              <h3 className="mt-2 font-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
