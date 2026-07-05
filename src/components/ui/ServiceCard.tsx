import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <Card className="flex h-full flex-col">
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
