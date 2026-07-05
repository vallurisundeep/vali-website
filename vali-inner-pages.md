# Claude Code Prompt — Rebuild the Vali LLC Website (valits.com)

> Paste this whole file into Claude Code as your opening prompt, or save it as `CLAUDE.md` at the project root. Everything below is intentionally specific so you get real content and a coherent design, not placeholders. Adjust the colors, stack, or copy anywhere you disagree.

---

## Role & Objective

You are a senior front-end engineer and product designer. Build a **stunning, modern, production-ready marketing website** for **Vali LLC** — an IT consulting and staffing firm — to replace the current site at valits.com.

The site must feel premium and confident: the kind of site an enterprise buyer trusts and a strong engineer wants to apply to. Prioritize clean layout, generous whitespace, purposeful motion, fast load, and flawless responsiveness. Avoid anything that looks like a generic template.

Work iteratively. Scaffold first, get one page looking excellent, then replicate the system across the rest. Show me the dev server URL as soon as it runs.

---

## Company Facts (use these verbatim — do not invent contact details)

- **Name:** Vali LLC
- **Founded:** 2006
- **Tagline:** *Grow together*
- **What we are:** A technology services company delivering custom software, cloud, data, UX, and QA services — plus IT staffing and dedicated development teams.
- **HQ:** 150 South Pine Island Road, Suite 300, Plantation, FL 33324, United States
- **Phone:** +1-954-998-9663
- **General email:** info@valits.com
- **Careers email:** careers@valits.com
- **Note:** The old contact page had a stray `info@digeco.com` address — do NOT carry that over; use `info@valits.com`.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (subtle scroll reveals, hover states, hero motion — never gratuitous)
- **Icons:** lucide-react
- **Fonts:** Load via `next/font` (see typography below)
- **Forms:** Contact + "Get a Quote" forms as client components with validation; wire the submit handler to a stub API route (`app/api/contact/route.ts`) that I can later connect to email/Resend/Formspree. Do not hardcode any secret keys.
- **Deployment target:** Vercel. Keep everything static-friendly where possible.
- **Quality:** Strict TypeScript, no console errors, `next lint` clean.

*(If you'd prefer Astro for a lighter content site, that's acceptable — but default to Next.js unless I say otherwise.)*

---

## Design System

Build this as reusable Tailwind config + a few base components. Everything should derive from these tokens.

**Aesthetic direction:** "Enterprise tech, human warmth." Deep ink base, one confident electric accent, lots of air, big type, restrained gradients and glass. Growth/partnership motif nods to the "Grow together" tagline (subtle upward lines, connected nodes) — used as texture, never clip-art.

**Color palette**
- `ink` (near-black navy): `#0B1120` — primary text / dark sections
- `slate` scale for body text and borders (Tailwind slate is fine)
- `primary` (electric blue): `#2563EB` with a lighter `#3B82F6` and deep `#1E40AF`
- `accent` (teal→violet gradient) for highlights: `from-#14B8A6 to-#7C3AED` — use sparingly on hero, stats, CTAs
- `surface`: `#F8FAFC` for light sections, pure white for cards
- Ensure AA contrast everywhere.

**Typography**
- Headings: a strong geometric sans — **Space Grotesk** or **Sora**
- Body: **Inter**
- Big, tight hero headlines (clamp from ~2.5rem mobile to ~4.5rem desktop), comfortable 1.6 line-height body.

**Motion**
- Fade-and-rise on scroll (opacity + 16px translate, staggered)
- Hover: cards lift slightly with soft shadow; buttons have a subtle sheen/scale
- Hero: gentle animated gradient or floating connected-node graphic; respect `prefers-reduced-motion`.

**Components to build once and reuse**
- `Button` (primary / ghost / outline)
- `Section` wrapper (consistent vertical rhythm + max-width container)
- `Card`, `StatCard`, `ServiceCard`, `TestimonialCard`, `JobCard`
- `Navbar` (sticky, transparent-over-hero → solid on scroll, mobile drawer)
- `Footer`
- `SectionHeading` (eyebrow + title + optional subtitle)

---

## Site Map

