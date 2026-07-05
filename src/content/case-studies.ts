export type CaseStudyContent = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  client: string;
  industry: string;
  serviceSlugs: string[];
  engagementModel: string;
  duration: string;
  teamSize: string;
  challenge: string[];
  approach: string[];
  whatWeDid: string[];
  results: { value: string; label: string }[];
  resultsNarrative: string;
  stack: string[];
  quote: { quote: string; name: string; role: string };
};

export const CASE_STUDIES: CaseStudyContent[] = [
  {
    slug: "custom-software-build",
    category: "Custom Software",
    title: "Modernizing a core operations platform for Vantage Robotics",
    summary:
      "A legacy internal system was slowing down day-to-day operations — Vali rebuilt it in shippable phases.",
    client: "Vantage Robotics",
    industry: "High Tech",
    serviceSlugs: ["custom-software-development"],
    engagementModel: "Dedicated Team",
    duration: "6 months",
    teamSize: "5 engineers",
    challenge: [
      "Vantage Robotics ran its production scheduling and inventory tracking on an internal tool built almost a decade earlier. The system had become slow, brittle, and difficult to change without breaking something else.",
      "Manual workarounds had accumulated over the years, and the engineers who originally built the platform had since left the company — so every change carried outsized risk.",
    ],
    approach: [
      "Vali assembled a dedicated team to audit, re-architect, and rebuild the platform in iterative, shippable phases rather than a risky big-bang rewrite.",
      "We prioritized the highest-friction workflows first, shipping improvements the operations team could feel within weeks instead of waiting months for a full replacement.",
    ],
    whatWeDid: [
      "Audited the legacy system and mapped every critical workflow end to end",
      "Re-architected the core platform for maintainability and scale",
      "Shipped in two-week sprints with continuous stakeholder feedback",
      "Trained the internal team to own and extend the system after launch",
    ],
    results: [
      { value: "38%", label: "Faster workflow completion" },
      { value: "0", label: "Manual workarounds remaining" },
      { value: "99.9%", label: "Uptime since launch" },
    ],
    resultsNarrative:
      "Six months after launch, the operations team completes scheduling and inventory workflows more than a third faster, with none of the manual spreadsheet workarounds that used to fill the gaps. The platform has run without a single unplanned outage since go-live.",
    stack: ["Angular", "Node.js", "PostgreSQL"],
    quote: {
      quote:
        "Vali's team embedded quickly and delivered exactly what we needed, on time. They understood our operations well enough to challenge our assumptions, not just build what we asked for.",
      name: "Daniel Ferro",
      role: "Director of Operations, Vantage Robotics",
    },
  },
  {
    slug: "cloud-migration",
    category: "Cloud Migration",
    title: "Migrating Fintra Capital to a modern cloud infrastructure",
    summary: "On-premise infrastructure was costly and hard to scale — Vali led a phased AWS migration.",
    client: "Fintra Capital",
    industry: "Finance",
    serviceSlugs: ["cloud-migration"],
    engagementModel: "Project-Based Delivery",
    duration: "4 months",
    teamSize: "4 engineers",
    challenge: [
      "Fintra Capital's on-premise infrastructure was expensive to maintain and couldn't scale with transaction volume during peak trading periods.",
      "As a financial services firm, Fintra needed to modernize without disrupting always-on, customer-facing trading and reporting services.",
    ],
    approach: [
      "Vali planned and executed a phased migration to AWS, sequencing workloads by risk so the highest-stakes systems moved last, with rollback points at every stage.",
      "We piloted the approach on a low-risk internal workload first, then used what we learned to move customer-facing systems with zero unplanned downtime.",
    ],
    whatWeDid: [
      "Assessed all workloads and mapped their dependencies",
      "Designed a phased migration plan with rollback points at each stage",
      "Migrated infrastructure to AWS using infrastructure-as-code",
      "Optimized cost and hardened security post-migration",
    ],
    results: [
      { value: "32%", label: "Lower infrastructure cost" },
      { value: "0", label: "Unplanned downtime during migration" },
      { value: "2x", label: "Faster deploy cadence" },
    ],
    resultsNarrative:
      "Fintra now runs on right-sized AWS infrastructure at roughly two-thirds of its previous hosting cost, with a deployment pipeline that lets engineering ship twice as often — and the migration itself completed with zero unplanned downtime for traders.",
    stack: ["AWS", "Terraform", "Docker"],
    quote: {
      quote:
        "The migration was smoother than we expected, with zero surprises. Vali walked us through every phase before it happened, so nothing landed on our desk unannounced.",
      name: "Priya Nandakumar",
      role: "Head of Infrastructure, Fintra Capital",
    },
  },
  {
    slug: "data-project",
    category: "Data Engineering",
    title: "Building a unified data pipeline for Meridian Health",
    summary: "Disconnected systems made reporting slow — Vali built a centralized pipeline and warehouse.",
    client: "Meridian Health",
    industry: "Healthcare",
    serviceSlugs: ["data-engineering"],
    engagementModel: "Dedicated Team",
    duration: "5 months",
    teamSize: "3 engineers",
    challenge: [
      "Meridian Health's patient scheduling, billing, and outcomes data lived in disconnected systems, making organization-wide reporting slow and unreliable.",
      "Different departments trusted different numbers, because each pulled reports from a different source of truth — often with conflicting totals for the same metric.",
    ],
    approach: [
      "Vali designed a centralized pipeline and warehouse feeding a single source of truth for every downstream report and dashboard.",
      "We validated data quality at every stage of the pipeline before enabling any downstream reporting, so trust was built in from day one rather than patched in afterward.",
    ],
    whatWeDid: [
      "Mapped every existing data source and its owner across departments",
      "Built ETL pipelines feeding a central warehouse",
      "Implemented automated data quality monitoring and alerting",
      "Enabled trusted dashboards for leadership and department reporting",
    ],
    results: [
      { value: "1", label: "Single source of truth" },
      { value: "65%", label: "Faster report generation" },
      { value: "Daily", label: "Data refresh cadence" },
    ],
    resultsNarrative:
      "Leadership and department teams now pull from the same warehouse instead of five different spreadsheets, cutting report turnaround by nearly two-thirds and ending the recurring debate over whose numbers were right.",
    stack: ["SQL", "Cloud data warehouse", "Streaming pipelines"],
    quote: {
      quote:
        "For the first time, every team is looking at the same numbers. That alone changed how quickly we could make decisions.",
      name: "Rachel Ostrander",
      role: "VP of Engineering, Meridian Health",
    },
  },
  {
    slug: "staffing-engagement",
    category: "IT Staffing",
    title: "Standing up a dedicated engineering team for Loop & Co.",
    summary: "A growing team needed to scale fast — Vali sourced and vetted a dedicated engineering team.",
    client: "Loop & Co.",
    industry: "Retail / E-commerce",
    serviceSlugs: ["it-staffing"],
    engagementModel: "Dedicated Team",
    duration: "Ongoing since 2025",
    teamSize: "6 engineers",
    challenge: [
      "Loop & Co.'s engineering team needed to scale quickly ahead of a major platform relaunch, but their existing hiring pipeline wasn't fast enough to keep pace with the roadmap.",
      "They needed engineers who could contribute from week one, not months into onboarding.",
    ],
    approach: [
      "Vali sourced and rigorously vetted a dedicated team matched to Loop & Co.'s stack, culture, and pace of work.",
      "We onboarded the team directly into Loop & Co.'s existing tools and workflows, so they operated as an extension of the internal team rather than an outside vendor.",
    ],
    whatWeDid: [
      "Clarified role requirements and team dynamics with Loop & Co.'s leadership",
      "Sourced and rigorously vetted candidates against the role and culture",
      "Assembled a fully staffed dedicated team within three weeks",
      "Provided ongoing team management and support throughout the engagement",
    ],
    results: [
      { value: "3 weeks", label: "Time to a fully staffed team" },
      { value: "100%", label: "Team retention after 6 months" },
      { value: "2x", label: "Delivery velocity" },
    ],
    resultsNarrative:
      "Loop & Co. went from an open roadmap to a fully staffed, productive team in three weeks, doubled their delivery velocity heading into the relaunch, and retained the entire team six months in.",
    stack: ["React", "Node.js", "AWS"],
    quote: {
      quote:
        "The team felt like our own within the first week. We stopped thinking of them as contractors almost immediately.",
      name: "Marcus Webb",
      role: "CTO, Loop & Co.",
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}
