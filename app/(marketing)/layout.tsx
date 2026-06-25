import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Vector Automation Systems — AI Automation for Lead Capture & Appointments",
    template: "%s | Vector Automation Systems",
  },
  description:
    "Vector Automation Systems helps businesses automate lead response, appointment scheduling, and customer follow-up with AI chat, voice, and workflow systems.",
  keywords: [
    "AI automation",
    "lead capture automation",
    "appointment booking automation",
    "AI chatbot for business",
    "AI voice agent",
    "CRM automation",
    "follow-up automation",
  ],
  openGraph: {
    siteName: "Vector Automation Systems",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png" }],
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}
