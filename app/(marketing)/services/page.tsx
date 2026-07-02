import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  PhoneMissed,
  Calendar,
  BellRing,
  GitBranch,
  Star,
  ArrowRight,
} from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Services — AI Receptionists for Home Service Companies",
  description:
    "The VAS AI receptionist answers every call 24/7, qualifies the job, dispatches emergencies, and books work into your schedule — built for restoration, HVAC, and plumbing companies.",
}

const services = [
  {
    icon: Phone,
    title: "24/7 AI Call Answering",
    what: "An AI receptionist trained on your services, service area, hours, and pricing rules — answering every call in seconds, around the clock.",
    problem:
      "After-hours and overflow calls go to voicemail, and customers with an emergency don't leave messages. They hang up and dial the next company on Google — and that company gets the job.",
    result:
      "Every call answered before the second ring, every caller handled like your best CSR picked up. You stop losing jobs to your own voicemail — nights, weekends, and the busy season included.",
  },
  {
    icon: BellRing,
    title: "Emergency Qualification & Dispatch",
    what: "The AI captures what happened, where, and how bad — then immediately calls or texts your on-call tech with the details for genuine emergencies.",
    problem:
      "A burst pipe or an active water loss can't wait for the morning callback. If the customer can't reach a human fast, they keep calling competitors until someone answers.",
    result:
      "Urgent jobs reach your on-call tech in minutes with the full picture already captured — address, damage type, severity, photos. You show up first, and first usually wins the job.",
  },
  {
    icon: Calendar,
    title: "Job Booking & Scheduling",
    what: "The AI checks your real availability and books qualified jobs straight into your calendar or field service software — confirmations and reminders included.",
    problem:
      "Even answered calls die in the back-and-forth of scheduling. Callbacks get missed, sticky notes get lost, and the customer books with whoever locked in a time slot first.",
    result:
      "Callers hang up with an appointment on your schedule, not a promise of a callback. Reminders cut no-shows, and your crew starts the day with a full board.",
  },
  {
    icon: PhoneMissed,
    title: "Missed-Call Text-Back",
    what: "Any call that doesn't connect triggers an instant, personalized text to the caller — starting a conversation the moment the phone stops ringing.",
    problem:
      "Even great phone coverage misses calls — double calls, bad signal, crew swamped. Each one is a customer standing in a flooded kitchen wondering who else to call.",
    result:
      "Missed callers get a text within seconds and stay in a conversation with your company instead of dialing the next one. Many jobs are saved by that one automatic text.",
  },
  {
    icon: GitBranch,
    title: "CRM & Field Service Integration",
    what: "Every call, transcript, booking, and customer record flows automatically into ServiceTitan, Housecall Pro, Jobber, GoHighLevel, or the platform you already run.",
    problem:
      "Call details scribbled on paper or living in one person's head means lost history, double data entry, and jobs that fall through the cracks between the phone and the schedule.",
    result:
      "Your existing system stays the source of truth — updated automatically. Every lead is logged, every job traceable, and nothing depends on someone remembering to type it in.",
  },
  {
    icon: Star,
    title: "Follow-Up, Reviews & Rebooking",
    what: "Automated sequences that chase unsold estimates, request reviews after completed jobs, and bring past customers back for maintenance and seasonal work.",
    problem:
      "Most companies quote and forget. Estimates go cold, happy customers never leave the review, and the customer list sits idle while ad spend goes up.",
    result:
      "Estimates get followed up until they close or say no. Reviews accumulate on autopilot. Your existing customer list fills the slow weeks — revenue you already paid to acquire.",
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
              One Flagship System: Your AI Receptionist
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-xl mx-auto">
              Everything we build serves one outcome — no job lost because nobody answered
              the phone. The AI receptionist is the core; everything below is how it wins
              jobs for your company end to end.
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
                          Result for Your Company
                        </p>
                        <p className="text-subtle text-sm leading-relaxed">{result}</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                      >
                        Get this built for your company
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
              Want to know what your callers hear right now?
            </h2>
            <p className="text-subtle mb-8 max-w-md mx-auto">
              Book a 15-minute call. Before it, we&apos;ll call your business the way a
              customer would — after hours — and play you exactly what we got. Then we&apos;ll
              show you what an AI receptionist would have done instead.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.2)]"
            >
              Book the 15-Minute Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