1. **Home** (`/`)
2. **About** (`/about`)
3. **Services** (`/services`) → **service detail** (`/services/[slug]`, 6 pages)
4. **Industries** (`/industries`) → **industry detail** (`/industries/[slug]`) — optional but recommended
5. **Portfolio / Case Studies** (`/portfolio`) → **case-study detail** (`/portfolio/[slug]`, 4 pages)
6. **Careers** (`/careers`) → **job detail** (`/careers/[slug]`, 2 pages)
7. **Blog** (`/blog`) → **blog post** (`/blog/[slug]`, 3 seed posts, MDX)
8. **Contact** (`/contact`) + **thank-you** (`/contact/thank-you`)
9. **Get a Quote** (`/quote`) + **thank-you** (`/quote/thank-you`)
10. **System pages:** `not-found.tsx` (404), `/privacy`, `/terms`

Full layouts for every `[slug]` and system page are in the **Inner / Detail Pages** section below.

Global nav: About · Services · Industries · Portfolio · Careers · Blog · Contact, plus a highlighted **Get a Quote** button.

---

## Page-by-Page Content

Use this copy as the real content. Improve wording for flow, but keep the meaning and all facts. Write in a confident, plain, non-buzzwordy voice.

### 1. Home

**Hero**
- Eyebrow: `IT Consulting & Staffing · Since 2006`
- Headline: **Grow together.**
- Subhead: *Vali LLC turns today's business-systems challenges into tomorrow's wins. We build custom software, modernize your cloud and data, and place vetted engineers on your team — fast.*
- Primary CTA: **Get a Quote** → Secondary CTA: **Explore Services**
- Trust strip below hero: `Founded 2006 · Plantation, FL · Custom Software · Cloud · Data · UX/UI · QA · Staff Augmentation`

**Value props (3 cards)**
1. **Domain-deep consultants** — Our people are experts in the technology *and* your industry, so they solve the real problem, not just the ticket.
2. **Rigorously vetted talent** — Every developer clears a stringent verification process before they reach your team.
3. **Dedicated, specialized teams** — A committed, motivated squad matched to your project phase for real agility and control.

**Services overview (grid of 6)** — short blurb each, link to Services:
- **Custom Software Development** — Designing, building, and implementing applications tailored to your goals.
- **Cloud Migration & Modernization** — Move to the cloud and build the digital enterprise of tomorrow.
- **Data & Storage Engineering** — Design and operate a reliable, scalable data ecosystem.
- **UX/UI Design & Development** — Innovative, user-first interfaces that people actually enjoy using.
- **Quality Assurance** — Rigorous QA so your product ships at the highest possible quality.
- **IT Staffing & Staff Augmentation** — Contract, contract-to-hire, and dedicated teams — placed quickly.

**How we work (3–4 step process):** Discover → Assemble the right team → Build & iterate → Support & scale. One line each.

**Stats band** (dark section, accent gradient numbers): `2006 Founded` · `Vetted engineers on demand` · `End-to-end delivery` · `US-based, client-first`. *(Keep claims truthful — no fabricated numbers.)*

**Testimonial** (placeholder, clearly marked `TODO: real quote`): one clean testimonial card.

**Final CTA band:** "Let's build something together." → Get a Quote / Contact.

### 2. About

- **Headline:** Transforming business-systems challenges into successes since 2006.
- **Story:** Vali LLC was founded in 2006 with a vision of transforming today's business-systems challenges into tomorrow's successes. Our committed experts are passionate about working alongside our customers to achieve their strategic objectives.
- **Mission / What drives us:** "Grow together" isn't a slogan — it's how we engage. We win when our clients win.
- **Values (4 cards):** Partnership · Craftsmanship · Reliability · Curiosity (write a sentence each).
- **Why Vali (differentiators):** business + tech expertise, stringent developer vetting, dedicated teams, delivery within defined parameters and goals.
- Optional: leadership / team placeholder grid (`TODO: photos & bios`).
- CTA to Contact.

### 3. Services

Intro line: *Vali LLC is a technology services company delivering custom technology services to its clients — from a single specialist to a full dedicated team.*

Detail section for each service (icon, heading, 2–3 sentence description, bulleted capabilities):

1. **Custom Software Development** — Design, build, and implement software applications aligned to your goals and delivered within defined parameters.
2. **Cloud Migration & Modernization** — Migrate to the cloud to build the digital enterprise of tomorrow; optimize for cost, scale, and security (AWS & Azure).
3. **Data & Storage Engineering** — Develop and operate the data-storage ecosystem: pipelines, warehousing, reliability.
4. **UX/UI Design & Development** — Innovative UX/UI design and development services that put users first.
5. **Quality Assurance** — Ensure your product is the highest possible quality with structured, thorough QA.
6. **IT Staffing & Dedicated Teams** — We supply skilled labor across the above areas. A committed, motivated team of IT experts, ideal for various project phases, delivering increased agility and control. Flexible models: contract, contract-to-hire, direct-hire, and fully dedicated teams built through our stringent verification process.

