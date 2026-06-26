"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Track } from "@/lib/learn"

/**
 * Fallback hero visual for a course that doesn't ship a bespoke mockup.
 * Uses the track's icon and accent so a new course still looks complete.
 */
export default function GenericMockup({ track }: { track: Track }) {
  const Icon = track.icon
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center justify-between px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <span className="text-xs font-medium text-cl-ink-soft">{track.name}</span>
        <span className={cn("flex items-center gap-1.5 text-[11px] font-medium", track.text)}>
          <motion.span
            className={cn("w-1.5 h-1.5 rounded-full", track.bg)}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          Course
        </span>
      </div>
      <div className="p-8 flex flex-col items-center text-center gap-4">
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", track.softBg)}
        >
          <Icon className={cn("w-8 h-8", track.text)} />
        </motion.span>
        <div>
          <p className="font-display font-700 text-cl-ink text-lg">{track.name}</p>
          <p className="text-cl-muted text-sm mt-1 max-w-xs">{track.tagline}</p>
        </div>
      </div>
    </div>
  )
}
