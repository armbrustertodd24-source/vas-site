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
  title: "FAQ — AI Automation for Personal Injury Law Firms",
  description:
    "Answers to common questions about how Vector Automation Systems works for personal injury attorneys — setup, integrations, cost, and more.",
}

const faqs = [
  {
    q: "What types of law firms do you work with?",
    a: "We work exclusively with personal injury firms — from solo practitioners to multi-attorney practices. Our systems are built around the specific dynamics of PI intake: high lead volume, time-sensitive responses, injury pre-screening, and retainer conversion follow-up. If your firm handles auto accidents, slip and fall, medical malpractice, workers' compensation, or similar practice areas, our systems are built for your workflow.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are live within 2–4 weeks from the initial discovery call. That includes mapping your intake process, building the system, integrating it with your existing tools, testing it thoroughly, and training your team on how to manage it. More complex builds — multiple practice areas, deep case management integrations, or multi-location firms — may take closer to 6 weeks. We give you a clear timeline before any work begins, and nothing goes live until you've reviewed and approved it.",
  },
  {
    q: "Will this replace our current case management software?",
    a: "No. We integrate with the software you already use — Clio, MyCase, Filevine, Litify, Salesforce Legal, or others. We add automation on top of your existing stack, not instead of it. Your team keeps working the way they're used to; the automation handles the parts that don't require a human.",
  },
  {
    q: "Can this work with our intake CRM?",
    a: "Yes. We integrate with most major intake and case management platforms. Our automations can create new contacts, update lead records, move cases through stages, log call and chat transcripts, trigger team notifications, and more — automatically, based on what happens in your intake process. If you use a less common platform, we'll let you know during the discovery call whether a direct integration is possible.",
  },
  {
    q: "Is this customized to our practice areas?",
    a: "Yes, entirely. The AI is trained on your specific injury types, your intake screening criteria, and the questions your team asks on every intake call. If you handle auto accidents and slip and fall differently, the system reflects that. If you only take cases in certain states or with certain injury thresholds, the AI screens for that. It's not a generic chatbot — it screens leads the way a trained intake specialist at your firm would.",
  },
  {
    q: "Do you offer support after setup?",
    a: "Yes. Ongoing support is part of how we work. After launch, we monitor the system, handle any issues, update the AI as your intake criteria evolves, and are available to make changes as your firm grows or your practice areas shift. Automation that isn't maintained breaks down over time — we stay involved to make sure it doesn't.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the scope — which systems you need, how many channels (chat, voice, SMS, email), what integrations are required, and how much ongoing management is involved. We don't publish flat rates because every firm's intake process is different. After a discovery call, you'll receive a clear proposal with no hidden fees. What we can say is that for most PI firms, the cost of one signed case from an after-hours lead that would have otherwise been missed pays for months of the system.",
  },
  {
    q: "Can I try a demo first?",
    a: "Yes. Visit our Demo page to see a live AI chat intake demo, a voice agent demonstration, and a side-by-side comparison of a manual PI intake process versus an automated one. You can also book a call for a custom walkthrough — where we demo the system against a scenario specific to your firm's practice areas and intake process.",
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
              Straightforward answers to the questions we hear most from personal injury
              attorneys about how our systems work, what they cost, and how they&apos;re built.
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
              Book a short call and we&apos;ll answer anything specific to your firm and
              practice areas.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all"
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