Close with an **engagement models** subsection (Staff Augmentation · Dedicated Team · Project-Based Delivery) and a Get-a-Quote CTA.

### 4. Industries (recommended)

Short intro + tile grid: High Tech, Healthcare, Finance, Manufacturing, Higher Education, Public Sector, Retail/E-commerce. One line each on how Vali helps. (Mark as adaptable — I'll confirm the real target industries.)

### 5. Portfolio / Case Studies

- Intro: proof over promises.
- 3–4 case-study cards (use realistic but clearly-labeled `TODO` placeholders): Challenge → What Vali did → Result. Cover a software build, a cloud migration, a data project, and a staffing engagement.
- Each links to a detail template page.

### 6. Careers

- **Headline:** Build the future with us.
- **Intro:** At Vali, we believe in innovation, collaboration, and excellence. We're building solutions that make a difference and looking for passionate people to join us.
- **Why work with us (4 cards):** A culture that values creativity, diversity, and teamwork · Exciting projects with the latest technologies · A supportive environment for growth and learning · Competitive benefits and genuine work-life balance.
- **Open roles (JobCard list, expandable):**
  - **Senior Software Developer (Angular + Backend)** — Strong Angular focus with backend expertise; builds innovative web applications; thrives in a collaborative, fast-paced environment. Apply → careers@valits.com.
  - **DevOps Engineer (AWS/Azure)** — Cloud infrastructure, automation, and CI/CD pipelines; hands-on with AWS (EC2, S3, ELB, VPC, IAM, SQS, SNS, CloudWatch, CloudFormation, Lambda, Security Groups) and Azure; manages route tables, gateways, and secure VPC traffic. Apply → careers@valits.com.
- Each role: responsibilities + requirements (accordion), clear "Apply" mailto.

### 7. Blog

- Index with card grid (title, excerpt, date, tag, read time).
- Seed 2–3 posts as MDX/data (clearly-labeled sample content): e.g. "Staff augmentation vs. dedicated teams: which fits your project?", "A pragmatic cloud-migration checklist", "How we vet engineers at Vali."
- `/blog/[slug]` article template with clean reading typography.

### 8. Contact & Get a Quote

- Contact page: address, phone, email (all from Company Facts above), a map embed placeholder, and a contact form (name, email, company, message).
- **Get a Quote:** richer form — name, email, company, service(s) needed (multi-select from the six services), engagement model, budget range, timeline, message. Submit → stub API route, success state, no secrets committed.
- Show office hours / response-time reassurance.

---

## Inner / Detail Pages (full specs)

The pages above are the top-level "index" pages. Every one of them links into a **detail (inner) page** built from a reusable template. Build these as dynamic routes driven by a simple data/content layer (a typed `content/` directory of TS or MDX files) so I can add entries without touching components. Each inner page must share the site's Navbar/Footer, breadcrumbs, SEO metadata, JSON-LD where relevant, a related-items strip, and a closing CTA.

### A. Service Detail — `/services/[slug]`

One page per service (all six). Template layout:
- **Breadcrumb:** Home / Services / {Service}
- **Hero:** eyebrow `Service`, service name as H1, one-sentence promise, primary CTA **Get a Quote**, secondary **Talk to us**. Accent gradient side graphic.
- **Overview:** 2–3 paragraphs on what it is and the outcome for the client.
- **What's included (capability grid):** 4–8 items with icon + label + one line.
- **Our approach (numbered steps):** 3–5 steps specific to that service.
- **Tech & tools strip:** relevant stack chips.
- **Engagement models for this service:** which of Staff Aug / Dedicated Team / Project-Based fit.
- **FAQ accordion:** 3–4 Q&As.
- **Related services** (3 cards) + final CTA band.

Seed content per service:
1. **Custom Software Development** (`custom-software-development`) — Includes: discovery & scoping, architecture, full-stack build, API/integration, testing, deployment, handover/support. Approach: Discover → Design → Build in sprints → QA → Launch → Support. Stack chips: Angular, React, Node, .NET, Java, PostgreSQL, REST/GraphQL. FAQ: timelines, fixed-bid vs T&M, IP ownership, post-launch support.
2. **Cloud Migration & Modernization** (`cloud-migration`) — Includes: cloud readiness assessment, migration planning, lift-and-shift vs re-architecture, IaC, CI/CD, cost optimization, security hardening. Stack: AWS, Azure, Terraform/CloudFormation, Docker, Kubernetes. FAQ: downtime, AWS vs Azure, cost, security/compliance.
3. **Data & Storage Engineering** (`data-engineering`) — Includes: data modeling, pipelines/ETL, warehousing, storage architecture, reliability & backups, reporting enablement. Stack: SQL, data-warehouse tooling, streaming, cloud storage. FAQ: migrating legacy data, real-time vs batch, governance.
4. **UX/UI Design & Development** (`ux-ui-design`) — Includes: UX research, wireframes, design systems, prototyping, accessible UI build, usability testing. Stack: Figma, design tokens, component libraries. FAQ: redesign vs new build, design-only engagements, accessibility.
5. **Quality Assurance** (`quality-assurance`) — Includes: test strategy, manual + automated testing, regression, performance/load, CI-integrated QA, defect tracking. Stack: Cypress/Playwright, Selenium, Jest, CI pipelines. FAQ: automation ROI, embedding QA in our team, test coverage.
6. **IT Staffing & Dedicated Teams** (`it-staffing`) — Includes: role intake, sourcing, our stringent vetting process, shortlist, onboarding, ongoing management. Models: contract, contract-to-hire, direct-hire, dedicated team. Approach: Understand the role → Source & vet → Shortlist → You interview → Onboard → Support. FAQ: time-to-shortlist, replacement guarantee, contract-to-hire conversion, US-based talent.

### B. Case Study Detail — `/portfolio/[slug]`

Reusable template (seed 4 entries, content clearly marked `TODO: real metrics/logos`):
- **Breadcrumb + hero:** client type or project name as H1, one-line summary, meta row (Industry · Service · Engagement model · Duration).
- **At a glance sidebar/cards:** Client, Industry, Services used, Timeline, Team size.
- **The Challenge** (2–3 paragraphs).
- **Our Approach / Solution** (paragraphs + a short bulleted "what we did").
- **Results** — 3 stat cards (use `TODO` placeholder numbers) + a short narrative.
- **Tech stack strip.**
- **Pull quote / testimonial** (`TODO: real quote`).
- **Related case studies** (2–3) + CTA "Start a project like this."

Seed 4 case studies covering: (1) a custom software build, (2) a cloud migration, (3) a data-warehouse/analytics project, (4) a staff-augmentation/dedicated-team engagement. Write realistic Challenge→Approach→Results narratives with placeholder metrics.

### C. Blog Post — `/blog/[slug]`

MDX-driven article template:
- **Header:** category chip, H1 title, author + role, publish date, read time, hero image placeholder.
- **Body:** rich reading typography (headings, lists, blockquotes, inline code, callout box component). Max ~70ch measure, generous line-height.
- **Table of contents** for longer posts (sticky on desktop, auto-generated from H2s).
- **Author card** at the end (`TODO: real bio`).
- **Share buttons** (copy link / LinkedIn / X).
- **Related posts** (3) + newsletter/contact CTA.

Seed 3 full posts (real, useful copy — not lorem): 
1. *"Staff augmentation vs. dedicated teams: which model fits your project?"* — compare cost, control, ramp-up, best-fit scenarios.
2. *"A pragmatic cloud-migration checklist for mid-size teams"* — assess, plan, pilot, migrate, optimize.
3. *"How we vet engineers at Vali"* — our stringent verification process, step by step.

### D. Job Detail — `/careers/[slug]`

One page per open role (both roles below). Template:
- **Breadcrumb + hero:** role title H1, meta chips (Type · Location/Remote · Team), **Apply Now** button (mailto `careers@valits.com` with a prefilled subject like `Application: {Role}`).
- **About the role** (2 paragraphs).
- **Responsibilities** (bulleted).
- **Requirements / What you'll bring** (bulleted).
- **Nice to have** (bulleted).
- **Why Vali** (reuse the 4 culture points).
- **Apply CTA** at the bottom + "See all openings" link.

Seed roles with full detail:
1. **Senior Software Developer — Angular + Backend** (`senior-software-developer-angular`). Responsibilities: build and maintain innovative web applications with a strong Angular focus; contribute backend features and APIs; collaborate across design and delivery; write clean, tested code; participate in reviews. Requirements: senior-level experience; strong Angular (RxJS, state management, component architecture); solid backend expertise (Node or .NET or Java); REST/API design; Git; thrives in a collaborative, fast-paced environment. Nice to have: cloud (AWS/Azure), CI/CD, testing frameworks.
2. **DevOps Engineer — AWS/Azure** (`devops-engineer-aws-azure`). Responsibilities: administer and manage AWS services (EC2, S3, ELB, VPC, IAM, NACL, SQS, SNS, SES, CloudWatch, CloudFormation, Lambda, Security Groups); set up and manage Route Tables, Internet Gateways, and NAT Gateways for secure, efficient VPC traffic; build and optimize CI/CD pipelines; automate infrastructure; manage and optimize AWS and Azure environments. Requirements: strong background in cloud infrastructure, automation, and CI/CD; hands-on AWS + Azure; IaC (Terraform/CloudFormation); scripting; monitoring/observability. Nice to have: Kubernetes, security/compliance experience.

### E. Industry Detail — `/industries/[slug]` (if Industries is kept)

Per-industry template: hero (industry + how Vali helps), common challenges in that sector, relevant services, a mini case-study link, and a CTA. Seed the ones I confirm (default set: High Tech, Healthcare, Finance, Manufacturing, Higher Education, Public Sector).

### F. Utility / System Pages

- **`/quote`** — dedicated Get-a-Quote page (rich form described in the Contact section) with a friendly intro, trust signals (founded 2006, US-based, vetted talent), and a success/thank-you state at `/quote/thank-you`.
- **`/contact` success** — `/contact/thank-you` confirmation state.
- **404** (`not-found.tsx`) — on-brand, with search-free helpful links back to key pages.
- **Legal placeholders:** `/privacy` and `/terms` with basic templated content marked `TODO: legal review`.

### Data Layer (so inner pages are easy to extend)

Create typed content collections, e.g.:
```
content/
  services/*.ts        // slug, name, promise, overview, includes[], approach[], stack[], faqs[]
  case-studies/*.ts    // slug, title, industry, services[], challenge, approach, results[], quote
  posts/*.mdx          // frontmatter: title, excerpt, date, author, category, readTime
  jobs/*.ts            // slug, title, type, location, responsibilities[], requirements[], niceToHave[]
  industries/*.ts
```
Index pages map over these collections; `[slug]` pages look them up and render the template. Generate `generateStaticParams` and per-item `metadata` from the same data.

---

## Global Requirements

- **Responsive:** flawless from 360px to 1440px+. Mobile nav drawer. No horizontal scroll.
- **Accessibility:** semantic HTML, keyboard-navigable, visible focus states, alt text, `aria` where needed, AA contrast, `prefers-reduced-motion` honored.
- **SEO:** per-page `metadata` (title, description, Open Graph), sensible headings, `sitemap.ts`, `robots.ts`, JSON-LD `Organization` schema with the real NAP (name/address/phone).
- **Performance:** optimize images with `next/image`, lazy-load below the fold, minimal client JS, target Lighthouse 90+ across the board.
- **Consistency:** every section uses the shared `Section`/`SectionHeading` components and design tokens.
- **Placeholders:** where real assets/photos/logos/testimonials are missing, use tasteful placeholders and mark them with an obvious `TODO:` comment so I can swap them.

---

## Assets & Branding

- No official logo provided — create a clean wordmark "**Vali**" with a small growth-motif glyph (e.g., an upward node/leaf mark) as an inline SVG so it's easy to replace later.
- Use abstract, on-brand SVG/gradient graphics and royalty-free-style illustrations or generated shapes — do not scrape or embed copyrighted images from the old site or elsewhere.

---

## How to Proceed

1. Scaffold the Next.js + TypeScript + Tailwind project, add fonts, tokens, and the Tailwind config.
2. Build `Navbar`, `Footer`, and base components (`Button`, `Section`, `Card`, etc.).
3. Build the **Home** page end-to-end to lock the visual language. Pause and show me.
4. After I confirm the look, build the remaining top-level pages reusing the system.
5. Set up the `content/` data layer, then build the inner/detail templates (`/services/[slug]`, `/portfolio/[slug]`, `/blog/[slug]`, `/careers/[slug]`, `/industries/[slug]`) and seed all entries. Include `generateStaticParams` + per-item `metadata`, and add the system pages (404, thank-you, privacy, terms).
6. Add forms + stub API route, SEO metadata, sitemap/robots (include every `[slug]`), and JSON-LD.
7. Run `next lint`, fix warnings, and give me a short README with run/deploy steps.

Ask me before making big directional choices (e.g., dropping Industries, changing the palette). Otherwise, make sensible decisions and keep moving. Start now with steps 1–3.
