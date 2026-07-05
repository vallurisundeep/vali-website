"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/data";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const BUDGET_RANGES = ["Under $25k", "$25k–$100k", "$100k–$250k", "$250k+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "3+ months", "Just exploring"];

type FormState = {
  name: string;
  email: string;
  company: string;
  services: string[];
  engagementModel: string;
  budgetRange: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  services: [],
  engagementModel: "",
  budgetRange: "",
  timeline: "",
  message: "",
};

export function QuoteForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<{ name?: string; email?: string; services?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(title)
        ? prev.services.filter((s) => s !== title)
        : [...prev.services, title],
    }));
  };

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.services.length === 0) nextErrors.services = "Select at least one service.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/quote/thank-you");
    } catch {
      setSubmitError("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="q-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="q-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="q-company" className="mb-1.5 block text-sm font-medium text-ink">
          Company <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          id="q-company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClasses}
          placeholder="Company name"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">Service(s) needed</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <label
              key={service.slug}
              className={clsx(
                "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm transition-colors",
                form.services.includes(service.title)
                  ? "border-primary bg-primary/5 text-ink"
                  : "border-slate-200 text-slate-600 hover:border-slate-300",
              )}
            >
              <input
                type="checkbox"
                checked={form.services.includes(service.title)}
                onChange={() => toggleService(service.title)}
                className="size-4 accent-primary"
              />
              {service.title}
            </label>
          ))}
        </div>
        {errors.services && <p className="mt-1.5 text-sm text-red-600">{errors.services}</p>}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="engagement" className="mb-1.5 block text-sm font-medium text-ink">
            Engagement model
          </label>
          <select
            id="engagement"
            value={form.engagementModel}
            onChange={(e) => setForm({ ...form, engagementModel: e.target.value })}
            className={inputClasses}
          >
            <option value="">Select one</option>
            {ENGAGEMENT_MODELS.map((model) => (
              <option key={model.title} value={model.title}>
                {model.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
            Budget range
          </label>
          <select
            id="budget"
            value={form.budgetRange}
            onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
            className={inputClasses}
          >
            <option value="">Select one</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-ink">
            Timeline
          </label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className={inputClasses}
          >
            <option value="">Select one</option>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="q-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClasses}
          placeholder="Anything else that would help us scope this?"
        />
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        Request a quote
      </button>
    </form>
  );
}
