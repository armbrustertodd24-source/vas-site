import { FadeIn } from "@/components/FadeIn"
import { cn } from "@/lib/utils"

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title?: string
  intro?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20", className)}>
      {(eyebrow || title || intro) && (
        <FadeIn className="mb-7">
          {eyebrow && (
            <p className="text-cl-accent-dark text-xs font-semibold uppercase tracking-widest mb-2">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display font-700 text-2xl sm:text-3xl text-cl-ink mb-2.5">{title}</h2>
          )}
          {intro && <p className="text-cl-muted leading-relaxed max-w-2xl">{intro}</p>}
        </FadeIn>
      )}
      {children}
    </section>
  )
}

export function LevelPanel({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-7">
      <h3 className="font-display font-700 text-xl text-cl-ink">{heading}</h3>
      {children}
    </div>
  )
}
