import type { Metadata } from "next"
import Link from "next/link"
import { MessageSquare, Phone, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Demo — Call the Line and Hear the AI Answer",
  description:
    "Call our live demo line and talk to the AI receptionist like a customer with a 2am emergency — then see the side-by-side of what happens with and without it.",
}

const beforeSteps = [
  "Homeowner's pipe bursts at 2:14am — water everywhere",
  "They Google plumbers and call your company first",
  "Six rings, then your voicemail greeting",
  "They hang up without leaving a message",
  "They call the next company on the list — someone answers",
  "That company books the job, the water heater upsell, and the review",
  "You never even know the call happened",
]

const afterSteps = [
  "Homeowner's pipe bursts at 2:14am — water everywhere",
  "They Google plumbers and call your company first",
  "Your AI receptionist answers before the second ring",
  "It calms the caller, captures the address and damage details",
  "It flags the emergency and texts your on-call tech the full picture",
  "The job is booked and confirmed while the caller is still on the line",
  "You show up first — and first usually wins",
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
              Don&apos;t Take Our Word for It. Call It.
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-xl mx-auto">
              Pick up your phone and call the demo line right now. Pretend you&apos;re a
              customer with a flooded basement at 2am. Hear how it answers, qualifies the
              job, and books it — then imagine it on your phone line.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── AI Voice Demo (primary) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-display font-600 text-2xl text-ink">Call the Demo Line</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-rim-accent bg-accent-muted overflow-hidden">
            <div className="p-8 md:p-12 text-center min-h-[260px] flex flex-col items-center justify-center">
              <div className="flex items-end gap-1 h-12 mb-6">
                {[3, 6, 9, 12, 8, 5, 10, 7, 4, 11, 6, 3, 8, 10, 5].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-accent/40"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
              <p className="text-ink font-display font-700 text-2xl mb-2">
                Live AI Receptionist — Demo Line
              </p>
              <p className="text-subtle text-sm max-w-sm mb-4">
                Call and talk to it like a real customer: describe a burst pipe, a dead AC
                on a 100° day, or a flooded living room. It will answer, qualify the job,
                and offer to book you.
              </p>
              <p className="text-accent font-display font-700 text-xl tracking-wide">
                Demo number coming online
              </p>
              {/* PLUG IN: Demo phone number + Vapi/Retell/ElevenLabs voice agent here */}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Chat Demo (secondary) ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-display font-600 text-2xl text-ink">Website Chat &amp; Text-Back Demo</h2>
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
                  <p className="text-ink text-sm font-medium">Dispatch Assistant</p>
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
              <p className="text-ink font-medium mb-2">AI Chat &amp; Missed-Call Text-Back</p>
              <p className="text-subtle text-sm max-w-sm">
                The same brain that answers your phone also handles website chat and texts
                back every missed call — capturing the job details and booking the visit.
                Live widget will appear here once connected.
              </p>
              {/* PLUG IN: Chatbot widget script here */}
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
                The 2:14am Call
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
                Voicemail vs. AI Receptionist
              </h2>
              <p className="text-subtle mt-3 max-w-md mx-auto">
                The same emergency call, played out twice — the way it goes at most
                companies today, and the way it goes with your AI receptionist on the line.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 gap-6">
            <FadeInItem>
              <div className="rounded-xl border border-white/[0.08] bg-surface p-6">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-display font-600 text-ink text-lg">Without It</h3>
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
                  <h3 className="font-display font-600 text-ink text-lg">With It</h3>
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
            Want to hear it answering as <em>your</em> company?
          </h2>
          <p className="text-subtle mb-8 max-w-md mx-auto">
            Book a 15-minute call and we&apos;ll build a demo receptionist trained on your
            actual website — your services, your service area, your name on the greeting —
            and give you a number to call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
          >
            Get a Demo Built for Your Company
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
