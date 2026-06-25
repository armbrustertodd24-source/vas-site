import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { TRACKS, type TrackSlug } from "@/lib/learn"
import { cn } from "@/lib/utils"

export default function TrackPager({ current }: { current: TrackSlug }) {
  const i = TRACKS.findIndex((t) => t.slug === current)
  const prev = i > 0 ? TRACKS[i - 1] : null
  const next = i < TRACKS.length - 1 ? TRACKS[i + 1] : null

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="group rounded-2xl border border-cl-rim bg-cl-surface p-5 hover:border-cl-rim-accent transition-all"
          >
            <span className="flex items-center gap-1.5 text-xs text-cl-muted mb-1.5">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous track
            </span>
            <span className={cn("font-display font-700 text-lg", prev.text)}>{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="group rounded-2xl border border-cl-rim bg-cl-surface p-5 hover:border-cl-rim-accent transition-all text-right"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs text-cl-muted mb-1.5">
              Next track <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className={cn("font-display font-700 text-lg", next.text)}>{next.name}</span>
          </Link>
        ) : (
          <Link
            href="/learn"
            className="group rounded-2xl border border-cl-rim bg-cl-surface p-5 hover:border-cl-rim-accent transition-all text-right"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs text-cl-muted mb-1.5">
              You finished the path <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-700 text-lg text-cl-accent">Back to overview</span>
          </Link>
        )}
      </div>
    </section>
  )
}
