import type { Metadata } from "next"
import Link from "next/link"
import { Phone, GraduationCap, Blocks, Bot, Gift } from "lucide-react"
import { site, telHref } from "@/lib/site"

export const metadata: Metadata = {
  title: "Bruster Automates — Links",
  description:
    "20 yrs federal service → AI builder. Call my AI receptionist, learn AI hands-on, or replace your software stack.",
  robots: { index: false },
}

const links = [
  {
    icon: Phone,
    href: telHref(site.demoPhone),
    title: "📞 Call my AI receptionist",
    sub: "She picks up right now — try to stump her",
    highlight: true,
  },
  {
    icon: GraduationCap,
    href: "https://getpromptu.com",
    title: "Learn AI the hands-on way",
    sub: "Promptu — guided tracks from beginner to pro",
    highlight: false,
  },
  {
    icon: Blocks,
    href: "https://mintriva.com",
    title: "The $197 app that replaces your $400/mo stack",
    sub: "CRM, bookings, store, email & AI — one login",
    highlight: false,
  },
  {
    icon: Bot,
    href: "https://vectorautomationsystems.com",
    title: "AI receptionists for home-service companies",
    sub: "Restoration, HVAC & plumbing — never miss a call",
    highlight: false,
  },
  {
    icon: Gift,
    href: "https://beacons.ai/glitch_ai",
    title: "🎁 Free: Faceless Creator Starter Kit",
    sub: "No email games — just take it",
    highlight: false,
  },
]

export default function LinksPage() {
  return (
    <section className="max-w-md mx-auto px-4 pt-12 pb-20">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
          <Bot className="w-8 h-8 text-page" />
        </div>
        <h1 className="font-display font-700 text-2xl text-ink">Bruster Automates</h1>
        <p className="text-subtle text-sm mt-2 max-w-xs mx-auto">
          20 yrs federal service → AI builder. Everything below is something I built.
        </p>
      </div>

      <div className="space-y-3">
        {links.map(({ icon: Icon, href, title, sub, highlight }) => (
          <Link
            key={title}
            href={href}
            className={
              highlight
                ? "flex items-center gap-4 p-4 rounded-xl bg-accent text-page hover:bg-accent-dark transition-all shadow-[0_0_24px_rgba(212,168,67,0.25)]"
                : "flex items-center gap-4 p-4 rounded-xl border border-rim bg-surface hover:border-rim-accent hover:bg-surface-2 transition-all"
            }
          >
            <Icon className={highlight ? "w-6 h-6 flex-shrink-0" : "w-6 h-6 text-accent flex-shrink-0"} />
            <span className="min-w-0">
              <span className={`block font-display font-600 text-base leading-tight ${highlight ? "" : "text-ink"}`}>
                {title}
              </span>
              <span className={`block text-xs mt-0.5 ${highlight ? "text-page/80" : "text-subtle"}`}>
                {sub}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <p className="text-center text-subtle text-xs mt-8">
        {site.demoPhone} · Vector Automation Systems
      </p>
    </section>
  )
}
