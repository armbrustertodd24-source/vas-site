"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { TRACKS, BRAND } from "@/lib/learn"

export default function LearnNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const coursesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close the Courses dropdown on outside click / Escape.
  useEffect(() => {
    if (!coursesOpen) return
    const onClick = (e: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setCoursesOpen(false)
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [coursesOpen])

  const onLearn = pathname.startsWith("/learn/") && pathname !== "/learn/pricing"

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

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-1">
          {/* Courses dropdown */}
          <div ref={coursesRef} className="relative">
            <button
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                onLearn || coursesOpen
                  ? "text-cl-ink bg-cl-surface-2"
                  : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
              )}
            >
              Courses
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", coursesOpen && "rotate-180")} />
            </button>

            {coursesOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-cl-rim bg-cl-surface shadow-[0_18px_50px_rgba(33,29,23,0.14)] p-2">
                {TRACKS.map((t) => {
                  const Icon = t.icon
                  const active = pathname === `/learn/${t.slug}`
                  return (
                    <Link
                      key={t.slug}
                      href={`/learn/${t.slug}`}
                      onClick={() => setCoursesOpen(false)}
                      className={cn(
                        "flex items-start gap-3 rounded-xl p-2.5 transition-colors",
                        active ? "bg-cl-surface-2" : "hover:bg-cl-surface-2"
                      )}
                    >
                      <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", t.softBg)}>
                        <Icon className={cn("w-4 h-4", t.text)} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-cl-ink">{t.name}</span>
                        <span className="block text-xs text-cl-muted truncate">{t.tagline}</span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            href="/learn/pricing"
            className={cn(
              "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/learn/pricing"
                ? "text-cl-accent bg-cl-accent-soft"
                : "text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2"
            )}
          >
            Pricing
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center h-9 px-4 ml-1 rounded-lg bg-cl-ink text-cl-bg text-sm font-semibold hover:bg-cl-accent transition-colors"
          >
            Start here
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-cl-muted hover:text-cl-ink hover:bg-cl-surface-2 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-cl-rim bg-cl-bg">
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
