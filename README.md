# Vali LLC — Marketing Site

Next.js (App Router) + TypeScript + Tailwind CSS marketing site for Vali LLC, an IT consulting and
staffing firm. Built from `vali-website-claude-code-prompt.md` and `vali-inner-pages.md`.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` (`@theme` block)
- **Framer Motion** — scroll reveals, hero motion, mobile menu; respects `prefers-reduced-motion`
- **lucide-react** — icons

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to http://localhost:3000; if that port is taken, pass
`-- -p <port>`, e.g. `npm run dev -- -p 3010`).

## Project structure

```
src/
  app/                  routes (App Router)
    services/[slug]     service detail pages
    portfolio/[slug]     case study detail pages
    blog/[slug]         blog post detail pages
    careers/[slug]      job detail pages
    industries/[slug]   industry detail pages
    contact/thank-you   quote/thank-you   post-submit confirmation pages
    api/contact         api/quote          stub form-submission routes
    sitemap.ts          robots.ts          generated from the content layer
  components/
    ui/                 Button, Section, Card, ServiceCard, JobCard, FaqAccordion, etc.
    forms/              ContactForm, QuoteForm (client components, validated)
    home/               Hero + animated hero graphic
    blog/               PostBody renderer (structured content blocks + TOC)
  content/              typed content collections: services, case-studies, jobs, posts, industries
  lib/data.ts           company facts, nav, and site-wide copy; re-exports the content collections
```

Adding a new service, case study, job, blog post, or industry only requires adding an entry to the
relevant file in `src/content/` — the index pages, detail routes, `generateStaticParams`, metadata,
and sitemap all read from that data automatically.

## Forms

`ContactForm` and `QuoteForm` are client components that POST JSON to `app/api/contact` and
`app/api/quote`. Both API routes currently validate the payload, `console.log` it, and return
`{ ok: true }` — **no email delivery is wired up and no secrets are committed**. To go live, swap
the `TODO` in each route for a real integration (e.g. Resend, Formspree, or an internal mailer) and
add any required API keys as environment variables (never commit them).

## Content marked `TODO`

Several sections use clearly-labeled placeholder content pending real assets/copy:

- Home + case study testimonials (`TODO: real quote`)
- Leadership grid on `/about` (`TODO: photos & bios`)
- Case study metrics/logos on `/portfolio/[slug]`
- Contact page map embed
- Blog author bios
- `/privacy` and `/terms` (`TODO: legal review`)

## Quality checks

```bash
npx tsc --noEmit   # type-check
npm run lint       # eslint (flat config via eslint-config-next)
npm run build      # production build — also statically generates all [slug] routes
```

## Deploy

Target platform is Vercel:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

No environment variables are required for the current stub form handlers. Add any email/CRM
provider keys as Vercel project environment variables once the API routes are wired up for real.
