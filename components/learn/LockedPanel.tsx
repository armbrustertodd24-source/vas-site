import Link from "next/link"
import { Lock, ArrowRight, Check } from "lucide-react"

/**
 * Shown in place of a gated level's real content for users without a paid plan.
 * The real steps are never rendered here, so they never reach the client.
 */
export default function LockedPanel({
  label,
  blurb,
}: {
  label: string
  blurb: string
}) {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface p-8 md:p-12 text-center">
      <div className="w-12 h-12 rounded-xl bg-cl-accent-soft flex items-center justify-center mx-auto mb-4">
        <Lock className="w-5 h-5 text-cl-accent" />
      </div>
      <h3 className="font-display font-700 text-xl sm:text-2xl text-cl-ink mb-2">
        {label} is part of Pro
      </h3>
      <p className="text-cl-muted text-sm leading-relaxed max-w-md mx-auto mb-6">
        {blurb}. Unlock this — and every Intermediate &amp; Proficient lesson across
        all tracks — with a Pro membership.
      </p>

      <ul className="inline-flex flex-col items-start gap-2 text-sm text-cl-ink-soft mb-7">
        {[
          "All Intermediate & Proficient lessons, every track",
          "Advanced step-by-step walkthroughs",
          "New tracks and lessons as they ship",
        ].map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-cl-accent-soft flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-cl-accent" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div>
        <Link
          href="/learn/pricing"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-cl-accent text-white text-sm font-semibold hover:bg-cl-accent-dark transition-colors"
        >
          Unlock with Pro <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-xs text-cl-muted mt-4">Every Beginner level stays free.</p>
    </div>
  )
}
