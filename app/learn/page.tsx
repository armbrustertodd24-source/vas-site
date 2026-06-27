import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Eye,
  ListChecks,
  TrendingUp,
  Compass,
} from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn"
import { TRACKS, BRAND_TAGLINE } from "@/lib/learn"
import ChatMockup from "@/components/learn/mockups/ChatMockup"
import { cn } from "@/lib/utils"

const learnings: Record<string, string[]> = {
  chat: ["Prompt clearly and iterate", "Upload files & images", "Web search, voice & connectors", "Set custom instructions"],
  design: ["Build & edit Artifacts live", "Interactive apps & diagrams", "Organize work in Projects", "Publish and share"],
  cowork: ["Connect your apps", "Delegate multi-step tasks", "Add Skills & automations", "Review and refine output"],
  code: ["Install & first run", "Plan mode & slash commands", "Skills, hooks & MCP", "Subagents & the cloud"],
  automation: ["Build your first workflow", "Claude as the brain step", "Structured data & branching", "Reliable, hands-off pipelines"],
  chatgpt: ["Prompt like a pro", "Files, data & images", "Voice & web browsing", "Build custom GPTs"],
  gemini: ["Chat with Gemini", "Inside Gmail & Docs", "Analyze Drive & images", "Build custom Gems"],
}

const approach = [
  { icon: Eye, title: "See it, don't just read it", body: "Every concept comes with an animated mockup of the real interface so you know exactly what to look for." },
  { icon: ListChecks, title: "Step-by-step manuals", body: "Numbered walkthroughs for real tasks — adding Skills, uploading knowledge, connecting tools, and more." },
  { icon: TrendingUp, title: "Beginner → Proficient", body: "Each track has three levels. Start at zero, then climb to power-user features at your own pace." },
]

export default function LearnHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden cl-grid">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-cl-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cl-rim bg-cl-surface px-3 py-1 text-xs font-medium text-cl-accent-dark mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Learn AI the hands-on way
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-cl-ink tracking-tight mb-5">
              Master every AI tool, one step at a time.
            </h1>
            <p className="text-cl-muted text-lg leading-relaxed max-w-xl mb-8">
              {BRAND_TAGLINE} Seven guided tracks — Claude Chat, Design, Cowork, Code,
              Automation, ChatGPT, and Gemini — packed with visuals, walkthroughs, and
              cheat-sheets that take you from complete beginner to confident pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/learn/chat"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-cl-ink text-cl-bg text-sm font-semibold hover:bg-cl-accent transition-colors"
              >
                Start with Claude Chat <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-cl-rim bg-cl-surface text-cl-ink text-sm font-semibold hover:border-cl-rim-accent transition-colors"
              >
                Browse all tracks
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <ChatMockup />
          </FadeIn>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInStagger className="grid gap-4 md:grid-cols-3" staggerDelay={0.06}>
          {approach.map(({ icon: Icon, title, body }) => (
            <FadeInItem key={title}>
              <div className="h-full rounded-2xl border border-cl-rim bg-cl-surface p-6">
                <div className="w-11 h-11 rounded-xl bg-cl-accent-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cl-accent" />
                </div>
                <h3 className="font-display font-700 text-cl-ink text-lg mb-1.5">{title}</h3>
                <p className="text-cl-muted text-sm leading-relaxed">{body}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Tracks */}
      <section id="tracks" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        <FadeIn className="max-w-2xl mb-10">
          <p className="text-cl-accent-dark text-sm font-semibold uppercase tracking-widest mb-3">
            Seven tracks, one path
          </p>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-cl-ink mb-3">
            Pick a tool and go from zero to proficient
          </h2>
          <p className="text-cl-muted leading-relaxed">
            New to Claude? Follow them in order. Already comfortable? Jump straight to
            the track you need.
          </p>
        </FadeIn>

        <FadeInStagger className="grid gap-5 md:grid-cols-2" staggerDelay={0.07}>
          {TRACKS.map((t, i) => {
            const Icon = t.icon
            return (
              <FadeInItem key={t.slug}>
                <Link
                  href={`/learn/${t.slug}`}
                  className="group block h-full rounded-2xl border border-cl-rim bg-cl-surface p-6 hover:border-cl-rim-accent hover:shadow-[0_14px_44px_rgba(33,29,23,0.08)] transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className={cn("w-12 h-12 rounded-xl flex items-center justify-center", t.softBg)}>
                      <Icon className={cn("w-6 h-6", t.text)} />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-cl-muted mb-0.5">Track {i + 1}</p>
                      <h3 className="font-display font-700 text-xl text-cl-ink">{t.name}</h3>
                    </div>
                  </div>
                  <p className="text-cl-muted text-sm leading-relaxed mb-4">{t.blurb}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                    {learnings[t.slug].map((l) => (
                      <li key={l} className="flex items-start gap-1.5 text-[13px] text-cl-ink-soft">
                        <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", t.bg)} />
                        {l}
                      </li>
                    ))}
                  </ul>
                  <span className={cn("inline-flex items-center gap-1.5 text-sm font-semibold", t.text)}>
                    Start {t.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </section>

      {/* Learning path */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-cl-rim bg-cl-surface p-8 md:p-12">
          <FadeIn className="flex items-center gap-3 mb-8">
            <Compass className="w-6 h-6 text-cl-accent" />
            <h2 className="font-display font-700 text-2xl sm:text-3xl text-cl-ink">
              The recommended path
            </h2>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRACKS.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 0.08}>
                <Link href={`/learn/${t.slug}`} className="group block">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={cn("w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center", t.bg)}>
                      {i + 1}
                    </span>
                    <span className="h-px flex-1 bg-cl-rim" />
                  </div>
                  <h3 className="font-display font-600 text-cl-ink group-hover:text-cl-accent transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-xs text-cl-muted mt-1 leading-relaxed">{t.tagline}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn className="text-center max-w-2xl mx-auto py-8">
          <h2 className="font-display font-700 text-3xl text-cl-ink mb-4">Ready to begin?</h2>
          <p className="text-cl-muted mb-7">
            Everything is free to read and built to be skimmed or studied. Start where
            most people do — a simple conversation.
          </p>
          <Link
            href="/learn/chat"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-cl-accent text-white text-sm font-semibold hover:bg-cl-accent-dark transition-colors"
          >
            Open Track 1 — Claude Chat <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
