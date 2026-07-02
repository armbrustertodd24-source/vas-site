"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { site, telHref } from "@/lib/site"

const links = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-page fill-current" />
          </div>
          <span className="font-display font-700 text-ink text-base leading-tight whitespace-nowrap md:hidden lg:inline">
            Vector <span className="text-accent">Automation</span> Systems
          </span>
          <span className="font-display font-700 text-ink text-base leading-tight hidden md:inline lg:hidden">
            V<span className="text-accent">A</span>S
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === href
                  ? "text-accent bg-accent-muted"
                  : "text-subtle hover:text-ink hover:bg-white/[0.05]"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          {site.demoPhone && (
            <a
              href={telHref(site.demoPhone)}
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-subtle hover:text-ink transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              {site.demoPhone}
            </a>
          )}
          <Link
            href="/demo"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-colors whitespace-nowrap"
          >
            Hear It Answer
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-subtle hover:text-ink hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0a0c10]/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-accent bg-accent-muted"
                    : "text-subtle hover:text-ink hover:bg-white/[0.05]"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="mt-2 flex items-center justify-center h-11 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              Hear It Answer
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
