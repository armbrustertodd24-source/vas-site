import { Lightbulb, Info, AlertTriangle, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "tip" | "note" | "warning"

const styles: Record<Variant, { icon: LucideIcon; ring: string; bg: string; text: string; label: string }> = {
  tip: {
    icon: Lightbulb,
    ring: "border-cl-cowork/30",
    bg: "bg-cl-cowork-soft",
    text: "text-cl-cowork",
    label: "Tip",
  },
  note: {
    icon: Info,
    ring: "border-cl-chat/30",
    bg: "bg-cl-chat-soft",
    text: "text-cl-chat",
    label: "Note",
  },
  warning: {
    icon: AlertTriangle,
    ring: "border-cl-code/40",
    bg: "bg-cl-code-soft",
    text: "text-cl-code",
    label: "Watch out",
  },
}

export default function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant
  title?: string
  children: React.ReactNode
}) {
  const s = styles[variant]
  const Icon = s.icon
  return (
    <div className={cn("rounded-xl border p-4 md:p-5 flex gap-3.5", s.ring, s.bg)}>
      <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", s.text)} />
      <div className="min-w-0">
        <p className={cn("text-xs font-semibold uppercase tracking-wider mb-1", s.text)}>
          {title ?? s.label}
        </p>
        <div className="text-cl-ink-soft text-sm leading-relaxed [&_strong]:text-cl-ink [&_strong]:font-semibold [&_code]:bg-cl-surface-2 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-cl-ink [&_code]:text-[0.85em]">
          {children}
        </div>
      </div>
    </div>
  )
}
