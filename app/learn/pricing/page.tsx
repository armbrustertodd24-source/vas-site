import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, BadgeCheck } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import PricingPlans from "@/components/learn/PricingPlans"
import LearnAccordion from "@/components/learn/LearnAccordion"
import { Section } from "@/components/learn/Section"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Promptu. Start free, go Pro for every track and level, or grab a lifetime founding membership. Team plans available for firms.",
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden cl-grid border-b border-cl-rim">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-cl-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cl-rim bg-cl-surface px-3 py-1 text-xs font-medium text-cl-accent-dark mb-5">
              <BadgeCheck className="w-3.5 h-3.5" /> Learn for free, upgrade when you&apos;re ready
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl leading-[1.05] text-cl-ink tracking-tight mb-4">
              One membership, every AI skill.
            </h1>
            <p className="text-cl-muted text-lg leading-relaxed">
              Start free with every track&apos;s Beginner level. Upgrade to unlock the
              Intermediate &amp; Proficient lessons across all seven tracks — at one
              simple price.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <PricingPlans />
        <p className="text-center text-xs text-cl-muted mt-8">
          Prices in USD. Pro renews until you cancel. Founding pricing is a limited launch offer.
        </p>
      </section>

      {/* Team / Business */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <FadeIn>
          <div className="rounded-3xl border border-cl-rim bg-cl-surface p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex items-start gap-4 max-w-xl">
              <span className="w-11 h-11 rounded-xl bg-cl-accent-soft flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-cl-accent" />
              </span>
              <div>
                <h2 className="font-display font-700 text-xl text-cl-ink mb-1.5">
                  Training a whole team or firm?
                </h2>
                <p className="text-cl-muted text-sm leading-relaxed">
                  Get your staff fluent in AI with seat-based access, shared progress,
                  and onboarding tailored to how your team actually works. Ideal for
                  agencies, ops teams, and law firms.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-cl-ink text-cl-bg text-sm font-semibold hover:bg-cl-accent transition-colors flex-shrink-0"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <Section eyebrow="Before you decide" title="Pricing questions">
        <LearnAccordion
          items={[
            { q: "Is the free plan really free?", a: <>Yes — every track&apos;s <strong>Beginner</strong> level is free forever, across all seven tools, no card required. It&apos;s a real intro to each tool, not a teaser.</> },
            { q: "What do I get with Pro?", a: <>Pro unlocks the <strong>Intermediate</strong> and <strong>Proficient</strong> levels — the advanced, power-user material — on all seven tracks, plus every new track and lesson we add while you&apos;re a member.</> },
            { q: "What does “Founding” include?", a: <>Everything in Pro, forever, for a single one-time payment — plus a founding-member badge. It&apos;s a limited launch offer to reward early supporters.</> },
            { q: "Can I cancel anytime?", a: <>Yes. Pro is month-to-month (or annual) and you can cancel whenever — you keep access through the end of your billing period.</> },
            { q: "Do the Claude tools cost extra?", a: <>This is a membership for the <strong>learning platform</strong>. Claude itself has its own free and paid plans, and the Automation track uses the pay-as-you-go Claude API — we&apos;ll always point out when a step has its own cost.</> },
          ]}
        />
      </Section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn className="text-center max-w-2xl mx-auto py-6">
          <h2 className="font-display font-700 text-3xl text-cl-ink mb-4">
            Start free today
          </h2>
          <p className="text-cl-muted mb-7">
            No card, no commitment. Begin with a simple conversation and upgrade the
            moment you want the rest.
          </p>
          <Link
            href="/learn/chat"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-cl-accent text-white text-sm font-semibold hover:bg-cl-accent-dark transition-colors"
          >
            Open the free Chat track <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
