import type { Metadata } from "next"
import { Calendar, Mail, Clock } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact — Book a 15-Minute Call",
  description:
    "Book a 15-minute call or send us a message. We'll test your phones, show you what your callers hear today, and what an AI receptionist would do instead.",
}

const details = [
  {
    icon: Clock,
    label: "Response time",
    value: "We reply within one business day.",
  },
  {
    icon: Calendar,
    label: "First call",
    value: "15 minutes. We show you what we found on your phone line — no pitch deck.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@vectorautomationsystems.com",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="font-display font-700 text-4xl md:text-5xl text-ink leading-[1.1] mb-4">
              Let&apos;s Find Out What Your Missed Calls Are Costing You
            </h1>
            <p className="text-subtle text-lg leading-relaxed max-w-lg mx-auto">
              Tell us about your company and how calls are handled today — especially after
              hours. We&apos;ll follow up within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Form */}
          <FadeIn>
            <div className="rounded-xl border border-rim bg-surface p-6 md:p-8">
              <h2 className="font-display font-600 text-ink text-xl mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Contact details */}
            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-rim bg-surface p-6">
                <h3 className="font-display font-600 text-ink text-lg mb-4">What to expect</h3>
                <FadeInStagger className="space-y-4" staggerDelay={0.06}>
                  {details.map(({ icon: Icon, label, value }) => (
                    <FadeInItem key={label}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent-muted border border-rim-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <div>
                          <p className="text-subtle text-xs mb-0.5">{label}</p>
                          <p className="text-ink text-sm">{value}</p>
                        </div>
                      </div>
                    </FadeInItem>
                  ))}
                </FadeInStagger>
              </div>
            </FadeIn>

            {/* Calendar */}
            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-rim bg-surface overflow-hidden">
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <h3 className="font-display font-600 text-ink text-lg">Book Your 15-Minute Call</h3>
                  <p className="text-subtle text-sm mt-1">
                    Select a time that works for you.
                  </p>
                </div>
                <div className="p-6 text-center min-h-[200px] flex flex-col items-center justify-center">
                  <Calendar className="w-8 h-8 text-subtle mb-3" />
                  <p className="text-ink text-sm font-medium mb-1.5">Calendar Booking</p>
                  <p className="text-subtle text-xs max-w-[200px] leading-relaxed">
                    Calendar embed will appear here once connected.
                  </p>
                  {/* PLUG IN: Calendly or GHL calendar embed here */}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
