"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/contact/thank-you");
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
          placeholder="Jane Doe"
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
          placeholder="jane@company.com"
        />
        {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
          Company <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClasses}
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClasses}
          placeholder="Tell us what you're working on."
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        Send message
      </button>
    </form>
  );
}
