import type { Metadata } from "next"
import Link from "next/link"
import { MessageSquare, Phone, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Demo — See AI Intake Automation in Action",
  description:
    "See how AI chat, voice, and follow-up automations handle personal injury intake — qualifying leads, booking consultations, and responding instantly.",
}

const beforeSteps = [
  "Injured person finds your firm online at 9pm",
  "Fills out a contact form or calls — goes to voicemail",
  "No response until next business morning",
  "By morning, they've called 3 other firms",
  "A competitor who responded at 9:05pm already has them signed",
  "Your firm never knew the lead existed",
  "Case lost, revenue lost",
]

const afterSteps = [
  "Injured person finds your firm online at 9pm",
  "AI chat or voice agent responds within 30 seconds",
  "AI gathers injury details and screens the case",
  "AI books a consultation for the next available slot",
  "Confirmation + reminder sent automatically",
  "Lead record created in your CRM with full intake notes",
  "Your attorney walks in the next morning with a booked case",
]

export default function DemoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Live Demo
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-5">
              Experience AI Intake Automation for Personal Injury Firms
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-xl mx-auto">
              See how AI chat and voice agents handle an incoming injury inquiry — screening
              the case, booking a consultation, and responding instantly at any hour.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Live Chat Demo ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-display font-600 text-2xl text-ink">Live AI Intake Chat Demo</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-rim bg-surface overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-surface-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent-muted border border-rim-accent flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">VA</span>
                </div>
                <div>
                  <p className="text-ink text-sm font-medium">Intake Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs text-accent">Online 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 text-center min-h-[240px] flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-accent-muted border border-rim-accent flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-accent" />
              </div>
              <p className="text-ink font-medium mb-2">AI Intake Chat Widget</p>
              <p className="text-subtle text-sm max-w-sm">
                Your live intake chatbot will appear here once connected. It will greet
                potential clients, gather injury details, screen the case, and book a
                consultation automatically.
              </p>
              {/* PLUG IN: Chatbot widget script here */}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── AI Voice Demo ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-display font-600 text-2xl text-ink">AI Voice Agent Demo</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-rim bg-surface overflow-hidden">
            <div className="p-8 md:p-12 text-center min-h-[240px] flex flex-col items-center justify-center">
              <div className="flex items-end gap-1 h-12 mb-6">
                {[3, 6, 9, 12, 8, 5, 10, 7, 4, 11, 6, 3, 8, 10, 5].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-accent/40"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
              <p className="text-ink font-medium mb-2">AI Voice Agent — Injury Intake</p>
              <p className="text-subtle text-sm max-w-sm">
                Hear how the AI handles an after-hours call from an injured person — gathering
                case details, screening for viability, and booking a consultation before the
                caller hangs up.
              </p>
              {/* PLUG IN: Vapi or ElevenLabs voice demo here */}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Before vs After ── */}
      <section className="border-t border-white/[0.06] bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Intake Comparison
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
                Manual Intake vs. Automated Intake
              </h2>
              <p className="text-subtle mt-3 max-w-md mx-auto">
                This is what a typical after-hours injury lead scenario looks like at most PI
                firms — and what it looks like with automation in place.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 gap-6">
            <FadeInItem>
              <div className="rounded-xl border border-white/[0.08] bg-surface p-6">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-display font-600 text-ink text-lg">Without Automation</h3>
                </div>
                <div className="space-y-3">
                  {beforeSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-subtle text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className={`text-sm leading-relaxed ${i >= 4 ? "text-red-400/80" : "text-subtle"}`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="rounded-xl border border-rim-accent bg-accent-muted p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-600 text-ink text-lg">With Automation</h3>
                </div>
                <div className="space-y-3">
                  {afterSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-ink/80">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FadeIn>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-ink mb-4">
            Want a custom demo for your firm?
          </h2>
          <p className="text-subtle mb-8 max-w-md mx-auto">
            Book a short call and we&apos;ll walk through exactly how automation would work
            for your firm&apos;s specific practice areas and intake process.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
          >
            Book a Custom Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
