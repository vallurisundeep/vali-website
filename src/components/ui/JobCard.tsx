"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import type { JobContent } from "@/lib/data";
import { COMPANY } from "@/lib/data";

export function JobCard({ job }: { job: JobContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
      >
        <div>
          <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">{job.title}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {job.type} · {job.location}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{job.summary}</p>
        </div>
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
          <div className="grid gap-8 border-t border-slate-100 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Responsibilities
              </h4>
              <ul className="mt-3 space-y-2">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Requirements
              </h4>
              <ul className="mt-3 space-y-2">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 sm:col-span-2">
              <a
                href={`mailto:${COMPANY.careersEmail}?subject=${encodeURIComponent(
                  `Application: ${job.title}`,
                )}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
              >
                <Mail size={16} />
                Apply for this role
              </a>
              <Link
                href={`/careers/${job.slug}`}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                View full details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
