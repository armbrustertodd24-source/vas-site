"use client"

import { motion } from "framer-motion"
import { Check, Mail, Calendar, FileText, Loader2 } from "lucide-react"

const apps = [
  { icon: Mail, label: "Gmail" },
  { icon: Calendar, label: "Calendar" },
  { icon: FileText, label: "Drive" },
]

const steps = [
  { label: "Read 18 unread emails", done: true },
  { label: "Pull today's calendar events", done: true },
  { label: "Draft the morning briefing", done: false },
  { label: "Save to Drive", done: false },
]

export default function CoworkMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center justify-between px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <span className="text-xs font-medium text-cl-ink-soft">Claude · Cowork</span>
        <span className="flex items-center gap-1.5 text-[11px] text-cl-cowork font-medium">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-cl-cowork"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          Working
        </span>
      </div>

      <div className="p-4">
        <p className="text-[13px] text-cl-ink font-medium mb-1">
          Task: Compile my daily briefing
        </p>
        <p className="text-[12px] text-cl-muted mb-4">
          Across {apps.length} connected apps
        </p>

        {/* App chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {apps.map(({ icon: Icon, label }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="flex items-center gap-1.5 rounded-lg border border-cl-rim bg-cl-bg px-2.5 py-1.5 text-[12px] text-cl-ink-soft"
            >
              <Icon className="w-3.5 h-3.5 text-cl-cowork" />
              {label}
            </motion.span>
          ))}
        </div>

        {/* Step list */}
        <div className="space-y-2.5">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18 }}
              className="flex items-center gap-2.5"
            >
              <span
                className={
                  s.done
                    ? "w-5 h-5 rounded-full bg-cl-cowork flex items-center justify-center flex-shrink-0"
                    : i === 2
                    ? "w-5 h-5 rounded-full border-2 border-cl-cowork flex items-center justify-center flex-shrink-0"
                    : "w-5 h-5 rounded-full border-2 border-cl-rim flex-shrink-0"
                }
              >
                {s.done ? (
                  <Check className="w-3 h-3 text-white" />
                ) : i === 2 ? (
                  <Loader2 className="w-3 h-3 text-cl-cowork animate-spin" />
                ) : null}
              </span>
              <span
                className={
                  s.done
                    ? "text-[13px] text-cl-muted line-through"
                    : i === 2
                    ? "text-[13px] text-cl-ink font-medium"
                    : "text-[13px] text-cl-muted"
                }
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
