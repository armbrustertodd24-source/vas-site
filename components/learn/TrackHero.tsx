import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import { type Track, TRACKS } from "@/lib/learn"
import { cn } from "@/lib/utils"

export default function TrackHero({
  track,
  access,
  mockup,
}: {
  track: Track
  access: string
  mockup: React.ReactNode
}) {
  const Icon = track.icon
  const index = TRACKS.findIndex((t) => t.slug === track.slug)

  return (
    <section className="relative overflow-hidden cl-grid border-b border-cl-rim">
      <div
        className={cn(
          "absolute top-[-140px] left-1/2 -translate-x-1/2 w-[620px] h-[400px] rounded-full blur-[120px] pointer-events-none bg-gradient-to-b",
          track.gradient
        )}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-cl-muted mb-5">
            <Link href="/learn" className="hover:text-cl-ink transition-colors">Academy</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cl-ink-soft">{track.name}</span>
          </nav>

          <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4", track.softBg, track.text)}>
            <Icon className="w-3.5 h-3.5" /> Track {index + 1}
          </span>
          <h1 className="font-display font-800 text-4xl sm:text-5xl leading-[1.05] text-cl-ink tracking-tight mb-3">
            {track.name}
          </h1>
          <p className="font-display text-lg text-cl-ink-soft mb-4">{track.tagline}</p>
          <p className="text-cl-muted leading-relaxed max-w-xl mb-5">{track.blurb}</p>
          <div className="inline-flex items-start gap-2 rounded-xl border border-cl-rim bg-cl-surface px-4 py-2.5 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-cl-muted mt-0.5">Where</span>
            <span className="text-cl-ink-soft">{access}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="left">
          {mockup}
        </FadeIn>
      </div>
    </section>
  )
}
