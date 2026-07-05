import { Search, Users2, Hammer, LifeBuoy } from "lucide-react";

export { SERVICES, getServiceBySlug } from "@/content/services";
export type { ServiceContent, EngagementModel } from "@/content/services";
export { CASE_STUDIES, getCaseStudyBySlug } from "@/content/case-studies";
export type { CaseStudyContent } from "@/content/case-studies";
export { JOBS, getJobBySlug } from "@/content/jobs";
export type { JobContent } from "@/content/jobs";
export { BLOG_POSTS, getPostBySlug } from "@/content/posts";
export type { PostContent, ContentBlock } from "@/content/posts";
export { INDUSTRIES, getIndustryBySlug } from "@/content/industries";
export type { IndustryContent } from "@/content/industries";

export const COMPANY = {
  name: "Vali LLC",
  founded: 2006,
  tagline: "Grow together",
  addressLine1: "150 South Pine Island Road, Suite 300",
  addressCity: "Plantation",
  addressState: "FL",
  addressZip: "33324",
  addressCountry: "United States",
  phone: "+1-954-998-9663",
  phoneDisplay: "+1 (954) 998-9663",
  email: "info@valits.com",
  careersEmail: "careers@valits.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: "Staff Augmentation",
    description:
      "Add vetted specialists into a team you already manage, for the skills you need right now.",
  },
  {
    title: "Dedicated Team",
    description:
      "A committed, motivated squad assembled around your project, with its own cadence and ownership.",
  },
  {
    title: "Project-Based Delivery",
    description:
      "End-to-end delivery against defined scope, timeline, and outcomes.",
  },
];

export const VALUE_PROPS = [
  {
    title: "Domain-deep consultants",
    description:
      "Our people are experts in the technology and your industry, so they solve the real problem, not just the ticket.",
  },
  {
    title: "Rigorously vetted talent",
    description:
      "Every developer clears a stringent verification process before they reach your team.",
  },
  {
    title: "Dedicated, specialized teams",
    description:
      "A committed, motivated squad matched to your project phase for real agility and control.",
  },
];

export const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We learn your goals, constraints, and the real problem behind the request.",
  },
  {
    icon: Users2,
    title: "Assemble the right team",
    description:
      "We match vetted specialists to your project — not just available bodies.",
  },
  {
    icon: Hammer,
    title: "Build & iterate",
    description:
      "We ship in tight, transparent cycles so you always know where things stand.",
  },
  {
    icon: LifeBuoy,
    title: "Support & scale",
    description:
      "We stay in the loop after launch, scaling the team as your needs change.",
  },
];

export const STATS = [
  { value: "2006", label: "Founded" },
  { value: "On demand", label: "Vetted engineers" },
  { value: "End-to-end", label: "Delivery" },
  { value: "US-based", label: "Client-first" },
];

export const TESTIMONIAL = {
  quote:
    "Vali's team embedded with us in under two weeks and started shipping immediately. They understood our business, not just the tech stack, and that made all the difference.",
  name: "Rachel Ostrander",
  role: "VP of Engineering, Meridian Health",
};

export const ABOUT_VALUES = [
  {
    title: "Partnership",
    description:
      "We win when our clients win — 'Grow together' is how we engage, not a slogan.",
  },
  {
    title: "Craftsmanship",
    description:
      "We take pride in the details of what we build, not just whether it ships.",
  },
  {
    title: "Reliability",
    description:
      "We deliver within the parameters and goals we agree to, every time.",
  },
  {
    title: "Curiosity",
    description: "We stay students of the technology and industries we serve.",
  },
];

export const CAREERS_CULTURE = [
  {
    title: "Creativity, diversity, teamwork",
    description: "A culture that values creativity, diversity, and teamwork.",
  },
  {
    title: "Exciting projects",
    description: "Exciting projects with the latest technologies.",
  },
  {
    title: "Room to grow",
    description: "A supportive environment for growth and learning.",
  },
  {
    title: "Genuine balance",
    description: "Competitive benefits and genuine work-life balance.",
  },
];
