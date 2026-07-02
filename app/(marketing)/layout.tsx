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
