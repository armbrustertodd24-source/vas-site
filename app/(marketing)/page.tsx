import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  PhoneMissed,
  Flame,
  Droplets,
  ThermometerSun,
  Calendar,
  BellRing,
  GitBranch,
  Clock,
  Settings,
  Wrench,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"
import WorkflowMockup from "@/components/WorkflowMockup"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Vector Automation Systems — AI Receptionist for Home Service Companies",
  description:
    "AI receptionists for restoration, HVAC, and plumbing companies — answering every call 24/7, qualifying the job, and booking it into your schedule before the caller dials the next name on Google.",
}

const verticals = [
  {
    icon: Droplets,
    title: "Restoration",
    pain: "Water and fire losses happen at 2am, and the first company to answer usually wins the claim. A missed emergency call isn't a missed call — it's an $8,000–$15,000 job that just went to your competitor.",
    points: [
      "Answers every emergency call, every hour",
      "Captures loss type, location, and severity",
      "Alerts your on-call tech immediately",
    ],
  },
  {
    icon: ThermometerSun,
    title: "HVAC",
    pain: "On the hottest day of the year your phones ring more than your CSRs can answer. Every call that rolls to voicemail is a $300 service call — or an $8,000 changeout — going to the next name on Google.",
    points: [
      "Catches after-hours and peak-season overflow",
      "Books service calls straight into your schedule",
      "Qualifies repair vs. replacement leads",
    ],
  },
  {
    icon: Flame,
    title: "Plumbing",
    pain: "Nobody with a burst pipe leaves a voicemail. They hang up and call the next plumber — and the plumber who answers gets the job, the water heater upsell, and the review.",
    points: [
      "Answers emergencies before the second ring",
      "Collects job details and photos by text",
      "Dispatches urgent jobs to your on-call plumber",
    ],
  },
]

const capabilities = [
  {
    icon: Phone,
    title: "24/7 Call Answering",
    description:
      "An AI receptionist trained on your services, service area, and pricing rules — answering every call in seconds, nights and weekends included. It sounds professional, not robotic.",
  },
  {
    icon: PhoneMissed,
    title: "Missed-Call Text-Back",
    description:
      "If a caller does slip through, they get an instant text that keeps the conversation alive — so they're talking to you instead of dialing your competitor.",
  },
  {
    icon: Calendar,
    title: "Job Booking & Scheduling",
    description:
      "The AI qualifies the job, checks your availability, and books it directly into your calendar or field service software. You wake up to booked jobs, not voicemails.",
  },
  {
    icon: BellRing,
    title: "Emergency Dispatch Alerts",
    description:
      "Real emergencies get escalated instantly — the AI captures the details, then calls or texts your on-call tech so a human is moving while the customer is still on the line.",
  },
  {
    icon: GitBranch,
    title: "CRM & FSM Integration",
    description:
      "Every call, transcript, and booking lands in the tools you already run — ServiceTitan, Housecall Pro, Jobber, or GoHighLevel. No double entry, no lost records.",
  },
  {
    icon: Clock,
    title: "Follow-Up & Rebooking",
    description:
      "Estimates that didn't close, maintenance that's due, customers who haven't called in a year — automated follow-up that fills your schedule from the list you already own.",
  },
]

const trust = [
  { icon: Phone, label: "Answers Before the Second Ring" },
  { icon: Settings, label: "Trained on Your Trade & Service Area" },
  { icon: Wrench, label: "Works With ServiceTitan, Housecall Pro & Jobber" },
  { icon: LifeBuoy, label: "Live in About 2 Weeks" },
]

const steps = [
  {
    number: "01",
    title: "We test your phones",
    description:
      "We call your business the way a customer would — after hours, during peak times — and show you exactly what your callers hear today. Most owners are surprised by what we find.",
  },
  {
    number: "02",
    title: "We build your AI receptionist",
    description:
      "Trained on your services, your service area, your rates, and how you dispatch. It qualifies jobs the way your best CSR would — then we test it against real scenarios before it goes live.",
  },
  {
    number: "03",
    title: "You stop losing jobs",
    description:
      "Every call answered, every job qualified, urgent work dispatched, and appointments booked into your schedule — while you and your crew stay on the tools.",
  },
]

const benefits = [
  "Answer every call — 2am included",
  "Book jobs while you're on a roof or under a house",
  "Win the emergency before your competitor hears it ring",
  "Stop paying for ads that ring to voicemail",
  "Every call logged in your CRM automatically",
  "Follow up on every estimate you send",
]

