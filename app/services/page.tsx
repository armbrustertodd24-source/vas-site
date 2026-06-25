import type { Metadata } from "next"
import Link from "next/link"
import {
  MessageSquare,
  Phone,
  Calendar,
  Mail,
  GitBranch,
  HeadphonesIcon,
  Blocks,
  ArrowRight,
} from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Services — AI Automation for Personal Injury Law Firms",
  description:
    "Explore Vector Automation Systems' AI automation services built for personal injury attorneys — from intake chat and voice agents to retainer follow-up and CRM automation.",
}

const services = [
  {
    icon: MessageSquare,
    title: "AI Chat Intake Assistants",
    what: "A 24/7 AI chat system embedded on your website that engages potential clients, gathers case details, and books consultations automatically.",
    problem:
      "Most PI firms lose leads after hours and on weekends. A potential client injured on a Saturday night who doesn't get a response goes to the next firm on Google.",
    result:
      "Every website visitor gets an immediate, intelligent response — any time of day. The AI gathers injury details, screens the case, and books a consultation without anyone on your team being involved.",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    what: "An AI phone agent that answers calls when your staff can't — capturing case details, screening the caller, and scheduling consultations.",
    problem:
      "Overflow and after-hours calls go to voicemail. Most injured people don't leave messages — they call the next firm. Every missed call is a potential case you'll never know about.",
    result:
      "Every call gets answered. The AI gathers the caller's information, screens the case for viability, and either books a consultation or transfers to a live person when appropriate.",
  },
  {
    icon: Calendar,
    title: "Consultation Booking Automation",
    what: "A fully automated scheduling system that lets potential clients book free consultations directly into your calendar based on your availability and intake criteria.",
    problem:
      "Back-and-forth scheduling is slow, and slow intake kills conversions. Injured people in pain who can't get a quick appointment will find someone who can see them sooner.",
    result:
      "Potential clients book directly after pre-screening. Automated confirmations and reminders reduce no-shows. Your consultation calendar stays full without your staff managing it.",
  },
  {
    icon: Mail,
    title: "Retainer Follow-Up Systems",
    what: "Automated multi-step follow-up sequences via SMS and email that keep unretained leads engaged and move them toward signing.",
    problem:
      "Most firms follow up once or twice, then move on. But many PI leads need several touchpoints before they're ready to sign — and your competitors are following up more consistently.",
    result:
      "Every lead that doesn't sign immediately gets a strategic follow-up sequence. Timely, relevant messages keep your firm top of mind until the prospect is ready to move forward.",
  },
  {
    icon: GitBranch,
    title: "CRM & Intake Pipeline Automation",
    what: "Workflow automations that update your case management system, move leads through intake stages, and trigger team notifications based on case status.",
    problem:
      "Manual data entry into your CRM is time-consuming and inconsistent. When intake information is scattered or missing, it slows down your team and creates gaps in the pipeline.",
    result:
      "Your CRM stays current automatically. Leads are tagged by injury type, stage, and activity. Your intake team always has a clear view of where every potential case stands.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client Communication Automation",
    what: "Automated communication workflows that keep signed clients updated on their case status, upcoming appointments, and document needs — without staff manually reaching out.",
    problem:
      "Signed clients who don't hear from their attorney's office become anxious and generate inbound calls that pull your staff off more important work.",
    result:
      "Clients get proactive, timely updates through automated messages. Fewer inbound client calls, higher client satisfaction scores, and more time for your team to focus on actual casework.",
  },
  {
    icon: Blocks,
    title: "Custom AI Intake Workflows",
    what: "Purpose-built automation systems designed around your firm's specific intake process, practice areas, and team structure.",
    problem:
      "Generic automation tools aren't built for law firms. Workarounds and half-finished setups lead to broken workflows and more manual cleanup than before.",
    result:
      "A system built specifically for your firm — your intake questions, your case criteria, your tools, your team. We map your process first and build something that actually fits.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Services
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-5">
              What We Build for Your Firm
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-xl mx-auto">
              Every system is custom-built for your intake process. We don&apos;t sell generic
              automation subscriptions — we build systems that fit the way your firm actually
              handles cases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeInStagger className="space-y-6" staggerDelay={0.06}>
          {services.map(({ icon: Icon, title, what, problem, result }) => (
            <FadeInItem key={title}>
              <div className="rounded-xl border border-rim bg-surface hover:border-rim-accent transition-all p-6 md:p-8 group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-accent-muted border border-rim-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-600 text-ink text-xl md:text-2xl mb-4">
                      {title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                          What It Is
                        </p>
                        <p className="text-subtle text-sm leading-relaxed">{what}</p>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                          Problem It Solves
                        </p>
                        <p className="text-subtle text-sm leading-relaxed">{problem}</p>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                          Result for Your Firm
                        </p>
                        <p className="text-subtle text-sm leading-relaxed">{result}</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                      >
                        Get this built for your firm
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeIn>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-ink mb-4">
              Not sure which service fits your firm?
            </h2>
            <p className="text-subtle mb-8 max-w-md mx-auto">
              Book a discovery call and we&apos;ll map your current intake process, identify
              where leads are being lost, and explain exactly what we&apos;d build.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
