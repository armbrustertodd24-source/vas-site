"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeInStagger, FadeInItem } from "@/components/FadeIn"

interface Plan {
  name: string
  tagline: string
  priceMonthly: string
  priceAnnual: string
  annualNote?: string
  cadence: string
  features: string[]
  cta: string
  href: string
  featured?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Get a real taste — no card required.",
    priceMonthly: "$0",
    priceAnnual: "$0",
    cadence: "forever",
    features: [
      "The full Claude Chat track",
      "First lesson of every other track",
      "Animated walkthroughs & visuals",
      "New track previews as they launch",
    ],
    cta: "Start free",
    href: "/learn/chat",
  },
  {
    name: "Pro",
    tagline: "The whole academy, always up to date.",
    priceMonthly: "$9",
    priceAnnual: "$79",
    annualNote: "≈ $6.58/mo, billed yearly",
    cadence: "per month",
    features: [
      "Everything in Free",
      "All 5 tracks, all 3 levels each",
      "Every cheat-sheet & reference",
      "New tracks & lessons included",
      "Cancel anytime",
    ],
    cta: "Go Pro",
    href: "/contact",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Founding",
    tagline: "Pay once. Learn forever.",
    priceMonthly: "$99",
    priceAnnual: "$99",
    cadence: "one-time · launch offer",
    features: [
      "Everything in Pro",
      "Lifetime access — no subscription",
      "Founding member badge",
      "Locks in every future track",
    ],
    cta: "Become a founding member",
    href: "/contact",
  },
]

export default function PricingPlans() {
  const [annual, setAnnual] = useState(true)

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={cn("text-sm font-medium", !annual ? "text-cl-ink" : "text-cl-muted")}>
          Monthly
        </span>
        <button
          onClick={() => setAnnual((v) => !v)}
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          className={cn(
            "relative w-11 h-6 rounded-full transition-colors",
            annual ? "bg-cl-accent" : "bg-cl-surface-2"
          )}
        >
          <span
            className={cn(
              "absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform",
              annual && "translate-x-5"
            )}
          />
        </button>
        <span className={cn("text-sm font-medium", annual ? "text-cl-ink" : "text-cl-muted")}>
          Annual
          <span className="ml-1.5 inline-flex items-center rounded-full bg-cl-accent-soft px-2 py-0.5 text-[11px] font-semibold text-cl-accent-dark">
            Save 27%
          </span>
        </span>
      </div>

      <FadeInStagger className="grid gap-5 lg:grid-cols-3 items-start" staggerDelay={0.08}>
        {plans.map((plan) => {
          const isPro = plan.name === "Pro"
          const price = annual ? plan.priceAnnual : plan.priceMonthly
          const showAnnualNote = isPro && annual
          return (
            <FadeInItem key={plan.name}>
              <div
                className={cn(
                  "relative h-full rounded-2xl border p-7 flex flex-col",
                  plan.featured
                    ? "border-cl-accent bg-cl-surface shadow-[0_18px_50px_rgba(194,96,63,0.14)] lg:-mt-3 lg:mb-3"
                    : "border-cl-rim bg-cl-surface"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-cl-accent px-3 py-1 text-[11px] font-semibold text-white">
                    <Sparkles className="w-3 h-3" /> {plan.badge}
                  </span>
                )}

                <h3 className="font-display font-700 text-xl text-cl-ink">{plan.name}</h3>
                <p className="text-cl-muted text-sm mt-1 mb-5 leading-relaxed">{plan.tagline}</p>

                <div className="mb-1 flex items-end gap-1.5">
                  <span className="font-display font-800 text-4xl text-cl-ink tracking-tight">{price}</span>
                  <span className="text-cl-muted text-sm mb-1.5">
                    {isPro ? (annual ? "per year" : "per month") : plan.cadence}
                  </span>
                </div>
                <p className="text-[12px] text-cl-muted mb-6 h-4">
                  {showAnnualNote ? plan.annualNote : isPro ? "Billed monthly" : " "}
                </p>

                <Link
                  href={plan.href}
                  className={cn(
                    "inline-flex items-center justify-center h-11 rounded-xl text-sm font-semibold transition-colors mb-6",
                    plan.featured
                      ? "bg-cl-accent text-white hover:bg-cl-accent-dark"
                      : "border border-cl-rim text-cl-ink hover:border-cl-rim-accent"
                  )}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-2.5 mt-auto">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-cl-ink-soft">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-cl-accent-soft flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-cl-accent" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInItem>
          )
        })}
      </FadeInStagger>
    </div>
  )
}
