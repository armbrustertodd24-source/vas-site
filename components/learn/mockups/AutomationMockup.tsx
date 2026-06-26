"use client"

import { motion } from "framer-motion"
import { Webhook, Sparkles, Table2, Send, ArrowDown } from "lucide-react"

const nodes = [
  { icon: Webhook, label: "New form submission", sub: "Trigger · runs automatically", kind: "trigger" as const },
  { icon: Sparkles, label: "Claude: classify & summarize", sub: "Reads the message, returns clean JSON", kind: "claude" as const },
  { icon: Table2, label: "Add row to Google Sheet", sub: "Logs the structured result", kind: "action" as const },
  { icon: Send, label: "Send Slack alert", sub: "Pings the team if it's urgent", kind: "action" as const },
]

export default function AutomationMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center justify-between px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <span className="text-xs font-medium text-cl-ink-soft">Automation · Scenario</span>
        <span className="flex items-center gap-1.5 text-[11px] text-cl-auto font-medium">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-cl-auto"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          Live
        </span>
      </div>

      <div className="p-4">
        {nodes.map(({ icon: Icon, label, sub, kind }, i) => (
          <div key={label}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.22 }}
              className={
                kind === "claude"
                  ? "flex items-center gap-3 rounded-xl border border-cl-auto/40 bg-cl-auto-soft px-3 py-2.5"
                  : "flex items-center gap-3 rounded-xl border border-cl-rim bg-cl-bg px-3 py-2.5"
              }
            >
              <span
                className={
                  kind === "claude"
                    ? "w-8 h-8 rounded-lg bg-cl-auto flex items-center justify-center flex-shrink-0"
                    : "w-8 h-8 rounded-lg bg-cl-surface-2 flex items-center justify-center flex-shrink-0"
                }
              >
                <Icon className={kind === "claude" ? "w-4 h-4 text-white" : "w-4 h-4 text-cl-ink-soft"} />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium text-cl-ink leading-tight">{label}</span>
                <span className="block text-[11px] text-cl-muted mt-0.5">{sub}</span>
              </span>
            </motion.div>

            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 + i * 0.22 }}
                className="flex justify-center py-1"
              >
                <ArrowDown className="w-3.5 h-3.5 text-cl-auto/60" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
