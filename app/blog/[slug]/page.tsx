import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
    }
  } catch {
    return { title: "Post Not Found" }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <>
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-subtle text-sm hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
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

        <h1 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-subtle">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-8 h-px bg-white/[0.07]" />
      </header>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose-blog">
        <MDXRemote source={post.content} />
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-xl border border-rim-accent bg-accent-muted p-6 md:p-8">
          <h3 className="font-display font-600 text-ink text-xl mb-2">
            Ready to automate your firm&apos;s intake?
          </h3>
          <p className="text-subtle text-sm mb-5">
            Book a short call and we&apos;ll map your current intake process and show you
            exactly where cases are being lost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all"
          >
            Book a Discovery Call
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </>
  )
}
