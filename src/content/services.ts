import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Cloud,
  Database,
  Palette,
  ShieldCheck,
  Users,
  Search,
  Layers,
  Plug,
  FlaskConical,
  Rocket,
  LifeBuoy,
  Server,
  Lock,
  DollarSign,
  GitBranch,
  BarChart3,
  RefreshCw,
  Eye,
  Bug,
  Gauge,
  ClipboardCheck,
  UserSearch,
  UserCheck,
  ListChecks,
  HeartHandshake,
  Boxes,
  Workflow,
} from "lucide-react";

export type EngagementModel = "Staff Augmentation" | "Dedicated Team" | "Project-Based Delivery";

export type ServiceContent = {
  slug: string;
  title: string;
  shortDescription: string;
  promise: string;
  overview: string[];
  icon: LucideIcon;
  includes: { icon: LucideIcon; label: string; description: string }[];
  approach: { title: string; description: string }[];
  stack: string[];
  engagementModels: EngagementModel[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: ServiceContent[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Designing, building, and implementing applications tailored to your goals.",
    promise: "Software built around your business, not the other way around.",
    overview: [
      "We design, build, and implement software applications aligned to your goals and delivered within defined parameters — from greenfield builds to modernizing what you already have.",
      "Our teams pair business context with hands-on engineering, so what ships actually solves the problem you brought to us — not just the ticket as written.",
    ],
    icon: Code2,
    includes: [
      { icon: Search, label: "Discovery & scoping", description: "Understand the goal before the code." },
      { icon: Layers, label: "Architecture", description: "Systems designed to scale with you." },
      { icon: Code2, label: "Full-stack build", description: "Web, mobile, and desktop applications." },
      { icon: Plug, label: "API & integration", description: "Connect cleanly to the systems you already run." },
      { icon: FlaskConical, label: "Testing", description: "Quality built in, not bolted on." },
      { icon: Rocket, label: "Deployment", description: "Ship confidently, on your infrastructure of choice." },
      { icon: LifeBuoy, label: "Handover & support", description: "Documentation and support that outlasts launch day." },
    ],
    approach: [
      { title: "Discover", description: "We learn your goals, constraints, and users." },
      { title: "Design", description: "We shape the architecture and experience before writing code." },
      { title: "Build in sprints", description: "We ship in short, visible cycles." },
      { title: "QA", description: "We test continuously, not just before launch." },
      { title: "Launch", description: "We deploy with a plan, not a scramble." },
      { title: "Support", description: "We stay in the loop after go-live." },
    ],
    stack: ["Angular", "React", "Node.js", ".NET", "Java", "PostgreSQL", "REST", "GraphQL"],
    engagementModels: ["Staff Augmentation", "Dedicated Team", "Project-Based Delivery"],
    faqs: [
      {
        question: "How long does a typical project take?",
        answer:
          "It depends on scope — a focused feature can ship in weeks, while a full platform build typically runs several months. We give you a realistic timeline after discovery, not before.",
      },
      {
        question: "Do you work fixed-bid or time & materials?",
        answer:
          "Both, depending on how well-defined the scope is. Well-scoped projects can run fixed-bid; evolving or exploratory work is usually a better fit for time & materials.",
      },
      {
        question: "Who owns the intellectual property?",
        answer: "You do. Code, designs, and documentation we build for you are yours on delivery.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We offer ongoing support and can transition to a smaller maintenance engagement or a dedicated team, depending on what you need next.",
      },
    ],
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration & Modernization",
    shortDescription: "Move to the cloud and build the digital enterprise of tomorrow.",
    promise: "Move to the cloud without moving your risk with it.",
    overview: [
      "We migrate you to the cloud and help you build the digital enterprise of tomorrow — optimizing for cost, scale, and security across AWS and Azure.",
      "Whether you need a straightforward lift-and-shift or a full re-architecture, we plan the path that fits your timeline and risk tolerance.",
    ],
    icon: Cloud,
    includes: [
      { icon: ClipboardCheck, label: "Cloud readiness assessment", description: "Know what you're moving before you move it." },
      { icon: Layers, label: "Migration planning", description: "A sequenced plan, not a leap of faith." },
      { icon: RefreshCw, label: "Lift-and-shift vs. re-architecture", description: "The right approach for each workload." },
      { icon: Workflow, label: "Infrastructure as code", description: "Repeatable, version-controlled environments." },
      { icon: GitBranch, label: "CI/CD", description: "Automated, reliable release pipelines." },
      { icon: DollarSign, label: "Cost optimization", description: "Right-sized infrastructure, not over-provisioned." },
      { icon: Lock, label: "Security hardening", description: "Cloud-native security from day one." },
    ],
    approach: [
      { title: "Assess", description: "We inventory workloads and dependencies." },
      { title: "Plan", description: "We sequence the migration to minimize risk." },
      { title: "Pilot", description: "We prove the approach on a contained workload." },
      { title: "Migrate", description: "We move workloads in phases, with rollback plans." },
      { title: "Optimize", description: "We tune cost, performance, and security post-migration." },
    ],
    stack: ["AWS", "Azure", "Terraform", "CloudFormation", "Docker", "Kubernetes"],
    engagementModels: ["Dedicated Team", "Project-Based Delivery"],
    faqs: [
      {
        question: "Will there be downtime during migration?",
        answer:
          "We plan migrations to minimize or eliminate downtime, using phased cutovers and rollback plans for anything customer-facing.",
      },
      {
        question: "AWS or Azure — how do we choose?",
        answer:
          "It usually comes down to your existing stack, team expertise, and vendor relationships. We can advise or work across either.",
      },
      {
        question: "How do you approach cost?",
        answer:
          "We right-size infrastructure to actual usage and build cost visibility in from the start, rather than optimizing after the bill arrives.",
      },
      {
        question: "What about security and compliance?",
        answer:
          "We build security and compliance requirements into the migration plan itself, not as an afterthought.",
      },
    ],
  },
  {
    slug: "data-engineering",
    title: "Data & Storage Engineering",
    shortDescription: "Design and operate a reliable, scalable data ecosystem.",
    promise: "Data your team can actually trust and act on.",
    overview: [
      "We design and operate your data-storage ecosystem — pipelines, warehousing, and reliability — so decisions are backed by data you can trust.",
      "From fixing brittle legacy pipelines to designing a warehouse from scratch, we build for reliability first.",
    ],
    icon: Database,
    includes: [
      { icon: Layers, label: "Data modeling", description: "Structures that match how the business actually works." },
      { icon: Workflow, label: "Pipelines / ETL", description: "Reliable movement of data, end to end." },
      { icon: Database, label: "Warehousing", description: "A single source of truth for reporting." },
      { icon: Server, label: "Storage architecture", description: "Scalable, cost-aware storage design." },
      { icon: ShieldCheck, label: "Reliability & backups", description: "Data you can recover, not just store." },
      { icon: BarChart3, label: "Reporting enablement", description: "Dashboards and analytics people trust." },
    ],
    approach: [
      { title: "Assess", description: "We map current data sources and pain points." },
      { title: "Design", description: "We design the pipeline and warehouse architecture." },
      { title: "Build", description: "We implement pipelines with monitoring built in." },
      { title: "Validate", description: "We verify data quality against real business use." },
      { title: "Enable", description: "We hand off reporting and dashboards your team trusts." },
    ],
    stack: ["SQL", "Data warehousing", "Streaming pipelines", "Cloud storage"],
    engagementModels: ["Dedicated Team", "Project-Based Delivery"],
    faqs: [
      {
        question: "Can you migrate our legacy data?",
        answer:
          "Yes — we assess existing data sources and design a migration path that preserves integrity and history.",
      },
      {
        question: "Real-time or batch processing?",
        answer:
          "It depends on the use case. We help you decide where real-time actually adds value versus where batch is simpler and cheaper.",
      },
      {
        question: "How do you handle data governance?",
        answer:
          "We build access controls, lineage, and quality checks into the pipeline design rather than treating governance as a separate project.",
      },
    ],
  },
  {
    slug: "ux-ui-design",
    title: "UX/UI Design & Development",
    shortDescription: "Innovative, user-first interfaces that people actually enjoy using.",
    promise: "Interfaces people actually enjoy using.",
    overview: [
      "We deliver innovative UX/UI design and development services that put users first — interfaces people actually enjoy using.",
      "We work across research, design systems, and front-end implementation, so the experience we design is the experience that ships.",
    ],
    icon: Palette,
    includes: [
      { icon: Search, label: "UX research", description: "Understand real user needs and friction." },
      { icon: Workflow, label: "Wireframes", description: "Structure before polish." },
      { icon: Boxes, label: "Design systems", description: "Consistent, reusable components." },
      { icon: Eye, label: "Prototyping", description: "Test the experience before you build it." },
      { icon: Code2, label: "Accessible UI build", description: "Interfaces that work for everyone." },
      { icon: UserCheck, label: "Usability testing", description: "Validate with real users, not assumptions." },
    ],
    approach: [
      { title: "Research", description: "We understand your users and their goals." },
      { title: "Design", description: "We shape flows, wireframes, and visual design." },
      { title: "Prototype", description: "We test the experience before full build-out." },
      { title: "Build", description: "We implement accessible, production-ready UI." },
      { title: "Validate", description: "We test with real users and iterate." },
    ],
    stack: ["Figma", "Design tokens", "Component libraries"],
    engagementModels: ["Staff Augmentation", "Project-Based Delivery"],
    faqs: [
      {
        question: "Redesign or new build — does it matter?",
        answer:
          "Either works — we adapt research and design depth to whether we're evolving an existing product or starting fresh.",
      },
      {
        question: "Can we engage you for design only?",
        answer:
          "Yes, design-only engagements are common. We can also carry the design through to front-end implementation if you'd like one team owning both.",
      },
      {
        question: "How do you handle accessibility?",
        answer:
          "Accessibility is part of the design and build process from the start — not a final audit pass.",
      },
    ],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    shortDescription: "Rigorous QA so your product ships at the highest possible quality.",
    promise: "Ship with confidence, not crossed fingers.",
    overview: [
      "We make sure your product is the highest possible quality with structured, thorough QA across the delivery lifecycle.",
      "From manual exploratory testing to fully automated regression suites, we build a QA practice that matches how your team ships.",
    ],
    icon: ShieldCheck,
    includes: [
      { icon: ClipboardCheck, label: "Test strategy", description: "A plan matched to your risk areas." },
      { icon: FlaskConical, label: "Manual & automated testing", description: "The right mix for your product." },
      { icon: RefreshCw, label: "Regression testing", description: "Confidence that new work doesn't break old work." },
      { icon: Gauge, label: "Performance & load testing", description: "Know your limits before your users find them." },
      { icon: GitBranch, label: "CI-integrated QA", description: "Quality gates built into your pipeline." },
      { icon: Bug, label: "Defect tracking", description: "Clear visibility from bug report to resolution." },
    ],
    approach: [
      { title: "Strategize", description: "We define coverage and priorities based on risk." },
      { title: "Test", description: "We combine manual and automated testing." },
      { title: "Automate", description: "We build regression suites into your pipeline." },
      { title: "Report", description: "We track defects with clear, actionable detail." },
    ],
    stack: ["Playwright", "Cypress", "Selenium", "Jest", "CI pipelines"],
    engagementModels: ["Staff Augmentation", "Dedicated Team"],
    faqs: [
      {
        question: "Is test automation worth the investment?",
        answer:
          "For anything you'll regression-test repeatedly, yes — automation pays for itself quickly. We help you decide what's worth automating versus testing manually.",
      },
      {
        question: "Can QA embed directly in our existing team?",
        answer:
          "Yes — our QA staff augmentation model puts vetted testers directly into your team and workflow.",
      },
      {
        question: "How do you decide test coverage?",
        answer:
          "We prioritize by risk and usage — critical paths and high-traffic areas get the deepest coverage first.",
      },
    ],
  },
  {
    slug: "it-staffing",
    title: "IT Staffing & Dedicated Teams",
    shortDescription: "Contract, contract-to-hire, and dedicated teams — placed quickly.",
    promise: "Vetted engineers, matched fast, ready to contribute.",
    overview: [
      "We supply skilled labor across all of the above areas. A committed, motivated team of IT experts, ideal for various project phases, delivering increased agility and control.",
      "Flexible models — contract, contract-to-hire, direct-hire, and fully dedicated teams — all built through our stringent verification process.",
    ],
    icon: Users,
    includes: [
      { icon: ClipboardCheck, label: "Role intake", description: "We understand the role, not just the title." },
      { icon: UserSearch, label: "Sourcing", description: "Access to a vetted talent network." },
      { icon: ShieldCheck, label: "Stringent vetting", description: "Every candidate cleared before you meet them." },
      { icon: ListChecks, label: "Shortlist", description: "Fewer, better-matched candidates." },
      { icon: HeartHandshake, label: "Onboarding", description: "A smooth start on your team and tools." },
      { icon: LifeBuoy, label: "Ongoing management", description: "Support that continues after placement." },
    ],
    approach: [
      { title: "Understand the role", description: "We clarify the real need behind the request." },
      { title: "Source & vet", description: "We identify and rigorously verify candidates." },
      { title: "Shortlist", description: "We present a focused, qualified shortlist." },
      { title: "You interview", description: "You make the final call, on your terms." },
      { title: "Onboard", description: "We support a smooth ramp-up." },
      { title: "Support", description: "We stay engaged for the life of the placement." },
    ],
    stack: ["Contract", "Contract-to-hire", "Direct-hire", "Dedicated teams"],
    engagementModels: ["Staff Augmentation", "Dedicated Team"],
    faqs: [
      {
        question: "How quickly can you shortlist candidates?",
        answer:
          "Timelines vary by role, but our vetted network typically lets us deliver a shortlist within days, not weeks.",
      },
      {
        question: "What if a placement isn't the right fit?",
        answer:
          "We work with you to address it quickly, including replacement where needed — the goal is a team that works, not just a filled seat.",
      },
      {
        question: "Can contract roles convert to direct hire?",
        answer: "Yes, contract-to-hire is one of our core models, built for exactly that path.",
      },
      {
        question: "Is your talent US-based?",
        answer:
          "We prioritize US-based, client-first delivery, and can discuss specific location needs for your engagement.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
