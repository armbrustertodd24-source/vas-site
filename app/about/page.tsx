import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "About — Vector Automation Systems",
  description:
    "Learn who we are and why we focus exclusively on building AI automation for personal injury law firms.",
}

const differentiators = [
  {
    title: "Built exclusively for personal injury firms",
    description:
      "We don't build generic automation for any business that comes along. We focus on PI intake because we understand the specific dynamics — high lead volume, time-sensitive response windows, injury pre-screening, and the pressure of retainer conversion.",
  },
  {
    title: "We build the system, not just a strategy",
    description:
      "We don't hand you a plan and a Zapier subscription. We build the actual intake automation, connect it to your tools, test it against real scenarios, and hand it over running.",
  },
  {
    title: "Every system fits your firm's intake process",
    description:
      "Your practice areas, intake criteria, and team structure are unique. We map your process first and build around it — so the system works the way your firm works, not the other way around.",
  },
  {
    title: "We stay involved after launch",
    description:
      "Intake processes change. Case criteria shift. Firms grow. We monitor, adjust, and update your automation as your firm evolves — ongoing support is how we operate, not an upsell.",
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
              Vector Automation Systems is an AI automation agency that builds custom intake
              and follow-up systems for personal injury law firms. We specialize in the parts
              of running a PI practice where leads are won or lost — the first response, the
              pre-screening, the consultation booking, and the follow-up before someone signs
              a retainer.
            </p>
            <p className="text-subtle text-base leading-relaxed">
              Personal injury firms face a specific problem that most automation tools aren&apos;t
              built to solve: potential clients who are injured, in pain, and ready to hire
              someone right now — and they&apos;ll hire whoever responds to them first. If your
              firm doesn&apos;t have a system that responds immediately, pre-screens the case,
              and books a consultation before a competitor does, you&apos;re losing cases you
              never even knew you had.
            </p>
            <p className="text-subtle text-base leading-relaxed">
              We build the systems that fix that problem. Not consulting, not templates — actual
              working automation, connected to your tools, built around your intake process, and
              supported after launch.
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
              Help personal injury firms stop losing cases to slow response times by building
              intake automation that is fast, accurate, and built to fit the way their firm
              actually works.
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
              The Team
            </p>
            {/* PLUG IN: Founder photo and bio here */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-xl bg-surface-2 border border-rim flex items-center justify-center flex-shrink-0">
                <span className="text-subtle text-xs text-center leading-tight px-2">
                  Founder<br />Photo
                </span>
              </div>
              <div>
                <h3 className="font-display font-600 text-ink text-xl mb-1">Founder & Lead Automation Engineer</h3>
                <p className="text-accent text-sm mb-3">Vector Automation Systems</p>
                <p className="text-subtle text-sm leading-relaxed">
                  Add your bio here — your background, what led you to focus on personal injury
                  firms, and what you bring to each engagement. Keep it direct and personal,
                  not corporate.
                </p>
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
              Process-first, results-focused. No fluff.
            </h2>
            <div className="space-y-4 text-subtle text-base leading-relaxed">
              <p>
                We don&apos;t lead with technology. We lead with your intake process. Before we
                build anything, we understand exactly how potential clients reach your firm, how
                your team handles them today, and where the gaps are — the after-hours calls no
                one answers, the leads that go cold because follow-up is manual, the consultations
                that never get booked.
              </p>
              <p>
                From there, we build systems that address real problems, not hypothetical ones.
                The AI is trained on your case criteria. The integrations connect to your actual
                tools. The workflows match the way your intake team already operates.
              </p>
              <p>
                We measure success by signed cases and saved staff time — not by how sophisticated
                the automation looks on a diagram.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <FadeIn>
          <h2 className="font-display font-700 text-2xl md:text-3xl text-ink mb-3">
            Ready to work together?
          </h2>
          <p className="text-subtle mb-7 max-w-sm mx-auto">
            Start with a discovery call. We&apos;ll learn your intake process and tell you
            exactly what we&apos;d build.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
