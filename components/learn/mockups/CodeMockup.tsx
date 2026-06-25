"use client"

import { motion } from "framer-motion"

const lines = [
  { type: "prompt", text: "> add input validation to the signup form" },
  { type: "tool", text: "● Read  components/SignupForm.tsx" },
  { type: "tool", text: "● Edit  components/SignupForm.tsx" },
  { type: "diff-add", text: "+  if (!email.includes(\"@\")) setError(\"Invalid email\")" },
  { type: "diff-del", text: "-  // TODO: validate" },
  { type: "tool", text: "● Bash  npm test" },
  { type: "ok", text: "✓ 14 tests passed" },
  { type: "done", text: "Done — validation added and tests are green." },
]

function lineClass(type: string) {
  switch (type) {
    case "prompt":
      return "text-cl-code font-medium"
    case "tool":
      return "text-cl-ink-soft"
    case "diff-add":
      return "text-cl-cowork"
    case "diff-del":
      return "text-cl-accent"
    case "ok":
      return "text-cl-cowork"
    case "done":
      return "text-cl-ink font-medium"
    default:
      return "text-cl-muted"
  }
}

export default function CodeMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-[#211d17] shadow-[0_12px_40px_rgba(33,29,23,0.18)] overflow-hidden select-none">
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/55 font-mono">claude — terminal</span>
      </div>

      <div className="p-4 font-mono text-[12.5px] leading-[1.8] space-y-0.5 min-h-[210px]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.28, duration: 0.2 }}
            className={lineClass(l.type)}
          >
            {l.text}
          </motion.div>
        ))}
        <motion.span
          className="inline-block w-2 h-4 bg-cl-code align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  )
}
