import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ — AI Receptionists for Home Service Companies",
  description:
    "Answers to common questions about the VAS AI receptionist for restoration, HVAC, and plumbing companies — setup, integrations, emergencies, cost, and more.",
}

const faqs = [
  {
    q: "What kinds of companies do you work with?",
    a: "Home service companies where the phone decides who gets the job — restoration (water, fire, mold), HVAC, and plumbing first, plus other emergency trades like electrical and garage door. If your customers call with urgent problems and a missed call means a lost job, the system was built for your business. We also build intake automation for personal injury law firms as a separate practice — ask about it on a call.",
  },
  {
    q: "Will callers know it's an AI? Will it sound robotic?",
    a: "Modern AI voice agents hold natural, fast conversations — most callers simply experience someone helpful who picked up quickly. Your receptionist is trained on your company name, services, service area, and how you talk to customers. We're also straightforward about what it is: the AI can identify itself if asked, and anything it shouldn't handle gets transferred to a human. What callers care about at 2am isn't who answered — it's that someone did.",
  },
  {
    q: "What happens with real emergencies?",
    a: "Emergencies are the reason the system exists. The AI captures what happened, where, and how severe — then immediately alerts your on-call tech by call and text with the full details. The customer gets a confirmation that help is coming instead of a voicemail beep. Compare that to today: the emergency call hits voicemail, the customer hangs up, and your on-call tech never knows the job existed.",
  },
  {
    q: "Does it work with ServiceTitan, Housecall Pro, or Jobber?",
    a: "Yes. We integrate with the major field service platforms — ServiceTitan, Housecall Pro, Jobber, GoHighLevel, and others. Calls, transcripts, customer records, and bookings flow into your existing system automatically. Your dispatch board stays the source of truth; nobody re-types anything. If you run something less common, we'll confirm on the first call whether a direct integration is possible.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are live in about two weeks. We start by testing your current phone setup (calling your line the way a customer would), then train the AI on your services, service area, rates, and dispatch rules, test it against real scenarios with you, and cut it in — usually starting with after-hours and overflow only, so nothing about your daytime operation changes until you're comfortable.",
  },
  {
    q: "Do I have to replace my phone number or phone system?",
    a: "No. Your number stays your number. The AI typically picks up on call forwarding rules — after X rings, after hours, or when your line is busy. Your team keeps answering the way they always have; the AI catches what they can't. You control exactly when it's on.",
  },
  {
    q: "How much does it cost?",
    a: "Less than the first job it saves you, and far less than a human answering service that just takes messages. Exact pricing depends on call volume, integrations, and whether you want follow-up and rebooking automation included — you'll get a clear monthly number after a 15-minute call, with no long-term contract. For context: one saved water-loss job typically covers many months of the system.",
  },
  {
    q: "How do I know it will actually work for my company?",
    a: "Two ways. First, call our demo line and talk to the AI yourself before you spend a dollar. Second, we run every new client as a 30-day pilot on your real phone line — you see every call it answered, every job it booked, and every emergency it dispatched. If the numbers don't justify the cost, you walk away.",
  },
  {
    q: "Who's behind Vector Automation Systems?",
    a: "VAS is run by its founder — 20 years in the military and federal law enforcement before building automation systems. That background means two things for you: systems built to work under pressure, not just in demos, and a straight answer on what the technology can and can't do. You work directly with the person who builds and maintains your system.",
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-5">
              Common Questions
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-lg mx-auto">
              Straight answers to the questions we hear most from restoration, HVAC, and
              plumbing owners — how it works, what it costs, and what happens at 2am.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="text-base">{q}</AccordionTrigger>
                <AccordionContent className="text-base">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <FadeIn>
            <h2 className="font-display font-700 text-2xl md:text-3xl text-ink mb-3">
              Still have questions?
            </h2>
            <p className="text-subtle mb-7 max-w-sm mx-auto">
              Call the demo line and ask the AI yourself — or book a 15-minute call and ask
              a human.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all"
              >
                Hear It Answer
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-lg border border-white/[0.12] text-ink text-sm font-medium hover:bg-white/[0.05] transition-colors"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
