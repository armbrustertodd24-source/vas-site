import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

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
  metadataBase: new URL("https://vectorautomationsystems.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    siteName: "Vector Automation Systems",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
