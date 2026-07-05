import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${COMPANY.name} — ${COMPANY.addressLine1}, ${COMPANY.addressCity}, ${COMPANY.addressState} ${COMPANY.addressZip}.`,
};

export default function ContactPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title="Let's start a conversation."
        subtitle="Tell us what you're working on — we typically respond within one business day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading text-lg font-semibold text-ink">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    {COMPANY.addressLine1}
                    <br />
                    {COMPANY.addressCity}, {COMPANY.addressState} {COMPANY.addressZip}
                    <br />
                    {COMPANY.addressCountry}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-primary" />
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-primary">
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-primary" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-primary" />
                  Mon–Fri, 9am–6pm ET · Responses within one business day
                </li>
              </ul>
            </Card>

            <div className="h-56 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title={`Map to ${COMPANY.name} headquarters`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${COMPANY.addressLine1}, ${COMPANY.addressCity}, ${COMPANY.addressState} ${COMPANY.addressZip}`,
                )}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <Card>
            <h3 className="font-heading text-lg font-semibold text-ink">Send us a message</h3>
            <p className="mt-1 mb-6 text-sm text-slate-500">
              We&apos;ll get back to you within one business day.
            </p>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
