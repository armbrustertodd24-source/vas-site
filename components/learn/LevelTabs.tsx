"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Level {
  id: string
  label: string
  blurb: string
  /** Show a lock icon on the tab (content gated behind a paid plan). */
  locked?: boolean
}

export default function LevelTabs({
  levels,
  panels,
  activeBg = "bg-cl-accent",
}: {
  levels: Level[]
  panels: React.ReactNode[]
  activeBg?: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Tab bar */}
      <div className="rounded-2xl border border-cl-rim bg-cl-surface p-1.5 flex flex-col sm:flex-row gap-1.5 mb-8">
        {levels.map((lvl, i) => (
          <button
            key={lvl.id}
            onClick={() => setActive(i)}
            className={cn(
              "relative flex-1 rounded-xl px-4 py-3 text-left transition-colors",
              active === i ? "text-white" : "text-cl-muted hover:text-cl-ink"
            )}
          >
            {active === i && (
              <motion.span
                layoutId="level-pill"
                className={cn("absolute inset-0 rounded-xl shadow-sm", activeBg)}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10 block">
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "w-5 h-5 rounded-full text-[0.7rem] font-bold flex items-center justify-center",
                    active === i ? "bg-white/25 text-white" : "bg-cl-surface-2 text-cl-muted"
                  )}
                >
                  {i + 1}
                </span>
                <span className="font-display font-600 text-sm">{lvl.label}</span>
                {lvl.locked && (
                  <Lock className={cn("w-3 h-3 ml-0.5", active === i ? "text-white/80" : "text-cl-muted")} />
                )}
              </span>
              <span
                className={cn(
                  "block text-xs mt-1 leading-snug",
                  active === i ? "text-white/80" : "text-cl-muted"
                )}
              >
                {lvl.blurb}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {panels[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
