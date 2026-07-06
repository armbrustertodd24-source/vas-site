import type { Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Vector Automation Systems' website and services.",
}

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <h1 className="font-display font-700 text-4xl text-ink mb-2">Terms of Service</h1>
        <p className="text-subtle text-sm mb-10">Last updated: July 6, 2026</p>

        <div className="space-y-8 text-subtle text-base leading-relaxed">
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Services</h2>
            <p>
              Vector Automation Systems (&quot;VAS&quot;) provides AI-powered receptionist,
              call answering, and appointment scheduling services for businesses. Service
              engagements are governed by the written agreement provided at signup,
              including the 30-day pilot terms where offered.
            </p>
          </div>
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Acceptable use</h2>
            <p>
              You agree to use this website and our services lawfully. You may not use our
              services to place unlawful calls or send unlawful messages, including
              communications that violate the TCPA or applicable carrier guidelines.
            </p>
          </div>
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Communications</h2>
            <p>
              By submitting your contact information with consent, you agree to receive
              informational and transactional communications from VAS. Consent is not a
              condition of purchase. Reply STOP to any text to unsubscribe. See our{" "}
              <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>{" "}
              for details on how your information is handled.
            </p>
          </div>
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Disclaimers</h2>
            <p>
              Services are provided &quot;as is.&quot; To the maximum extent permitted by
              law, VAS disclaims implied warranties and limits its total liability to fees
              paid in the three months preceding a claim.
            </p>
          </div>
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Contact</h2>
            <p>
              Vector Automation Systems{site.businessAddress ? ` — ${site.businessAddress}` : ""}.
              Email: {site.email}{site.demoPhone ? `. Phone: ${site.demoPhone}` : ""}.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
