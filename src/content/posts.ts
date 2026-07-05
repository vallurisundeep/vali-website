export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "callout"; text: string };

export type PostContent = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string; role: string };
  category: string;
  readTime: string;
  body: ContentBlock[];
};

export const BLOG_POSTS: PostContent[] = [
  {
    slug: "staff-augmentation-vs-dedicated-teams",
    title: "Staff augmentation vs. dedicated teams: which model fits your project?",
    excerpt:
      "Two common engagement models solve different problems — here's how to tell which one your project actually needs.",
    date: "2026-03-10",
    author: { name: "Vali LLC", role: "Editorial Team" },
    category: "Staffing",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "When a project needs more engineering capacity, the first decision usually isn't who to hire — it's what kind of engagement to hire for. Staff augmentation and dedicated teams solve different problems, and picking the wrong one tends to show up later as friction rather than as an obvious mistake up front.",
      },
      { type: "h2", text: "What staff augmentation is good at" },
      {
        type: "p",
        text: "Staff augmentation adds individual specialists into a team you already manage. You keep the process, the leadership, and the roadmap — you're filling a specific skills gap or covering capacity, not standing up a new unit.",
      },
      {
        type: "ul",
        items: [
          "You need a specific skill fast, without restructuring how your team works",
          "The work fits inside an existing team's cadence and ownership",
          "The need is likely temporary or will flex up and down",
        ],
      },
      { type: "h2", text: "What a dedicated team is good at" },
      {
        type: "p",
        text: "A dedicated team is a fully-formed unit assembled around your project — its own cadence, its own internal leadership, and clear accountability for outcomes rather than tasks.",
      },
      {
        type: "ul",
        items: [
          "The work is substantial enough to warrant its own roadmap and rituals",
          "You want outcome ownership, not just staffed hours",
          "The engagement is expected to run for a while, not a single sprint",
        ],
      },
      {
        type: "callout",
        text: "The right choice usually comes down to how much ownership you want to retain versus hand off, and how long the need is expected to last.",
      },
      { type: "h2", text: "How we help you decide" },
      {
        type: "p",
        text: "In practice, most engagements start with a conversation about what 'done' looks like and who's accountable for getting there. From that, the right model tends to become obvious — and it's not unusual to start with staff augmentation and grow into a dedicated team as scope solidifies.",
      },
    ],
  },
  {
    slug: "pragmatic-cloud-migration-checklist",
    title: "A pragmatic cloud-migration checklist for mid-size teams",
    excerpt: "Assess, plan, pilot, migrate, optimize — the questions worth answering before you move a single workload.",
    date: "2026-02-18",
    author: { name: "Vali LLC", role: "Editorial Team" },
    category: "Cloud",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Cloud migrations fail less often because of the technology and more often because of what wasn't checked beforehand. This checklist is the pragmatic version — not exhaustive, but the questions that matter most for a mid-size team.",
      },
      { type: "h2", text: "1. Assess" },
      {
        type: "p",
        text: "Before migrating, inventory what you actually run today — including the quiet dependencies nobody remembers configuring. Most surprises during migration come from systems nobody thought to list.",
      },
      {
        type: "ul",
        items: [
          "List every workload, including internal tools no one thinks of as 'production'",
          "Map dependencies between systems, not just the systems themselves",
          "Identify what genuinely can't tolerate downtime",
        ],
      },
      { type: "h2", text: "2. Plan" },
      {
        type: "p",
        text: "Decide what 'done' looks like for cost, performance, and security before you start moving workloads, not after. Without this, 'we migrated' and 'we succeeded' can quietly become different things.",
      },
      { type: "h2", text: "3. Pilot" },
      {
        type: "p",
        text: "Choose a low-risk workload to prove the migration approach before touching anything customer-facing. The pilot should be boring on purpose — its job is to surface process problems, not handle drama.",
      },
      { type: "h2", text: "4. Migrate" },
      {
        type: "p",
        text: "Migrate in phases with rollback plans, and validate each phase against real usage before moving to the next. Resist the urge to migrate everything in one cutover window.",
      },
      { type: "h2", text: "5. Optimize" },
      {
        type: "p",
        text: "Once workloads are stable in the cloud, revisit cost and performance with real usage data. The right-sizing that matters happens after migration, not during it.",
      },
      {
        type: "callout",
        text: "A migration isn't complete when the workload moves — it's complete when it's stable, secure, and costing what you expected.",
      },
    ],
  },
  {
    slug: "how-we-vet-engineers-at-vali",
    title: "How we vet engineers at Vali",
    excerpt: "Our stringent verification process, step by step — and why it exists.",
    date: "2026-01-22",
    author: { name: "Vali LLC", role: "Editorial Team" },
    category: "Culture",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "Every engineer who joins a client engagement at Vali goes through a stringent verification process — technical, communication, and reliability checks — before they ever see a client's codebase.",
      },
      { type: "h2", text: "Why we vet this way" },
      {
        type: "p",
        text: "Staffing is easy to do quickly and poorly. We optimize for a different outcome: engineers who can operate with real ownership from day one, not just fill a seat.",
      },
      { type: "h2", text: "What the process covers" },
      {
        type: "ul",
        items: [
          "Technical depth in the relevant stack, verified through hands-on evaluation",
          "Communication — can they explain tradeoffs clearly to a non-technical stakeholder?",
          "Reliability signals — track record of following through on commitments",
          "Problem framing — do they solve the real problem, or just the ticket in front of them?",
        ],
      },
      {
        type: "blockquote",
        text: "We look for people who can solve the real problem, not just close the ticket in front of them.",
      },
      {
        type: "p",
        text: "This is why clients can trust a Vali engineer to operate with real ownership from day one — the vetting happens before the introduction, not during the first few weeks on the job.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
