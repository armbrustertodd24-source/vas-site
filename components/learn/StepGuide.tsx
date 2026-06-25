import { cn } from "@/lib/utils"

export interface Step {
  title: string
  body: React.ReactNode
  /* Optional visual/mockup rendered beneath the step body */
  visual?: React.ReactNode
}

export default function StepGuide({
  steps,
  accentBg = "bg-cl-accent",
}: {
  steps: Step[]
  accentBg?: string
}) {
  return (
    <ol className="relative">
      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-4 sm:gap-5 pb-8 last:pb-0">
          {/* Connector line */}
          {i < steps.length - 1 && (
            <span
              className="absolute left-[15px] sm:left-[17px] top-9 bottom-0 w-px bg-cl-rim"
              aria-hidden
            />
          )}
          {/* Number bubble */}
          <div
            className={cn(
              "relative z-10 flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white font-display font-700 text-sm flex items-center justify-center shadow-sm",
              accentBg
            )}
          >
            {i + 1}
          </div>
          {/* Content */}
          <div className="min-w-0 flex-1 pt-1">
            <h4 className="font-display font-600 text-cl-ink text-base sm:text-lg mb-1.5">
              {step.title}
            </h4>
            <div className="text-cl-muted text-sm leading-relaxed [&_strong]:text-cl-ink [&_strong]:font-semibold [&_a]:text-cl-accent [&_a]:underline [&_a]:underline-offset-2 [&_code]:bg-cl-surface-2 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-cl-ink [&_code]:text-[0.85em] [&_code]:font-mono">
              {step.body}
            </div>
            {step.visual && <div className="mt-4">{step.visual}</div>}
          </div>
        </li>
      ))}
    </ol>
  )
}
