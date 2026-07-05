"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

export type Faq = { question: string; answer: string };

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="font-medium text-ink">{faq.question}</span>
              <ChevronDown
                className={clsx(
                  "size-5 shrink-0 text-slate-400 transition-transform duration-300",
                  open && "rotate-180 text-primary",
                )}
              />
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
