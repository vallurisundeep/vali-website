import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-slate-400 hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-ink" : "text-slate-400"}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} className="text-slate-300" />}
          </span>
        );
      })}
    </nav>
  );
}
