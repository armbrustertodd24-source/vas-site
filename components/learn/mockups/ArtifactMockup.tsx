"use client"

import { motion } from "framer-motion"
import { Code2, Eye, Share2 } from "lucide-react"

export default function ArtifactMockup() {
  return (
    <div className="rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_12px_40px_rgba(33,29,23,0.08)] overflow-hidden select-none">
      <div className="flex items-center gap-2 px-4 h-10 border-b border-cl-rim bg-cl-surface-2/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
          <span className="w-2.5 h-2.5 rounded-full bg-cl-rim" />
        </div>
        <span className="ml-2 text-xs font-medium text-cl-ink-soft">Claude · Artifacts</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] min-h-[220px]">
        {/* Chat side */}
        <div className="p-4 space-y-3 border-b sm:border-b-0 sm:border-r border-cl-rim">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-end"
          >
            <div className="max-w-[88%] rounded-2xl rounded-br-md bg-cl-design text-white px-3 py-2 text-[12.5px] leading-relaxed">
              Build me an interactive tip calculator.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="max-w-[92%] rounded-2xl rounded-bl-md bg-cl-surface-2 border border-cl-rim text-cl-ink px-3 py-2 text-[12.5px] leading-relaxed"
          >
            Done — here it is on the right. Drag the slider to change the tip.
          </motion.div>
        </div>

        {/* Artifact preview side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.45 }}
          className="bg-cl-bg p-4 flex flex-col"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-1 text-[11px]">
              <span className="flex items-center gap-1 rounded-md bg-cl-design-soft text-cl-design px-2 py-1 font-medium">
                <Eye className="w-3 h-3" /> Preview
              </span>
              <span className="flex items-center gap-1 rounded-md text-cl-muted px-2 py-1">
                <Code2 className="w-3 h-3" /> Code
              </span>
            </div>
            <Share2 className="w-3.5 h-3.5 text-cl-muted" />
          </div>

          <div className="flex-1 rounded-xl bg-cl-surface border border-cl-rim p-4 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-wider text-cl-muted mb-1">Total per person</p>
            <p className="font-display font-700 text-2xl text-cl-ink mb-3">$24.15</p>
            <div className="h-1.5 rounded-full bg-cl-surface-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-cl-design"
                initial={{ width: "20%" }}
                whileInView={{ width: "65%" }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[10px] text-cl-muted">
              <span>Tip</span>
              <span>20%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
