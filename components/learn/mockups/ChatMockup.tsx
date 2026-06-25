"use client"

import { motion } from "framer-motion"
import { Paperclip, Globe, AudioLines, ArrowUp, ChevronDown } from "lucide-react"

const bubbles = [
  { role: "user", text: "Summarize this 12-page report and pull out the 3 biggest risks." },
  { role: "claude", text: "Here's the gist — the report covers Q2 performance. The three biggest risks are…" },
]

export default function ChatMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
        </div>
        <div className="ml-2 flex items-center gap-1.5 text-xs text-cl-muted">
          <span className="font-medium text-cl-ink-soft">Claude</span>
          <span className="flex items-center gap-0.5 rounded-md bg-cl-surface px-1.5 py-0.5 border border-cl-rim">
            Opus 4.8 <ChevronDown className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 min-h-[180px]">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.5, duration: 0.4 }}
            className={b.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                b.role === "user"
                  ? "max-w-[78%] rounded-2xl rounded-br-md bg-cl-chat text-white px-3.5 py-2.5 text-[13px] leading-relaxed"
                  : "max-w-[82%] rounded-2xl rounded-bl-md bg-cl-surface-2 text-cl-ink px-3.5 py-2.5 text-[13px] leading-relaxed border border-cl-rim"
              }
            >
              {b.text}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="flex gap-1.5 pl-1"
        >
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className="w-1.5 h-1.5 rounded-full bg-cl-chat"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Composer */}
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-cl-rim bg-cl-bg px-3 py-2.5 flex items-center gap-3">
          <span className="text-[13px] text-cl-muted flex-1">Reply to Claude…</span>
          <Paperclip className="w-4 h-4 text-cl-muted" />
          <Globe className="w-4 h-4 text-cl-muted" />
          <AudioLines className="w-4 h-4 text-cl-muted" />
          <span className="w-6 h-6 rounded-lg bg-cl-chat flex items-center justify-center">
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </span>
        </div>
      </div>
    </div>
  )
}
