import { MessageSquare, Sparkles, Briefcase, Terminal, Workflow, type LucideIcon } from "lucide-react"

export const BRAND = "Claude Academy"
export const BRAND_TAGLINE = "Go from curious to proficient with every Claude tool — then put it on autopilot."

export type TrackSlug = "chat" | "design" | "cowork" | "code" | "automation"

export interface Track {
  slug: TrackSlug
  name: string
  short: string
  tagline: string
  blurb: string
  icon: LucideIcon
  /* Literal Tailwind classes (kept whole so the v4 scanner picks them up) */
  text: string
  bg: string
  softBg: string
  border: string
  ring: string
  gradient: string
}

export const TRACKS: Track[] = [
  {
    slug: "chat",
    name: "Claude Chat",
    short: "Chat",
    tagline: "The conversation that starts it all",
    blurb:
      "Talk to Claude on the web, desktop, or your phone. Learn to prompt well, attach files, search the web, and turn Claude into your everyday thinking partner.",
    icon: MessageSquare,
    text: "text-cl-chat",
    bg: "bg-cl-chat",
    softBg: "bg-cl-chat-soft",
    border: "border-cl-chat",
    ring: "ring-cl-chat",
    gradient: "from-cl-chat/20 to-cl-chat/0",
  },
  {
    slug: "design",
    name: "Claude Design",
    short: "Design",
    tagline: "Projects & Artifacts — Claude's creative canvas",
    blurb:
      "Build interactive apps, documents, diagrams, and visuals you can edit live. Organize work into Projects with shared knowledge, and shape Claude's voice with custom styles.",
    icon: Sparkles,
    text: "text-cl-design",
    bg: "bg-cl-design",
    softBg: "bg-cl-design-soft",
    border: "border-cl-design",
    ring: "ring-cl-design",
    gradient: "from-cl-design/20 to-cl-design/0",
  },
  {
    slug: "cowork",
    name: "Claude Cowork",
    short: "Cowork",
    tagline: "Delegate real work across your tools",
    blurb:
      "Hand Claude multi-step jobs that span your apps — email, calendar, docs, design, code, and more. Connect tools, delegate tasks, and review the results.",
    icon: Briefcase,
    text: "text-cl-cowork",
    bg: "bg-cl-cowork",
    softBg: "bg-cl-cowork-soft",
    border: "border-cl-cowork",
    ring: "ring-cl-cowork",
    gradient: "from-cl-cowork/20 to-cl-cowork/0",
  },
  {
    slug: "code",
    name: "Claude Code",
    short: "Code",
    tagline: "An agent that lives in your codebase",
    blurb:
      "Use Claude as a coding agent in your terminal, IDE, or the cloud. Master plan mode, slash commands, Skills, hooks, MCP servers, and subagents.",
    icon: Terminal,
    text: "text-cl-code",
    bg: "bg-cl-code",
    softBg: "bg-cl-code-soft",
    border: "border-cl-code",
    ring: "ring-cl-code",
    gradient: "from-cl-code/20 to-cl-code/0",
  },
  {
    slug: "automation",
    name: "AI Automation",
    short: "Automate",
    tagline: "Put Claude to work while you sleep",
    blurb:
      "Wire Claude into no-code automation tools like Make, n8n, and Zapier. Trigger workflows from email, forms, and schedules, let Claude do the thinking, then write results back to your apps — no babysitting required.",
    icon: Workflow,
    text: "text-cl-auto",
    bg: "bg-cl-auto",
    softBg: "bg-cl-auto-soft",
    border: "border-cl-auto",
    ring: "ring-cl-auto",
    gradient: "from-cl-auto/20 to-cl-auto/0",
  },
]

export function getTrack(slug: TrackSlug): Track {
  return TRACKS.find((t) => t.slug === slug)!
}
