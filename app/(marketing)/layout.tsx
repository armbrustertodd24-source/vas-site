import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Vector Automation Systems — AI Receptionists for Home Service Companies",
    template: "%s | Vector Automation Systems",
  },
  description:
    "Vector Automation Systems builds AI receptionists for restoration, HVAC, and plumbing companies — answering every call 24/7, qualifying jobs, dispatching emergencies, and booking work into your schedule.",
  keywords: [
    "AI receptionist",
    "answering service for HVAC",
    "answering service for plumbers",
    "restoration company answering service",
    "missed call text back",
    "AI voice agent for home services",
    "after hours call answering",
    "appointment booking automation",
  ],
  openGraph: {
    siteName: "Vector Automation Systems",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png" }],
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vector Automation Systems",
  url: "https://vectorautomationsystems.com",
  logo: "https://vectorautomationsystems.com/logo.png",
  description:
    "AI receptionists for restoration, HVAC, and plumbing companies — answering every call 24/7, qualifying jobs, dispatching emergencies, and booking work.",
  email: "contact@vectorautomationsystems.com",
  areaServed: "US",
  knowsAbout: [
    "AI receptionist",
    "after-hours call answering",
    "missed call text back",
    "appointment booking automation",
    "HVAC answering service",
    "plumbing answering service",
    "restoration company answering service",
  ],
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
      {/* GHL/LeadConnector chat widget — SMS opt-in point referenced in A2P registration */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a4c1146af4e624718331c50"
        data-source="WEB_USER"
        async
      />
    </>
  )
}
