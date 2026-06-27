"use client"

import { motion } from "framer-motion"
import { Bot, BarChart3 } from "lucide-react"

const bars = [38, 52, 47, 68, 84]

export default function GptMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center justify-between px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <span className="flex items-center gap-2 text-xs font-medium text-cl-ink-soft">
          <Bot className="w-3.5 h-3.5 text-cl-gpt" /> ChatGPT
        </span>
        <span className="text-[11px] text-cl-muted">Data analysis</span>
      </div>

      <div className="p-4 space-y-3">
        {/* User prompt */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-cl-gpt px-3 py-2 text-[12px] text-white"
        >
          Chart this sales CSV and tell me the trend.
        </motion.div>

        {/* Assistant reply */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="max-w-[88%] rounded-2xl rounded-bl-sm border border-cl-rim bg-cl-bg px-3 py-3"
        >
          <div className="flex items-center gap-1.5 mb-2 text-[11px] font-medium text-cl-gpt">
            <BarChart3 className="w-3.5 h-3.5" /> Revenue by month
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200, damping: 18 }}
                className="flex-1 rounded-t bg-cl-gpt/70"
              />
            ))}
          </div>
          <p className="mt-2.5 text-[12px] text-cl-ink-soft leading-snug">
            Up <strong className="text-cl-ink">+34%</strong> since January — strongest
            month was May.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
