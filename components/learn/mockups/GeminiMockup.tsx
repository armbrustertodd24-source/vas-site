"use client"

import { motion } from "framer-motion"
import { Sparkle, Mail } from "lucide-react"

const bullets = [
  "3 invoices need approval today",
  "Client call moved to 2pm",
  "Newsletter draft ready for review",
]

export default function GeminiMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center justify-between px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <span className="flex items-center gap-2 text-xs font-medium text-cl-ink-soft">
          <Sparkle className="w-3.5 h-3.5 text-cl-gemini" /> Gemini
        </span>
        <span className="text-[11px] text-cl-muted">Workspace</span>
      </div>

      <div className="p-4 space-y-3">
        {/* User prompt with @mention */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-cl-gemini px-3 py-2 text-[12px] text-white"
        >
          <span className="inline-flex items-center gap-1 rounded bg-white/20 px-1.5 py-0.5 text-[11px] font-medium">
            <Mail className="w-3 h-3" /> @Gmail
          </span>{" "}
          summarize my unread
        </motion.div>

        {/* Assistant reply */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="max-w-[90%] rounded-2xl rounded-bl-sm border border-cl-rim bg-cl-bg px-3 py-3"
        >
          <p className="text-[12px] text-cl-ink-soft mb-2">Your 9 unread, in short:</p>
          <ul className="space-y-1.5">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + i * 0.15 }}
                className="flex items-start gap-2 text-[12px] text-cl-ink leading-snug"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cl-gemini flex-shrink-0" />
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
