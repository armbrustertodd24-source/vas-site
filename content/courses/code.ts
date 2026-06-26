import type { Course } from "./types"

const code: Course = {
  catalog: {
    slug: "code",
    name: "Claude Code",
    short: "Code",
    tagline: "An agent that lives in your codebase",
    blurb:
      "Use Claude as a coding agent in your terminal, IDE, or the cloud. Master plan mode, slash commands, Skills, hooks, MCP servers, and subagents.",
    accent: "code",
    icon: "Terminal",
  },
  access:
    "Your terminal (the CLI), VS Code & JetBrains extensions, the desktop app, or the cloud at claude.ai/code. Free with a Claude plan or API account.",
  mockup: "code",
  overview: {
    eyebrow: "The big picture",
    title: "An agent that lives in your codebase",
    intro:
      "Claude Code reads your repository, edits files, runs commands, and verifies its own work. You describe the change; it plans, executes, and iterates until it's done — right where you already work.",
    features: [
      { icon: "Terminal", title: "Understands the repo", body: "Searches and reads across files to grasp context before it changes anything." },
      { icon: "FileCog", title: "Edits & runs", body: "Makes multi-file edits, runs tests and builds, reads the output, and fixes what broke." },
      { icon: "Map", title: "Plans before acting", body: "Plan mode investigates read-only and proposes an approach for you to approve." },
      { icon: "GitCommitHorizontal", title: "Handles git", body: "Writes meaningful commits, manages branches, and can open pull requests." },
      { icon: "Puzzle", title: "Extensible", body: "Skills, hooks, MCP servers, and subagents let you shape exactly how it works." },
      { icon: "MonitorSmartphone", title: "Everywhere you code", body: "Terminal, IDE, desktop, and cloud — the same agent across surfaces." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first run to a customized agent",
    intro: "Install it, learn the loop, then layer on plan mode, Skills, hooks, MCP, and subagents.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Install & run your first task",
        heading: "Get it running",
        steps: [
          { title: "Install the CLI", body: "Use the install command from the official docs (for example `npm install -g @anthropic-ai/claude-code`, or the native installer). Prefer the IDE? Install the **Claude Code** extension for VS Code or JetBrains." },
          { title: "Open a project and launch", body: "From your repo, run `claude` to start an interactive session. On first run you'll sign in through the browser." },
          { title: "Describe a task in plain English", body: "Try something small: *“add input validation to the signup form and write a test for it.”* Claude reads the relevant files, makes edits, and runs the test." },
          { title: "Review every change", body: "Claude shows diffs as it goes. Read them. Approve, or steer with feedback — *“use the existing validation helper instead.”*" },
          { title: "Create a CLAUDE.md", body: "Run `/init` to generate a **CLAUDE.md** — project memory where you record build commands, conventions, and gotchas Claude should always follow." },
        ],
        callout: {
          variant: "tip",
          title: "CLAUDE.md is your highest-leverage file",
          body: "A few lines about how your project builds, tests, and what patterns to follow makes every future task sharper. Treat it as living documentation for your agent.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Plan mode, commands & memory",
        heading: "Drive it deliberately",
        steps: [
          { title: "Use plan mode for anything non-trivial", body: "Press `Shift+Tab` to cycle into **plan mode**. Claude explores read-only and proposes a plan — you approve before a single file changes. Great for unfamiliar code." },
          { title: "Learn the core slash commands", body: "Type `/` to see them. `/help`, `/clear` (reset context), `/init`, `/review`, and `/security-review` cover most days." },
          { title: "Manage context", body: "Use `/clear` when you switch tasks to keep responses focused, and let Claude commit work in logical chunks rather than one giant change." },
          { title: "Set permission modes", body: "Choose how much to auto-approve. Tighten it for unfamiliar repos; loosen it once you trust the flow. You can always require approval for shell commands." },
          { title: "Connect your IDE", body: "With the editor extension, Claude sees your open files and selection, and shows diffs inline — the same agent, closer to your code." },
        ],
        table: {
          caption: "Commands & keys to know",
          columns: ["Command / key", "Does", "Use it when"],
          rows: [
            { name: "claude", cells: ["Start a session", "Beginning work in a repo."] },
            { name: "Shift+Tab", cells: ["Cycle plan / auto modes", "Switching between planning and doing."] },
            { name: "/init", cells: ["Create CLAUDE.md", "Setting up a new project."] },
            { name: "/clear", cells: ["Reset conversation", "Starting an unrelated task."] },
            { name: "/review", cells: ["Review the diff", "Before you commit or open a PR."] },
            { name: "Esc", cells: ["Interrupt", "Claude is heading the wrong way."] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Skills, hooks, MCP & subagents",
        heading: "Customize the agent",
        steps: [
          { title: "Add Skills", body: "A Skill is a folder with a `SKILL.md` (instructions + optional scripts) under `.claude/skills/`. Claude loads it on demand for specialized tasks — a deploy routine, a custom review, a migration. Share them across your team via the repo." },
          { title: "Automate with hooks", body: "Hooks in `.claude/settings.json` run your shell commands on events like **before a tool runs**, **after an edit**, or **on stop** — e.g. lint after every edit, or block edits to protected files." },
          { title: "Connect MCP servers", body: "Run `claude mcp add` to plug in external tools and data sources (GitHub, databases, browsers, your internal services). Claude can then call those tools mid-task." },
          { title: "Delegate to subagents", body: "Spin up **subagents** for parallel or focused work — a search agent to explore, a reviewer to check the diff. Define custom ones in `.claude/agents/`." },
          { title: "Tune settings & permissions", body: "In `.claude/settings.json`, set the model, allow/deny lists, and per-tool permissions so the agent runs exactly as your project requires." },
        ],
        callout: {
          variant: "note",
          title: "The four ways to extend Claude Code",
          body: "**Skills** add know-how, **hooks** add automation, **MCP** adds tools, and **subagents** add parallelism. Most power-user setups combine all four — and live in your repo so the whole team benefits.",
        },
      },
    ],
  },
  reference: {
    table: {
      caption: "Extension points",
      columns: ["Mechanism", "Lives in", "Adds"],
      rows: [
        { name: "CLAUDE.md", cells: ["Repo root", "Persistent project memory & conventions."] },
        { name: ".claude/skills/", cells: ["Repo or home dir", "Reusable, specialized task know-how."] },
        { name: "settings.json hooks", cells: [".claude/", "Shell commands that fire on events."] },
        { name: "MCP servers", cells: ["claude mcp add", "External tools & data sources."] },
        { name: ".claude/agents/", cells: ["Repo or home dir", "Custom subagents for focused work."] },
      ],
    },
    grid: [
      { icon: "Map", title: "Plan first", body: "Shift+Tab into plan mode for anything unfamiliar." },
      { icon: "Slash", title: "Learn the slashes", body: "Type / to discover commands in context." },
      { icon: "ShieldCheck", title: "Mind permissions", body: "Auto-approve only what you're comfortable with." },
      { icon: "Webhook", title: "Hook your checks", body: "Lint and test automatically on every change." },
      { icon: "Server", title: "Add MCP tools", body: "Give the agent access to your systems." },
      { icon: "Bot", title: "Use subagents", body: "Parallelize search, review, and big sweeps." },
    ],
  },
  faq: [
    { q: "Do I have to use the terminal?", a: "No. The CLI is the classic surface, but you can use the same agent in **VS Code** or **JetBrains**, in the **desktop app**, or in the cloud at `claude.ai/code` — pick whatever fits your flow." },
    { q: "Will it change files without asking?", a: "You set the boundaries. **Plan mode** is fully read-only, and permission settings let you require approval for edits and shell commands. Review the diffs it shows before accepting." },
    { q: "What's the difference between a Skill and an MCP server?", a: "A **Skill** teaches Claude *how* to do a task (instructions and scripts). An **MCP server** gives Claude new *tools* to call (like a database or browser). They complement each other." },
    { q: "What are hooks for?", a: "Automation. Hooks run your own shell commands on lifecycle events — for example, run the linter after each edit, format on save, or block edits to sensitive files. They're defined in `.claude/settings.json`." },
    { q: "Can my whole team share a setup?", a: "Yes — that's the point of keeping `CLAUDE.md`, `.claude/skills/`, `.claude/agents/`, and settings in the repo. Everyone gets the same memory, Skills, and guardrails." },
  ],
}

export default code
