import type { Metadata } from "next"
import {
  Workflow, Webhook, Clock, Database, GitBranch, ShieldCheck,
  Braces, Repeat, Bell, KeyRound, Boxes,
} from "lucide-react"
import { getTrack } from "@/lib/learn"
import TrackHero from "@/components/learn/TrackHero"
import TrackPager from "@/components/learn/TrackPager"
import { Section, LevelPanel } from "@/components/learn/Section"
import LevelTabs from "@/components/learn/LevelTabs"
import StepGuide from "@/components/learn/StepGuide"
import FeatureGrid from "@/components/learn/FeatureGrid"
import RefTable from "@/components/learn/RefTable"
import Callout from "@/components/learn/Callout"
import LearnAccordion from "@/components/learn/LearnAccordion"
import AutomationMockup from "@/components/learn/mockups/AutomationMockup"

const track = getTrack("automation")

export const metadata: Metadata = {
  title: track.name,
  description: track.blurb,
}

export default function AutomationTrack() {
  return (
    <>
      <TrackHero
        track={track}
        access="A no-code automation platform — Make, n8n, or Zapier — plus a Claude (Anthropic) API key. Free tiers on all three are plenty to build your first working automation."
        mockup={<AutomationMockup />}
      />

      {/* What it can do */}
      <Section
        eyebrow="The big picture"
        title="What AI automation can do"
        intro="Chat and Cowork are hands-on — you're in the loop. Automation is hands-off: you build a workflow once, and it runs itself whenever something happens. Claude becomes the 'brain' step in the middle."
      >
        <FeatureGrid
          accentText="text-cl-auto"
          accentBg="bg-cl-auto-soft"
          features={[
            { icon: Webhook, title: "Trigger on anything", body: "Start a workflow from a new email, form submission, file upload, calendar event, or webhook — no manual kickoff." },
            { icon: Workflow, title: "Claude as the brain", body: "Drop a Claude step into the middle to classify, summarize, extract, draft, or decide — then act on its answer." },
            { icon: Database, title: "Read & write your apps", body: "Pull data from one app, transform it with Claude, and push the result to Sheets, a CRM, Slack, or a database." },
            { icon: Clock, title: "Run on a schedule", body: "Have a workflow fire every morning, every hour, or on a cron — daily digests, reports, and reminders run themselves." },
            { icon: GitBranch, title: "Branch on the result", body: "Route differently based on what Claude returns — escalate urgent items, file the rest, all automatically." },
            { icon: ShieldCheck, title: "Run unattended, safely", body: "Add filters, error handling, and approval steps so automations fail loudly instead of silently doing the wrong thing." },
          ]}
        />
      </Section>

      {/* Levels */}
      <Section
        eyebrow="Your roadmap"
        title="From first scenario to production pipelines"
        intro="Work through the three levels in order. You'll build a real, running automation in the Beginner level, then make it robust and powerful."
      >
        <LevelTabs
          activeBg="bg-cl-auto"
          levels={[
            { id: "beginner", label: "Beginner", blurb: "Build your first Claude-powered workflow" },
            { id: "intermediate", label: "Intermediate", blurb: "Structured data, schedules & branching" },
            { id: "proficient", label: "Proficient", blurb: "Reliable, production-grade pipelines" },
          ]}
          panels={[
            // ── Beginner ──
            <LevelPanel key="b" heading="Build something that runs itself">
              <StepGuide
                accentBg="bg-cl-auto"
                steps={[
                  { title: "Pick your platform", body: <>Start with <strong>Make</strong>, <strong>n8n</strong>, or <strong>Zapier</strong> — all have free tiers and a visual canvas. Make and n8n give you the most control; Zapier is the simplest. Any of them works for this track.</> },
                  { title: "Get a Claude API key", body: <>Create a key at <a href="https://console.anthropic.com" target="_blank" rel="noreferrer">console.anthropic.com</a>. Automation calls the Claude <em>API</em> (pay-per-use), which is separate from your claude.ai chat subscription. Add a few dollars of credit to start.</> },
                  { title: "Add a trigger", body: <>Every workflow starts with a trigger — the event that kicks it off. Pick something simple first, like <em>&quot;new email in a Gmail label&quot;</em> or <em>&quot;new row in a Google Sheet.&quot;</em></> },
                  { title: "Add a Claude step", body: <>Add an <strong>Anthropic / Claude</strong> module (or an HTTP call to the Messages API). Feed it data from the trigger and write a clear instruction: <em>&quot;Summarize this email in one sentence and label it urgent or normal.&quot;</em></> },
                  { title: "Do something with the answer", body: <>Add a final action that uses Claude&apos;s output — append it to a sheet, post it to Slack, or send a reply. Then <strong>run once</strong> to test the whole chain end to end.</> },
                  { title: "Turn it on", body: <>Flip the scenario to <strong>active</strong>. It now runs on its own every time the trigger fires. Congratulations — that&apos;s a working AI automation.</> },
                ]}
              />
              <Callout variant="tip" title="Start absurdly small">
                Your first automation should do one boring, useful thing — like logging
                form submissions to a sheet with a one-line summary. Get that running
                before you reach for anything clever. Momentum beats ambition here.
              </Callout>
            </LevelPanel>,

            // ── Intermediate ──
            <LevelPanel key="i" heading="Make it structured and smart">
              <StepGuide
                accentBg="bg-cl-auto"
                steps={[
                  { title: "Ask Claude for JSON", body: <>Tell Claude to reply with structured JSON — <em>&quot;Return {`{ "category": ..., "priority": ..., "summary": ... }`}&quot;</em>. Structured output is far easier for the next step to use than free-form text.</> },
                  { title: "Parse and map the fields", body: <>Use your platform&apos;s <strong>JSON parse</strong> module, then map each field (category, priority, summary) into the apps downstream. Now one Claude call feeds several actions.</> },
                  { title: "Branch on what Claude decided", body: <>Add a <strong>router</strong> / filter: if <code>priority = high</code>, send a Slack alert; otherwise just log it. Claude decides, the workflow routes.</> },
                  { title: "Run on a schedule", body: <>Swap an instant trigger for a <strong>scheduled</strong> one to build digests — e.g. every morning at 8am, gather yesterday&apos;s entries, have Claude write a summary, and email it.</> },
                  { title: "Iterate over lists", body: <>Use an <strong>iterator</strong> to loop Claude over many items — every new row, every unread email — processing each one and aggregating the results.</> },
                ]}
              />
              <RefTable
                caption="Core building blocks"
                columns={["Block", "Where", "What it does"]}
                rows={[
                  { name: "Trigger", cells: ["Start of the scenario", "The event that starts a run — instant (webhook) or scheduled (cron)."] },
                  { name: "Claude module", cells: ["Anthropic / HTTP step", "Sends a prompt + data to the Messages API and returns the model's reply."] },
                  { name: "JSON parse", cells: ["After the Claude step", "Turns Claude's JSON string into mappable fields."] },
                  { name: "Router / filter", cells: ["Branch point", "Sends the run down different paths based on a condition."] },
                  { name: "Iterator", cells: ["Around a list", "Runs the following steps once per item in an array."] },
                ]}
              />
            </LevelPanel>,

            // ── Proficient ──
            <LevelPanel key="p" heading="Production-grade and reliable">
              <StepGuide
                accentBg="bg-cl-auto"
                steps={[
                  { title: "Engineer the system prompt", body: <>Give the Claude step a strong <strong>system prompt</strong> that fixes its role, rules, and output schema. Pin a specific model so behavior is consistent across runs.</> },
                  { title: "Handle errors deliberately", body: <>Add <strong>error handlers</strong> / retry routes so a failed API call or malformed reply doesn&apos;t silently break the chain. Route failures to a log or an alert so you find out fast.</> },
                  { title: "Add a human-in-the-loop gate", body: <>For high-stakes actions (sending client emails, moving money), insert an <strong>approval step</strong> — Claude drafts, a person clicks approve, then the action fires.</> },
                  { title: "Control cost and tokens", body: <>Trim what you send: pass only the fields Claude needs, cap output length, and use a smaller/faster model for simple classification to keep per-run cost low.</> },
                  { title: "Secure your keys and data", body: <>Store the API key in your platform&apos;s <strong>secrets/connections</strong> vault, never in plain text. Be deliberate about what customer data leaves your systems.</> },
                  { title: "Chain workflows into pipelines", body: <>Have one scenario trigger another via webhook to build modular pipelines — intake → enrich → route → report — each piece testable on its own.</> },
                ]}
              />
              <Callout variant="warning" title="Unattended means unforgiving">
                A workflow you watch can be sloppy; one that runs at 3am can&apos;t.
                Before you trust an automation with real work, test the failure paths:
                a malformed reply, a down API, an empty trigger. Make it fail loudly.
              </Callout>
            </LevelPanel>,
          ]}
        />
      </Section>

      {/* Cheat sheet */}
      <Section eyebrow="Keep it handy" title="Quick reference">
        <div className="space-y-5">
          <RefTable
            caption="Common patterns"
            columns={["Pattern", "Shape", "Great for"]}
            rows={[
              { name: "Classify & route", cells: ["Trigger → Claude → router", "Triaging emails, tickets, and leads automatically."] },
              { name: "Extract to data", cells: ["Trigger → Claude (JSON) → Sheet/DB", "Turning messy text into clean, structured rows."] },
              { name: "Scheduled digest", cells: ["Cron → gather → Claude → email", "Daily summaries, reports, and standups."] },
              { name: "Draft & approve", cells: ["Trigger → Claude → human → send", "Replies and outreach that need a sign-off."] },
              { name: "Enrich a record", cells: ["Trigger → Claude → update CRM", "Filling in missing context on new contacts."] },
            ]}
          />
          <FeatureGrid
            columns={3}
            accentText="text-cl-auto"
            accentBg="bg-cl-auto-soft"
            features={[
              { icon: Braces, title: "Demand JSON", body: "Structured output is the difference between a demo and a pipeline." },
              { icon: GitBranch, title: "Let Claude decide, the flow route", body: "Keep logic in the workflow; keep judgment in the prompt." },
              { icon: Repeat, title: "Test with 'run once'", body: "Walk the whole chain on real data before going live." },
              { icon: Bell, title: "Alert on failure", body: "Silent automations rot. Make errors page you." },
              { icon: KeyRound, title: "Vault your keys", body: "API keys belong in connections/secrets, never inline." },
              { icon: Boxes, title: "Small, chained scenarios", body: "Modular pipelines beat one giant unmaintainable flow." },
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Common questions" title="Good to know">
        <LearnAccordion
          items={[
            { q: "Do I need to know how to code?", a: <>No. Make, n8n, and Zapier are visual — you connect modules on a canvas. The only &quot;code&quot; is the plain-English prompt you give Claude. (n8n lets you drop into code if you ever want to.)</> },
            { q: "How is this different from Claude Cowork?", a: <>Cowork is interactive — you ask Claude to do a job and watch it work across your tools. Automation is unattended — a workflow runs on its own when a trigger fires, with Claude as one step. Use Cowork for one-off jobs, automation for things that should happen every time.</> },
            { q: "What does it cost to run?", a: <>Two meters: your automation platform (generous free tiers, paid plans scale with runs) and the Claude API (pay per token). Most simple workflows cost a fraction of a cent per run — keep prompts lean and use smaller models for simple steps.</> },
            { q: "Is the Claude API the same as my claude.ai plan?", a: <>No — they&apos;re billed separately. claude.ai (Pro/Max) is the chat app; the <strong>API</strong> powers automations and is metered by usage. You&apos;ll create an API key in the Anthropic Console.</> },
            { q: "How do I keep an unattended workflow from going wrong?", a: <>Constrain it: a strict system prompt and output schema, filters that catch bad input, error routes that alert you, and a human approval step before any high-stakes action. Test the failure paths before you trust it.</> },
          ]}
        />
      </Section>

      <TrackPager current="automation" />
    </>
  )
}
