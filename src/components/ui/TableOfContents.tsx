import Link from "next/link";

export function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-slate-200 pl-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link
              href={`#${heading.id}`}
              className="text-sm text-slate-500 hover:text-primary"
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
