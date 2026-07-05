"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://valits.com${path}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Share</span>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary hover:text-primary"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 transition-colors hover:border-primary hover:text-primary"
      >
        in
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary hover:text-primary"
      >
        <span className="text-sm font-bold">X</span>
      </a>
    </div>
  );
}
