import type { Metadata } from "next"
import {
  Terminal, GitCommitHorizontal, Map, Slash, Puzzle, Webhook,
  Server, Bot, ShieldCheck, MonitorSmartphone, Cloud, FileCog,
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
import CodeMockup from "@/components/learn/mockups/CodeMockup"

const track = getTrack("code")

export const metadata: Metadata = {
  title: track.name,
  description: track.blurb,
}

export default function CodeTrack() {
  return (
    <>
      <TrackHero
        track={track}
        access="Your terminal (the CLI), VS Code & JetBrains extensions, the desktop app, or the cloud at claude.ai/code. Free with a Claude plan or API account."
        mockup={<CodeMockup />}
      />

      <Section
        eyebrow="The big picture"
        title="An agent that lives in your codebase"
        intro="Claude Code reads your repository, edits files, runs commands, and verifies its own work. You describe the change; it plans, executes, and iterates until it's done — right where you already work."
      >
        <FeatureGrid
          accentText="text-cl-code"
          accentBg="bg-cl-code-soft"
          features={[
            { icon: Terminal, title: "Understands the repo", body: "Searches and reads across files to grasp context before it changes anything." },
            { icon: FileCog, title: "Edits & runs", body: "Makes multi-file edits, runs tests and builds, reads the output, and fixes what broke." },
            { icon: Map, title: "Plans before acting", body: "Plan mode investigates read-only and proposes an approach for you to approve." },
            { icon: GitCommitHorizontal, title: "Handles git", body: "Writes meaningful commits, manages branches, and can open pull requests." },
            { icon: Puzzle, title: "Extensible", body: "Skills, hooks, MCP servers, and subagents let you shape exactly how it works." },
            { icon: MonitorSmartphone, title: "Everywhere you code", body: "Terminal, IDE, desktop, and cloud — the same agent across surfaces." },
          ]}
        />
      </Section>

      <Section
        eyebrow="Your roadmap"
        title="From first run to a customized agent"
        intro="Install it, learn the loop, then layer on plan mode, Skills, hooks, MCP, and subagents."
      >
        <LevelTabs
          activeBg="bg-cl-code"
          levels={[
            { id: "beginner", label: "Beginner", blurb: "Install & run your first task" },
            { id: "intermediate", label: "Intermediate", blurb: "Plan mode, commands & memory" },
            { id: "proficient", label: "Proficient", blurb: "Skills, hooks, MCP & subagents" },
          ]}
          panels={[
            <LevelPanel key="b" heading="Get it running">
              <StepGuide
                accentBg="bg-cl-code"
                steps={[
                  { title: "Install the CLI", body: <>Use the install command from the official docs (for example <code>npm install -g @anthropic-ai/claude-code</code>, or the native installer). Prefer the IDE? Install the <strong>Claude Code</strong> extension for VS Code or JetBrains.</> },
                  { title: "Open a project and launch", body: <>From your repo, run <code>claude</code> to start an interactive session. On first run you&apos;ll sign in through the browser.</> },
                  { title: "Describe a task in plain English", body: <>Try something small: <em>&quot;add input validation to the signup form and write a test for it.&quot;</em> Claude reads the relevant files, makes edits, and runs the test.</> },
                  { title: "Review every change", body: <>Claude shows diffs as it goes. Read them. Approve, or steer with feedback — <em>&quot;use the existing validation helper instead.&quot;</em></> },
                  { title: "Create a CLAUDE.md", body: <>Run <code>/init</code> to generate a <strong>CLAUDE.md</strong> — project memory where you record build commands, conventions, and gotchas Claude should always follow.</> },
                ]}
              />
              <Callout variant="tip" title="CLAUDE.md is your highest-leverage file">
                A few lines about how your project builds, tests, and what patterns to follow
                makes every future task sharper. Treat it as living documentation for your agent.
              </Callout>
            </LevelPanel>,

            <LevelPanel key="i" heading="Drive it deliberately">
              <StepGuide
                accentBg="bg-cl-code"
                steps={[
                  { title: "Use plan mode for anything non-trivial", body: <>Press <code>Shift+Tab</code> to cycle into <strong>plan mode</strong>. Claude explores read-only and proposes a plan — you approve before a single file changes. Great for unfamiliar code.</> },
                  { title: "Learn the core slash commands", body: <>Type <code>/</code> to see them. <code>/help</code>, <code>/clear</code> (reset context), <code>/init</code>, <code>/review</code>, and <code>/security-review</code> cover most days.</> },
                  { title: "Manage context", body: <>Use <code>/clear</code> when you switch tasks to keep responses focused, and let Claude commit work in logical chunks rather than one giant change.</> },
                  { title: "Set permission modes", body: <>Choose how much to auto-approve. Tighten it for unfamiliar repos; loosen it once you trust the flow. You can always require approval for shell commands.</> },
                  { title: "Connect your IDE", body: <>With the editor extension, Claude sees your open files and selection, and shows diffs inline — the same agent, closer to your code.</> },
                ]}
              />
              <RefTable
                caption="Commands & keys to know"
                columns={["Command / key", "Does", "Use it when"]}
                rows={[
                  { name: "claude", cells: ["Start a session", "Beginning work in a repo."] },
                  { name: "Shift+Tab", cells: ["Cycle plan / auto modes", "Switching between planning and doing."] },
                  { name: "/init", cells: ["Create CLAUDE.md", "Setting up a new project."] },
                  { name: "/clear", cells: ["Reset conversation", "Starting an unrelated task."] },
                  { name: "/review", cells: ["Review the diff", "Before you commit or open a PR."] },
                  { name: "Esc", cells: ["Interrupt", "Claude is heading the wrong way."] },
                ]}
              />
            </LevelPanel>,

            <LevelPanel key="p" heading="Customize the agent">
              <StepGuide
                accentBg="bg-cl-code"
                steps={[
                  { title: "Add Skills", body: <>A Skill is a folder with a <code>SKILL.md</code> (instructions + optional scripts) under <code>.claude/skills/</code>. Claude loads it on demand for specialized tasks — a deploy routine, a custom review, a migration. Share them across your team via the repo.</> },
                  { title: "Automate with hooks", body: <>Hooks in <code>.claude/settings.json</code> run your shell commands on events like <strong>before a tool runs</strong>, <strong>after an edit</strong>, or <strong>on stop</strong> — e.g. lint after every edit, or block edits to protected files.</> },
                  { title: "Connect MCP servers", body: <>Run <code>claude mcp add</code> to plug in external tools and data sources (GitHub, databases, browsers, your internal services). Claude can then call those tools mid-task.</> },
                  { title: "Delegate to subagents", body: <>Spin up <strong>subagents</strong> for parallel or focused work — a search agent to explore, a reviewer to check the diff. Define custom ones in <code>.claude/agents/</code>.</> },
                  { title: "Tune settings & permissions", body: <>In <code>.claude/settings.json</code>, set the model, allow/deny lists, and per-tool permissions so the agent runs exactly as your project requires.</> },
                ]}
              />
              <Callout variant="note" title="The four ways to extend Claude Code">
                <strong>Skills</strong> add know-how, <strong>hooks</strong> add automation,
                <strong> MCP</strong> adds tools, and <strong>subagents</strong> add parallelism.
                Most power-user setups combine all four — and live in your repo so the whole team benefits.
              </Callout>
            </LevelPanel>,
          ]}
        />
      </Section>

      <Section eyebrow="Keep it handy" title="Quick reference">
        <div className="space-y-5">
          <RefTable
            caption="Extension points"
            columns={["Mechanism", "Lives in", "Adds"]}
            rows={[
              { name: "CLAUDE.md", cells: ["Repo root", "Persistent project memory & conventions."] },
              { name: ".claude/skills/", cells: ["Repo or home dir", "Reusable, specialized task know-how."] },
              { name: "settings.json hooks", cells: [".claude/", "Shell commands that fire on events."] },
              { name: "MCP servers", cells: ["claude mcp add", "External tools & data sources."] },
              { name: ".claude/agents/", cells: ["Repo or home dir", "Custom subagents for focused work."] },
            ]}
          />
          <FeatureGrid
            columns={3}
            accentText="text-cl-code"
            accentBg="bg-cl-code-soft"
            features={[
              { icon: Map, title: "Plan first", body: "Shift+Tab into plan mode for anything unfamiliar." },
              { icon: Slash, title: "Learn the slashes", body: "Type / to discover commands in context." },
              { icon: ShieldCheck, title: "Mind permissions", body: "Auto-approve only what you're comfortable with." },
              { icon: Webhook, title: "Hook your checks", body: "Lint and test automatically on every change." },
              { icon: Server, title: "Add MCP tools", body: "Give the agent access to your systems." },
              { icon: Bot, title: "Use subagents", body: "Parallelize search, review, and big sweeps." },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Common questions" title="Good to know">
        <LearnAccordion
          items={[
            { q: "Do I have to use the terminal?", a: <>No. The CLI is the classic surface, but you can use the same agent in <strong>VS Code</strong> or <strong>JetBrains</strong>, in the <strong>desktop app</strong>, or in the cloud at <code>claude.ai/code</code> — pick whatever fits your flow.</> },
            { q: "Will it change files without asking?", a: <>You set the boundaries. <strong>Plan mode</strong> is fully read-only, and permission settings let you require approval for edits and shell commands. Review the diffs it shows before accepting.</> },
            { q: "What's the difference between a Skill and an MCP server?", a: <>A <strong>Skill</strong> teaches Claude <em>how</em> to do a task (instructions and scripts). An <strong>MCP server</strong> gives Claude new <em>tools</em> to call (like a database or browser). They complement each other.</> },
            { q: "What are hooks for?", a: <>Automation. Hooks run your own shell commands on lifecycle events — for example, run the linter after each edit, format on save, or block edits to sensitive files. They&apos;re defined in <code>.claude/settings.json</code>.</> },
            { q: "Can my whole team share a setup?", a: <>Yes — that&apos;s the point of keeping <code>CLAUDE.md</code>, <code>.claude/skills/</code>, <code>.claude/agents/</code>, and settings in the repo. Everyone gets the same memory, Skills, and guardrails.</> },
          ]}
        />
      </Section>

      <TrackPager current="code" />
    </>
  )
}
