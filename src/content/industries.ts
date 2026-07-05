import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  HeartPulse,
  Landmark,
  Factory,
  GraduationCap,
  Building2,
  ShoppingCart,
} from "lucide-react";

export type IndustryContent = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  challenges: string[];
  relevantServiceSlugs: string[];
  caseStudySlug?: string;
};

export const INDUSTRIES: IndustryContent[] = [
  {
    slug: "high-tech",
    icon: Cpu,
    title: "High Tech",
    description: "Engineering capacity and specialized skills to ship ambitious product roadmaps.",
    challenges: [
      "Scaling engineering capacity without sacrificing product quality",
      "Modernizing platforms while continuing to ship new features",
      "Finding specialized skills fast enough to hit release windows",
    ],
    relevantServiceSlugs: ["custom-software-development", "cloud-migration", "it-staffing"],
    caseStudySlug: "custom-software-build",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure, reliable systems for providers and health-tech organizations.",
    challenges: [
      "Building software that meets strict security and reliability bars",
      "Modernizing legacy systems that can't tolerate downtime",
      "Turning fragmented data into trustworthy reporting",
    ],
    relevantServiceSlugs: ["custom-software-development", "data-engineering", "quality-assurance"],
    caseStudySlug: "data-project",
  },
  {
    slug: "finance",
    icon: Landmark,
    title: "Finance",
    description: "Resilient, compliant software for financial services teams.",
    challenges: [
      "Delivering resilient systems under strict compliance requirements",
      "Migrating sensitive workloads to the cloud securely",
      "Maintaining rigorous QA across frequent releases",
    ],
    relevantServiceSlugs: ["cloud-migration", "quality-assurance", "custom-software-development"],
    caseStudySlug: "cloud-migration",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description: "Modernizing operational systems and data across the supply chain.",
    challenges: [
      "Connecting operational data across disconnected systems",
      "Modernizing legacy plant and supply-chain software",
      "Scaling technical teams for multi-site rollouts",
    ],
    relevantServiceSlugs: ["data-engineering", "custom-software-development", "it-staffing"],
    caseStudySlug: "data-project",
  },
  {
    slug: "higher-education",
    icon: GraduationCap,
    title: "Higher Education",
    description: "Digital experiences and systems that serve students and staff alike.",
    challenges: [
      "Delivering digital experiences students and staff actually enjoy using",
      "Maintaining legacy administrative systems",
      "Scaling IT capacity within constrained budgets",
    ],
    relevantServiceSlugs: ["ux-ui-design", "custom-software-development", "it-staffing"],
  },
  {
    slug: "public-sector",
    icon: Building2,
    title: "Public Sector",
    description: "Dependable delivery for public-facing systems and services.",
    challenges: [
      "Delivering public-facing systems that must simply work",
      "Modernizing infrastructure under budget and procurement constraints",
      "Maintaining accountable, well-documented delivery",
    ],
    relevantServiceSlugs: ["custom-software-development", "quality-assurance", "cloud-migration"],
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    title: "Retail / E-commerce",
    description: "Scalable commerce platforms built for peak demand.",
    challenges: [
      "Scaling infrastructure for seasonal and peak traffic",
      "Delivering fast, conversion-friendly UX",
      "Keeping data and inventory systems in sync in real time",
    ],
    relevantServiceSlugs: ["cloud-migration", "ux-ui-design", "data-engineering"],
    caseStudySlug: "staffing-engagement",
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}
