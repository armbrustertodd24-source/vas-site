import Link from "next/link"
import { Zap, Phone } from "lucide-react"
import { site, telHref } from "@/lib/site"

const nav = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080b14] mt-24">
      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-subtle text-sm uppercase tracking-widest font-medium mb-4">
          How many calls did you miss this week?
        </p>
        <h2 className="font-display font-700 text-3xl md:text-4xl text-ink mb-4">
          Your phone should be your best employee.<br className="hidden sm:block" /> Let&apos;s make it one.
        </h2>
        <p className="text-subtle mb-8 max-w-md mx-auto">
          Call the demo line and hear the AI answer, or book a 15-minute call — we&apos;ll test your phones and show you exactly what your callers get today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            Hear It Answer
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg border border-white/[0.12] text-ink text-sm font-medium hover:bg-white/[0.05] transition-colors"
          >
            Contact Us
          </Link>
        </div>
        {site.demoPhone && (
          <a
            href={telHref(site.demoPhone)}
            className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            Call the demo line: {site.demoPhone}
          </a>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Zap className="w-3.5 h-3.5 text-page fill-current" />
            </div>
            <span className="font-display font-700 text-ink text-sm">
              Vector Automation Systems
            </span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-subtle hover:text-ink transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-subtle text-xs">
            © {new Date().getFullYear()} Vector Automation Systems
          </p>
        </div>
      </div>
    </footer>
  )
}
