"use client"

import { motion } from "framer-motion"

const steps = [
  { id: 1, label: "Call at 2:14 AM", sub: "Burst pipe emergency", delay: 0 },
  { id: 2, label: "AI Answers", sub: "Before the second ring", delay: 0.15 },
  { id: 3, label: "Job Qualified", sub: "Location, urgency, details", delay: 0.3 },
  { id: 4, label: "Booked & Dispatched", sub: "On-call tech alerted", delay: 0.45 },
]

function PulseDot({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-xl bg-accent/20"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        delay,
      }}
    />
  )
}

export default function WorkflowMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-accent/[0.03] rounded-2xl blur-3xl scale-110 pointer-events-none" />

      {/* Main card */}
      <div className="relative border border-white/[0.08] bg-surface rounded-2xl p-6 md:p-8 overflow-hidden">
        {/* Header row */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 h-6 rounded-md bg-white/[0.04] flex items-center px-3">
            <span className="text-xs text-subtle">VAS Automation System — Live</span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-accent font-medium">Active</span>
          </div>
        </div>

        {/* Flow steps */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {steps.map((step, i) => (
            <div key={step.id} className="flex sm:flex-col items-center gap-3 sm:gap-2 w-full sm:w-auto sm:flex-1">
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: step.delay }}
                className="relative flex-shrink-0"
              >
                <PulseDot delay={step.delay} />
                <div className="relative w-12 h-12 rounded-xl bg-surface-2 border border-rim-accent flex items-center justify-center">
                  <span className="text-accent font-display font-700 text-sm">{step.id}</span>
                </div>
              </motion.div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: step.delay + 0.1 }}
                className="text-center sm:text-center"
              >
                <p className="text-ink text-xs font-semibold leading-tight">{step.label}</p>
                <p className="text-subtle text-xs mt-0.5">{step.sub}</p>
              </motion.div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: step.delay + 0.2 }}
                  className="hidden sm:flex flex-1 items-center justify-center origin-left"
                >
                  <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-accent/10 mx-1" />
                  <svg width="6" height="8" viewBox="0 0 6 8" className="text-accent/40 flex-shrink-0">
                    <path d="M0 0 L6 4 L0 8 Z" fill="currentColor" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-4"
        >
          {[
            { label: "Rings to answer", value: "< 2" },
            { label: "Calls answered", value: "100%" },
            { label: "Running", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-accent font-display font-700 text-lg">{stat.value}</p>
              <p className="text-subtle text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
