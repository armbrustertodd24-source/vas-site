import type { Metadata } from "next"
import Link from "next/link"
import {
  MessageSquare,
  Phone,
  UserCheck,
  Calendar,
  GitBranch,
  HeadphonesIcon,
  Clock,
  Settings,
  Wrench,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
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
  title: "Vector Automation Systems — AI Automation for Personal Injury Law Firms",
  description:
    "AI automation systems that capture injury leads, book consultations, and follow up automatically — built specifically for personal injury attorneys.",
}

const services = [
  {
    icon: MessageSquare,
    title: "AI Chat Intake Assistants",
    description:
      "A 24/7 AI chat system that engages potential clients the moment they land on your site — gathering case details, screening injury type, and booking consultations without staff involvement.",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "An AI phone agent that answers after-hours and overflow calls from injured people, captures their information, and schedules consultations — so you never miss a potential case.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification & Pre-Screening",
    description:
      "Automatically screen incoming leads for case viability — injury type, liability, timeframe — so your intake team only handles leads that are worth pursuing.",
  },
  {
    icon: Calendar,
    title: "Consultation Booking Automation",
    description:
      "Let potential clients book directly into your consultation calendar. Automated confirmations and reminders reduce no-shows and keep your schedule full.",
  },
  {
    icon: GitBranch,
    title: "Retainer Follow-Up Systems",
    description:
      "Automated follow-up sequences that keep unretained leads engaged — timely messages that move prospects toward signing without your staff making manual calls.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client Communication Automation",
    description:
      "Keep signed clients informed with automated case status updates, appointment reminders, and document requests — reducing inbound calls and improving client satisfaction.",
  },
]

const trust = [
  { icon: Clock, label: "Fast Implementation" },
  { icon: Settings, label: "Built for Your Practice" },
  { icon: Wrench, label: "Integrates With Your Case Management Software" },
  { icon: LifeBuoy, label: "Ongoing Support Included" },
]

const steps = [
  {
    number: "01",
    title: "We map your intake process",
    description:
      "We start by understanding how potential clients reach you, how your team currently handles them, and exactly where leads are slipping through the cracks.",
  },
  {
    number: "02",
    title: "We build and customize your system",
    description:
      "Every automation is built around your practice areas, your intake criteria, and your team's workflow — not a generic law firm template.",
  },
  {
    number: "03",
    title: "You capture more cases and save staff time",
    description:
      "The system responds to leads instantly, pre-screens cases, and books consultations around the clock — without your team manually handling every inquiry.",
  },
]

const benefits = [
  "Respond to injury leads instantly",
  "Capture after-hours and weekend cases",
  "Fill your consultation calendar",
  "Consistent follow-up on unsigned leads",
  "Free up your intake staff",
  "Better client experience from day one",
]

const faqPreview = [
  {
    q: "What types of law firms do you work with?",
    a: "We work exclusively with personal injury firms — solo practitioners, small firms, and multi-attorney practices. If you handle auto accidents, slip and fall, medical malpractice, or other injury cases and you're losing leads to slow response times, we can help.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems go live within 2–4 weeks from the initial call. We handle the build, integration, and testing. You review and approve before anything goes live.",
  },
  {
    q: "Will this replace our case management software?",
    a: "No. We integrate with your existing software — Clio, MyCase, Filevine, or whatever you use. We add automation on top of your current stack, not instead of it.",
  },
  {
    q: "Is this customized to our practice areas?",
    a: "Yes. The AI is trained on your specific injury types, intake criteria, and the questions your team asks. It screens leads the same way a trained intake specialist would.",
  },
  {
    q: "Can I try a demo first?",
    a: "Yes — visit the Demo page to see a live AI chat intake demo and a side-by-side comparison of a manual intake process vs. an automated one. You can also book a call for a walkthrough tailored to your firm.",
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
                  AI Automation for Personal Injury Law Firms
                </span>
              </div>
              <h1 className="font-display font-700 text-4xl md:text-5xl xl:text-6xl text-ink leading-[1.1] tracking-tight mb-6">
                AI Automation Systems That Capture Injury Leads, Book Consultations, and Work 24/7
              </h1>
              <p className="text-subtle text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Vector Automation Systems helps personal injury firms respond to leads instantly,
                pre-screen cases automatically, book consultations without staff involvement, and
                follow up with unsigned prospects until they sign.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)] hover:shadow-[0_0_36px_rgba(212,168,67,0.35)]"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-white/[0.12] text-ink text-sm font-medium hover:bg-white/[0.05] transition-colors"
                >
                  See the Demo
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

      {/* ── What We Automate ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              What We Automate
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-ink">
              Intake and follow-up systems that run while your team focuses on cases
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }) => (
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
                From kickoff to live system in weeks, not months
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
              Live Demo
            </p>
            <h2 className="relative font-display font-700 text-3xl md:text-4xl text-ink mb-4">
              See the system in action before you commit
            </h2>
            <p className="relative text-subtle mb-8 max-w-md mx-auto">
              See how the AI handles an incoming injury lead, pre-screens the case, and books
              a consultation — without anyone on your team getting involved.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
            >
              Try the Demo
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
              What changes when your intake runs automatically
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
    </>
  )
}
