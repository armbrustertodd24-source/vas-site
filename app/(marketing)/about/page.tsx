import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "About — Vector Automation Systems",
  description:
    "Who we are and why we build AI receptionists for home service companies — founded on 20 years of military and federal law enforcement service.",
}

const differentiators = [
  {
    title: "Built for the trades, not adapted to them",
    description:
      "We don't sell generic chatbots to any business that comes along. We build for restoration, HVAC, and plumbing — where calls are emergencies, jobs are won by whoever answers first, and the system has to work at 2am, not just in a demo.",
  },
  {
    title: "We build the system, not just a strategy",
    description:
      "No plan-and-a-Zapier-subscription handoffs. We build the actual receptionist, connect it to your phone line and your field service software, test it against real call scenarios, and hand it over answering.",
  },
  {
    title: "Trained on your company, not a template",
    description:
      "Your services, your service area, your rates, your dispatch rules, your on-call rotation. The AI qualifies jobs the way your best CSR would — because it's trained on how your company actually handles calls.",
  },
  {
    title: "We stay on the line after launch",
    description:
      "Service areas grow, rates change, seasons shift. We monitor performance, tune the AI, and adjust as your business evolves. Ongoing support is how we operate, not an upsell.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-5">
              Who We Are
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Who we are */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FadeIn>
          <div className="space-y-5">
            <p className="text-ink/80 text-lg leading-relaxed">
              Vector Automation Systems builds AI receptionists for home service companies —
              restoration, HVAC, and plumbing businesses whose jobs are won or lost on the
              phone. We handle the moment that matters most: the call you can&apos;t answer
              because you&apos;re on a roof, under a house, or asleep at 2am.
            </p>
            <p className="text-subtle text-base leading-relaxed">
              Home service companies face a problem most software isn&apos;t built to solve:
              customers with urgent, expensive problems who will hire whoever answers first.
              A homeowner with a flooded basement doesn&apos;t leave a voicemail — they hang
              up and call the next company on Google. Every one of those calls is a real job,
              with real revenue, going to a competitor because of six unanswered rings.
            </p>
            <p className="text-subtle text-base leading-relaxed">
              We build the systems that fix that. Not consulting, not templates — a working
              AI receptionist connected to your phone line and your field service software,
              trained on your business, and supported after launch.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Mission */}
      <section className="border-y border-white/[0.06] bg-surface/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <blockquote className="font-display font-600 text-2xl md:text-3xl text-ink leading-snug border-l-2 border-accent pl-6">
              No home service company should lose a job because nobody picked up the phone.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Differentiators */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            What Makes Us Different
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-ink mb-10">
            Focused, practical, and built to last
          </h2>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 gap-5">
          {differentiators.map(({ title, description }) => (
            <FadeInItem key={title}>
              <div className="p-6 rounded-xl border border-rim bg-surface hover:border-rim-accent transition-all h-full">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="font-display font-600 text-ink text-lg">{title}</h3>
                </div>
                <p className="text-subtle text-sm leading-relaxed pl-8">{description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Founder section */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-6">
              The Founder
            </p>
            {/* PLUG IN: Founder photo here */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-xl bg-surface-2 border border-rim flex items-center justify-center flex-shrink-0">
                <span className="text-subtle text-xs text-center leading-tight px-2">
                  Founder<br />Photo
                </span>
              </div>
              <div>
                <h3 className="font-display font-600 text-ink text-xl mb-1">Todd Armbruster</h3>
                <p className="text-accent text-sm mb-3">Founder &amp; Lead Automation Engineer, Vector Automation Systems</p>
                <div className="space-y-3 text-subtle text-sm leading-relaxed">
                  <p>
                    Before building automation systems, I spent 20 years in the military and
                    federal law enforcement — two decades of work where answering the call,
                    every time, wasn&apos;t a slogan. It was the job.
                  </p>
                  <p>
                    That&apos;s the standard I build to. Home service companies run on the
                    same principle: when someone calls with an emergency, somebody has to
                    pick up. The companies that do win the job; the ones that don&apos;t
                    never know what they lost. I build systems that make sure your company
                    is always the one that answers.
                  </p>
                  <p>
                    When you work with VAS, you work with me — the person who builds,
                    tests, and maintains your system. No account managers, no handoffs,
                    no excuses.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-white/[0.06] bg-surface/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Our Approach
            </p>
            <h2 className="font-display font-600 text-2xl text-ink mb-5">
              Test first. Build second. Prove it with your own calls.
            </h2>
            <div className="space-y-4 text-subtle text-base leading-relaxed">
              <p>
                We don&apos;t lead with technology — we lead with evidence. Before we build
                anything, we call your business the way a customer would: after hours, during
                the lunch rush, on a weekend. You hear exactly what your callers hear today.
                Most owners have never listened to their own voicemail greeting at 9pm; it&apos;s
                usually an uncomfortable 40 seconds.
              </p>
              <p>
                From there we build a receptionist around your real operation — your services,
                your dispatch rules, your on-call rotation — and test it against the actual
                calls your company gets. It goes live gradually, starting with the calls
                you&apos;re missing anyway, so there&apos;s zero risk to your daytime operation.
              </p>
              <p>
                We measure success in answered calls, booked jobs, and dispatched emergencies —
                numbers you can check against your own schedule, not a dashboard designed to
                look impressive.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <FadeIn>
          <h2 className="font-display font-700 text-2xl md:text-3xl text-ink mb-3">
            Ready to stop losing jobs to voicemail?
          </h2>
          <p className="text-subtle mb-7 max-w-sm mx-auto">
            Start with a 15-minute call. We&apos;ll test your phones and show you exactly
            what your callers get today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all"
          >
            Book the Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