const faqPreview = [
  {
    q: "What kinds of companies do you work with?",
    a: "Home service companies that live and die by the phone — restoration, HVAC, and plumbing first, along with other emergency trades. If a missed call costs you a job, our system is built for you.",
  },
  {
    q: "Will it sound like a robot?",
    a: "No. Modern AI voice agents hold natural conversations, and yours is trained on your company's services, service area, and tone. Most callers simply experience a helpful person who answered fast. And for anything the AI shouldn't handle, it transfers to a human.",
  },
  {
    q: "What happens with real emergencies?",
    a: "The AI captures the details, flags the urgency, and immediately alerts your on-call tech by call or text. Emergencies get to a human faster than they would through voicemail — that's the whole point.",
  },
  {
    q: "Does it work with my field service software?",
    a: "Yes. We integrate with ServiceTitan, Housecall Pro, Jobber, GoHighLevel, and most major platforms — calls, transcripts, and bookings flow straight into the system you already use.",
  },
  {
    q: "How do I know it actually works?",
    a: "You hear it before you buy it. Call our demo line and talk to the AI yourself. Then we run a 30-day pilot on your own phone line — if it doesn't answer calls and book real jobs, you don't keep paying.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rim-accent bg-accent-muted mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-accent text-xs font-medium tracking-wide">
                  AI Receptionists for Restoration, HVAC & Plumbing
                </span>
              </div>
              <h1 className="font-display font-700 text-4xl md:text-5xl xl:text-6xl text-ink leading-[1.1] tracking-tight mb-6">
                Every Missed Call Is a Job Your Competitor Just Booked
              </h1>
              <p className="text-subtle text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Vector Automation Systems builds AI receptionists for home service companies —
                answering every call 24/7, qualifying the job, dispatching emergencies, and
                booking work into your schedule before the caller dials the next name on Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)] hover:shadow-[0_0_36px_rgba(212,168,67,0.35)]"
                >
                  Hear It Answer
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-white/[0.12] text-ink text-sm font-medium hover:bg-white/[0.05] transition-colors"
                >
                  Book a 15-Minute Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <WorkflowMockup />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-white/[0.06] bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 justify-center">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-subtle font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verticals ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Built for Your Trade
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
              The phone is where your jobs are won or lost
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {verticals.map(({ icon: Icon, title, pain, points }) => (
            <FadeInItem key={title}>
              <div className="h-full p-6 rounded-xl border border-rim bg-surface hover:border-rim-accent hover:bg-surface-2 transition-all group flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-600 text-ink text-xl mb-3">{title}</h3>
                <p className="text-subtle text-sm leading-relaxed mb-5">{pain}</p>
                <div className="space-y-2.5 mt-auto">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-ink/80 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ── The Math ── */}
      <section className="border-y border-white/[0.06] bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                The Missed-Call Math
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-ink max-w-2xl mx-auto">
                A missed call isn&apos;t a missed call. It&apos;s the next name on Google.
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                stat: "$8k–$15k",
                label: "Typical water-loss job that goes to whichever restoration company answers first",
              },
              {
                stat: "Most callers",
                label: "Won't leave a voicemail for an emergency — they hang up and dial your competitor",
              },
              {
                stat: "After hours",
                label: "Is when emergencies happen — and when most companies' phones go unanswered",
              },
            ].map(({ stat, label }) => (
              <FadeInItem key={stat}>
                <div className="h-full p-6 rounded-xl border border-rim bg-surface text-center">
                  <p className="font-display font-700 text-accent text-3xl mb-3">{stat}</p>
                  <p className="text-subtle text-sm leading-relaxed">{label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── What It Does ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              What Your AI Receptionist Does
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
              One system that answers, qualifies, books, and follows up
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <FadeInItem key={title}>
              <div className="h-full p-6 rounded-xl border border-rim bg-surface hover:border-rim-accent hover:bg-surface-2 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-600 text-ink text-lg mb-2">{title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ── How It Works ── */}
      <section className="border-y border-white/[0.06] bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
                From first call to live system in about two weeks
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <FadeInItem key={step.number}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-rim-accent/60 to-transparent" />
                  )}
                  <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="w-12 h-12 rounded-xl bg-accent-muted border border-rim-accent flex items-center justify-center mb-5">
                      <span className="font-display font-700 text-accent text-sm">{step.number}</span>
                    </div>
                    <h3 className="font-display font-600 text-ink text-xl mb-3">{step.title}</h3>
                    <p className="text-subtle text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Demo CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="relative rounded-2xl border border-rim-accent bg-accent-muted overflow-hidden p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent pointer-events-none" />
            <p className="relative text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Hear It Yourself
            </p>
            <h2 className="relative font-display font-700 text-3xl md:text-4xl text-ink mb-4">
              Don&apos;t read about it. Call it.
            </h2>
            <p className="relative text-subtle mb-8 max-w-md mx-auto">
              Call our demo line and talk to the AI receptionist like a customer with a
              burst pipe at 2am. Then imagine it answering your phone instead of your voicemail.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
            >
              Call the Demo Line
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Benefits ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Business Outcomes
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
              What changes when every call gets answered
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <FadeInItem key={benefit}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-rim bg-surface hover:border-rim-accent transition-colors">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-ink text-sm font-medium">{benefit}</span>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ── Guarantee ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn>
          <div className="rounded-2xl border border-rim-accent bg-surface p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-accent-muted border border-rim-accent flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Our Guarantee
              </p>
              <h2 className="font-display font-700 text-2xl md:text-3xl text-ink mb-3">
                The 30-day pilot: it books real jobs, or you don&apos;t continue
              </h2>
              <p className="text-subtle leading-relaxed">
                Every new client starts with a 30-day pilot on their real phone line. You
                see every call it answered, every job it booked, and every emergency it
                dispatched — checked against your own schedule, not our dashboard. If the
                numbers don&apos;t justify the cost, you walk away and your setup fee comes
                back with you.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── FAQ Preview ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                FAQ
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
                Common questions
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqPreview.map(({ q, a }) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
              >
                See all FAQ questions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PI note ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <FadeIn>
            <p className="text-subtle text-sm">
              Run a personal injury law firm? We also build intake automation for PI
              practices —{" "}
              <Link href="/contact" className="text-accent hover:underline">
                book a call
              </Link>{" "}
              and ask about legal intake.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
