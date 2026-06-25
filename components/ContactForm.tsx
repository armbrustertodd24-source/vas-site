"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

interface FormState {
  name: string
  email: string
  business: string
  phone: string
  message: string
}

const initial: FormState = {
  name: "",
  email: "",
  business: "",
  phone: "",
  message: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // PLUG IN: Connect to Resend, Formspree, or n8n webhook
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 800)) // placeholder delay
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent-muted border border-rim-accent flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-display font-600 text-ink text-xl mb-2">Message sent</h3>
        <p className="text-subtle text-sm max-w-xs">
          Thanks for reaching out. We&apos;ll review your message and reply within one business day.
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full h-11 bg-surface-2 border border-white/[0.1] rounded-lg px-4 text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-accent/50 focus:bg-surface-2 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-subtle text-xs mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-subtle text-xs mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="business" className="block text-subtle text-xs mb-1.5">
            Business Name <span className="text-accent">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            value={form.business}
            onChange={handleChange}
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-subtle text-xs mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-subtle text-xs mb-1.5">
          What do you want to automate? <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your firm — practice areas, how you currently handle incoming injury leads, how many calls/leads you get per week, and what you'd like to automate..."
          className="w-full bg-surface-2 border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-11 rounded-lg bg-accent text-page text-sm font-semibold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,212,170,0.2)] hover:shadow-[0_0_28px_rgba(0,212,170,0.35)]"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}
