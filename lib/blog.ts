import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  readTime: string
  tags?: string[]
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))

  return files
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(postsDir, fileName), "utf8")
      const { data } = matter(raw)
      return { slug, ...data } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  return { slug, content, ...data } as Post
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
