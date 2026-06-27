import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { TRACKS, BRAND } from "@/lib/learn"

export default function LearnFooter() {
  return (
    <footer className="mt-24 border-t border-cl-rim bg-cl-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/learn" className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-cl-accent flex items-center justify-center">
                <GraduationCap className="w-[18px] h-[18px] text-white" />
              </span>
              <span className="font-display font-700 text-cl-ink text-[15px]">{BRAND}</span>
            </Link>
            <p className="text-cl-muted text-sm leading-relaxed">
              A hands-on, visual guide to getting proficient with today&apos;s AI tools —
              from your first conversation to automating real work.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cl-muted mb-4">
              Learning tracks
            </p>
            <ul className="space-y-2.5">
              {TRACKS.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/learn/${t.slug}`}
                    className="text-sm text-cl-ink-soft hover:text-cl-accent transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cl-muted mb-4">
              Membership
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/learn/pricing" className="text-sm text-cl-ink-soft hover:text-cl-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/learn/chat" className="text-sm text-cl-ink-soft hover:text-cl-accent transition-colors">
                  Start free
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cl-ink-soft hover:text-cl-accent transition-colors">
                  Teams &amp; firms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cl-rim flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cl-muted text-xs max-w-xl">
            {BRAND} is an independent learning resource — not affiliated with or endorsed by
            Anthropic, OpenAI, or Google. Claude, ChatGPT, and Gemini are trademarks of their
            respective owners.
          </p>
          <p className="text-cl-muted text-xs whitespace-nowrap">© {new Date().getFullYear()} {BRAND}</p>
        </div>
      </div>
    </footer>
  )
}
