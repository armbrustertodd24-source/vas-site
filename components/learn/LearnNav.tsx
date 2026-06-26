"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { TRACKS, BRAND } from "@/lib/learn"

export default function LearnNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cl-bg/90 backdrop-blur-md border-b border-cl-rim"
          : "bg-cl-bg/70 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/learn" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-cl-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-[18px] h-[18px] text-white" />
          </span>
          <span className="font-display font-700 text-cl-ink text-[15px] tracking-tight">{BRAND}</span>
        </Link>

        {/* Desktop track links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {TRACKS.map((t) => {
            const href = `/learn/${t.slug}`
            const active = pathname === href
            return (
              <Link
                key={t.slug}
                href={href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                  active ? cn(t.text, t.softBg) : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
                )}
              >
                {t.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/learn/pricing"
            className={cn(
              "hidden lg:inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/learn/pricing"
                ? "text-cl-accent bg-cl-accent-soft"
                : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
            )}
          >
            Pricing
          </Link>
          <Link
            href="/learn"
            className="hidden lg:inline-flex items-center h-9 px-4 rounded-lg bg-cl-ink text-cl-bg text-sm font-semibold hover:bg-cl-accent transition-colors"
          >
            Start here
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-cl-rim bg-cl-bg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            <Link
              href="/learn"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-cl-ink hover:bg-cl-surface-2 transition-colors"
            >
              Overview
            </Link>
            {TRACKS.map((t) => {
              const href = `/learn/${t.slug}`
              const active = pathname === href
              return (
                <Link
                  key={t.slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    active ? cn(t.text, t.softBg) : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
                  )}
                >
                  {t.name}
                </Link>
              )
            })}
            <Link
              href="/learn/pricing"
              onClick={() => setOpen(false)}
              className={cn(
                "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname === "/learn/pricing"
                  ? "text-cl-accent bg-cl-accent-soft"
                  : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
              )}
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
