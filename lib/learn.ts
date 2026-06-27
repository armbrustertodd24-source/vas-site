import { type LucideIcon } from "lucide-react"
import { COURSES } from "@/content/courses"
import { getIcon } from "@/lib/icons"

export const BRAND = "Promptu"
export const BRAND_TAGLINE =
  "Go from curious to proficient with the AI tools that actually matter."

export type TrackSlug = string

interface AccentClasses {
  text: string
  bg: string
  softBg: string
  border: string
  ring: string
  gradient: string
}

/**
 * Per-accent class palettes. Kept as whole literal strings so the Tailwind v4
 * scanner picks them up. To add a new accent, add an entry here AND its color
 * tokens in globals.css (--color-cl-<key> and --color-cl-<key>-soft).
 */
export const ACCENTS: Record<string, AccentClasses> = {
  chat: { text: "text-cl-chat", bg: "bg-cl-chat", softBg: "bg-cl-chat-soft", border: "border-cl-chat", ring: "ring-cl-chat", gradient: "from-cl-chat/20 to-cl-chat/0" },
  design: { text: "text-cl-design", bg: "bg-cl-design", softBg: "bg-cl-design-soft", border: "border-cl-design", ring: "ring-cl-design", gradient: "from-cl-design/20 to-cl-design/0" },
  cowork: { text: "text-cl-cowork", bg: "bg-cl-cowork", softBg: "bg-cl-cowork-soft", border: "border-cl-cowork", ring: "ring-cl-cowork", gradient: "from-cl-cowork/20 to-cl-cowork/0" },
  code: { text: "text-cl-code", bg: "bg-cl-code", softBg: "bg-cl-code-soft", border: "border-cl-code", ring: "ring-cl-code", gradient: "from-cl-code/20 to-cl-code/0" },
  auto: { text: "text-cl-auto", bg: "bg-cl-auto", softBg: "bg-cl-auto-soft", border: "border-cl-auto", ring: "ring-cl-auto", gradient: "from-cl-auto/20 to-cl-auto/0" },
  gpt: { text: "text-cl-gpt", bg: "bg-cl-gpt", softBg: "bg-cl-gpt-soft", border: "border-cl-gpt", ring: "ring-cl-gpt", gradient: "from-cl-gpt/20 to-cl-gpt/0" },
  gemini: { text: "text-cl-gemini", bg: "bg-cl-gemini", softBg: "bg-cl-gemini-soft", border: "border-cl-gemini", ring: "ring-cl-gemini", gradient: "from-cl-gemini/20 to-cl-gemini/0" },
}

export interface Track extends AccentClasses {
  slug: string
  name: string
  short: string
  tagline: string
  blurb: string
  icon: LucideIcon
}

/** Catalog of tracks, derived from the course registry (order preserved). */
export const TRACKS: Track[] = COURSES.map((c) => {
  const accent = ACCENTS[c.catalog.accent] ?? ACCENTS.chat
  return {
    slug: c.catalog.slug,
    name: c.catalog.name,
    short: c.catalog.short,
    tagline: c.catalog.tagline,
    blurb: c.catalog.blurb,
    icon: getIcon(c.catalog.icon),
    ...accent,
  }
})

export function getTrack(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug)
}
