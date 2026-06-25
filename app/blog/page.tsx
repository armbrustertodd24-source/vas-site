import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { getAllPosts, formatDate } from "@/lib/blog"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Blog — Insights for Personal Injury Law Firms",
  description:
    "Practical articles on AI automation, intake optimization, and lead conversion for personal injury attorneys.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Blog
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-5">
              Insights for PI Firms
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-lg mx-auto">
              Practical articles on intake automation, lead conversion, and building systems
              that help personal injury firms capture more cases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Post list */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {posts.length === 0 ? (
          <FadeIn>
            <div className="text-center py-16 border border-rim rounded-xl bg-surface">
              <p className="text-subtle">No posts yet. Check back soon.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeInStagger className="space-y-5" staggerDelay={0.07}>
            {posts.map((post) => (
              <FadeInItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group p-6 md:p-8 rounded-xl border border-rim bg-surface hover:border-rim-accent hover:bg-surface-2 transition-all"
                >
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-accent bg-accent-muted border border-rim-accent px-2 py-0.5 rounded-full"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="font-display font-600 text-xl md:text-2xl text-ink group-hover:text-accent transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-subtle text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-subtle">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-2.5 transition-all">
                      Read article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        )}
      </section>
    </>
  )
}
