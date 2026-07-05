import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import { DetailHero } from "@/components/ui/DetailHero";
import { Section } from "@/components/ui/Section";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { RelatedStrip } from "@/components/ui/RelatedStrip";
import { CtaBand } from "@/components/ui/CtaBand";
import { PostBody, extractHeadings } from "@/components/blog/PostBody";
import { BLOG_POSTS } from "@/lib/data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const headings = extractHeadings(post.body);
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        metaRow={[
          post.author.name,
          new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          post.readTime,
        ]}
      />

      <div className="h-64 w-full bg-gradient-to-br from-primary-deep via-primary to-accent-to opacity-90" />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <TableOfContents headings={headings} />

          <article>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-4">
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
              </span>
              <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
            </div>

            <PostBody blocks={post.body} />

            <div className="mx-auto mt-14 max-w-[70ch] rounded-2xl border border-slate-200 bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Written by
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                {post.author.name}
              </h3>
              <p className="text-sm text-slate-500">{post.author.role}</p>
              <p className="mt-3 text-sm text-slate-500">
                The Vali editorial team writes about staffing, cloud, and software delivery based
                on patterns we see across client engagements.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="bg-surface">
        <RelatedStrip
          title="Related posts"
          items={related.map((p) => ({
            href: `/blog/${p.slug}`,
            title: p.title,
            description: p.excerpt,
            eyebrow: p.category,
          }))}
        />
      </Section>

      <Section>
        <CtaBand
          title="Have a project in mind?"
          subtitle="Tell us what you're working on — we'd love to help."
        />
      </Section>
    </>
  );
}
