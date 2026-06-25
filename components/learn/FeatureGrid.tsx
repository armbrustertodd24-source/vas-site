import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeInStagger, FadeInItem } from "@/components/FadeIn"

export interface Feature {
  icon: LucideIcon
  title: string
  body: string
}

export default function FeatureGrid({
  features,
  accentText = "text-cl-accent",
  accentBg = "bg-cl-accent-soft",
  columns = 3,
}: {
  features: Feature[]
  accentText?: string
  accentBg?: string
  columns?: 2 | 3
}) {
  return (
    <FadeInStagger
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
      )}
      staggerDelay={0.05}
    >
      {features.map(({ icon: Icon, title, body }) => (
        <FadeInItem key={title}>
          <div className="h-full rounded-xl border border-cl-rim bg-cl-surface p-5 hover:border-cl-rim-accent hover:shadow-[0_8px_30px_rgba(33,29,23,0.06)] transition-all">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3.5", accentBg)}>
              <Icon className={cn("w-5 h-5", accentText)} />
            </div>
            <h3 className="font-display font-600 text-cl-ink text-base mb-1.5">{title}</h3>
            <p className="text-cl-muted text-sm leading-relaxed">{body}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  )
}
