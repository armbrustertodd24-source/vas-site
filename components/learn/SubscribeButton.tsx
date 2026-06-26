"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type PlanKey = "pro_monthly" | "pro_annual" | "founding"

/**
 * Starts Stripe Checkout for a plan. If the user isn't signed in, the
 * checkout API returns 401 and we send them through the Auth.js sign-in flow
 * first (returning to /learn/pricing afterwards).
 */
export default function SubscribeButton({
  plan,
  className,
  children,
}: {
  plan: PlanKey
  className?: string
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)

  async function onClick() {
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      })

      if (res.status === 401) {
        window.location.href =
          "/api/auth/signin?callbackUrl=" + encodeURIComponent("/learn/pricing")
        return
      }

      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
        alert("Sorry — checkout is not available right now. Please try again.")
      }
    } catch {
      setLoading(false)
      alert("Sorry — checkout is not available right now. Please try again.")
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={cn(className, loading && "opacity-70 cursor-not-allowed")}
    >
      {loading ? "Redirecting…" : children}
    </button>
  )
}
