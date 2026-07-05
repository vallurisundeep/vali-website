import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark size={48} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            IT consulting and staffing since {COMPANY.founded}. {COMPANY.tagline}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Company
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/quote" className="text-sm text-slate-300 hover:text-white">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-sm text-slate-300 hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-slate-500" />
              <span>
                {COMPANY.addressLine1}
                <br />
                {COMPANY.addressCity}, {COMPANY.addressState} {COMPANY.addressZip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-slate-500" />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-white">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-slate-500" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
