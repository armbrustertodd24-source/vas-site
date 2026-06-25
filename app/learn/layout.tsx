import type { Metadata } from "next"
import LearnNav from "@/components/learn/LearnNav"
import LearnFooter from "@/components/learn/LearnFooter"
import { BRAND } from "@/lib/learn"

export const metadata: Metadata = {
  title: {
    default: `${BRAND} — Learn Claude, step by step`,
    template: `%s | ${BRAND}`,
  },
  description:
    "A hands-on, visual training site for getting proficient with Claude — Claude Chat, Projects & Artifacts, Cowork, and Claude Code. Beginner to proficient with guides, visuals, and reference cheat-sheets.",
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
