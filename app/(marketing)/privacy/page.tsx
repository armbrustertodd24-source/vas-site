import type { Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vector Automation Systems collects, uses, and protects your information, including SMS consent and communications.",
}

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeIn>
        <h1 className="font-display font-700 text-4xl text-ink mb-2">Privacy Policy</h1>
        <p className="text-subtle text-sm mb-10">Last updated: July 6, 2026</p>

        <div className="space-y-8 text-subtle text-base leading-relaxed">
          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Who we are</h2>
            <p>
              Vector Automation Systems (&quot;VAS&quot;, &quot;we&quot;) provides AI-powered
              receptionist, call answering, and appointment scheduling services for home
              service businesses. Contact: contact@vectorautomationsystems.com.
            </p>
          </div>

          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Information we collect</h2>
            <p>
              When you contact us, call our business line, or submit a form on this site, we
              collect the information you provide: name, company, email address, phone number,
              and the content of your messages or calls. Calls to our demo line may be
              recorded and transcribed to provide and improve the service; you will be
              informed when speaking with an AI system.
            </p>
          </div>

          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">SMS / text messaging</h2>
            <p>
              If you opt in to text messages — by requesting follow-up during a call or by
              submitting a form with SMS consent — we may send appointment confirmations,
              reminders, follow-ups to missed calls, and replies to your inquiries. Consent
              is not a condition of purchase. Message frequency varies. Message and data
              rates may apply. Reply STOP at any time to unsubscribe, or HELP for assistance.
            </p>
            <p className="mt-3">
              <strong className="text-ink">No mobile information will be shared with third
              parties or affiliates for marketing or promotional purposes.</strong> Text
              messaging originator opt-in data and consent are not shared with any third
              parties, excluding aggregators and providers of the text message services.
            </p>
          </div>

          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">How we use information</h2>
            <p>
              To respond to inquiries, schedule and confirm appointments, provide our
              services, and improve them. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Service providers</h2>
            <p>
              We use trusted providers to operate our services (telephony, CRM, scheduling,
              and AI processing). They process data only on our behalf and per their own
              safeguards.
            </p>
          </div>

          <div>
            <h2 className="font-display font-600 text-ink text-xl mb-3">Your choices</h2>
            <p>
              Reply STOP to any text to opt out. Email contact@vectorautomationsystems.com to
              request access to or deletion of your information.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
