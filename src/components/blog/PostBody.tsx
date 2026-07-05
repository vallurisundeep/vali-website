import type { ContentBlock } from "@/lib/data";
import { slugify } from "@/lib/utils";

export function PostBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-content mx-auto max-w-[70ch]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mt-10 mb-4 scroll-mt-28 font-heading text-2xl font-semibold text-ink"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="mt-4 text-lg leading-[1.75] text-slate-700">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-lg leading-relaxed text-slate-700">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "blockquote":
            return (
              <blockquote
                key={i}
                className="mt-6 border-l-4 border-primary pl-5 text-xl font-medium italic text-ink"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={i}
                className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-base leading-relaxed text-ink"
              >
                {block.text}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export function extractHeadings(blocks: ContentBlock[]) {
  return blocks
    .filter((block): block is { type: "h2"; text: string } => block.type === "h2")
    .map((block) => ({ id: slugify(block.text), text: block.text }));
}
