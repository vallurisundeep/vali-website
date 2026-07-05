import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical, plain-spoken writing on staffing, cloud migration, and how we build software at Vali LLC.",
};

export default function BlogPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Insights"
        title="Notes from the field"
        subtitle="Practical, plain-spoken writing on staffing, cloud migration, and how we build software."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
