import type { Metadata } from "next"
import LearnNav from "@/components/learn/LearnNav"
import LearnFooter from "@/components/learn/LearnFooter"
import { BRAND } from "@/lib/learn"

export const metadata: Metadata = {
  title: {
    default: `${BRAND} — Master every AI tool, step by step`,
    template: `%s | ${BRAND}`,
  },
  description:
    "A hands-on, visual training platform for getting proficient with today's AI tools — Claude, ChatGPT, Gemini, and AI automation. Beginner to proficient with guides, visuals, and reference cheat-sheets.",
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-cl-bg text-cl-ink font-sans">
      <LearnNav />
      <main>{children}</main>
      <LearnFooter />
    </div>
  )
}
