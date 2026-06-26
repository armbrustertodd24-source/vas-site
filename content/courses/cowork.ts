import type { Course } from "./types"

const cowork: Course = {
  catalog: {
    slug: "cowork",
    name: "Claude Cowork",
    short: "Cowork",
    tagline: "Delegate real work across your tools",
    blurb:
      "Hand Claude multi-step jobs that span your apps — email, calendar, docs, design, code, and more. Connect tools, delegate tasks, and review the results.",
    accent: "cowork",
    icon: "Briefcase",
  },
  access:
    "The Claude desktop app, under the Cowork tab. Available on paid plans. You connect your own apps so Claude can act on real context.",
  mockup: "cowork",
  overview: {
    eyebrow: "The big picture",
    title: "Delegate the work, not just the question",
    intro:
      "Where Chat answers and Artifacts create, Cowork does. You hand Claude a multi-step job that spans your apps and files, it plans and executes, and you review the result — like working with a capable assistant.",
    features: [
      { icon: "ListTodo", title: "End-to-end tasks", body: "Describe an outcome and Claude breaks it into steps and works through them, not one reply at a time." },
      { icon: "Plug", title: "Across your apps", body: "Connect email, calendar, drive, docs, design, and dev tools so Claude works where your work lives." },
      { icon: "FileSearch", title: "Reads & writes files", body: "Open documents and spreadsheets, extract what matters, and produce new files as output." },
      { icon: "ShieldCheck", title: "You stay in control", body: "Review the plan and the output. Claude asks before taking sensitive or irreversible actions." },
      { icon: "CalendarClock", title: "Recurring automations", body: "Schedule jobs — a daily briefing, a weekly report — that run on a cadence you set." },
      { icon: "Puzzle", title: "Extensible with Skills", body: "Add Skills and connect MCP servers to teach Cowork new, specialized workflows." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first task to a team of automations",
    intro:
      "Start by connecting one app and delegating something small. Build up to multi-app workflows that run on a schedule.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Connect an app & delegate a task",
        heading: "Hand off your first task",
        steps: [
          { title: "Open Cowork in the desktop app", body: "Install the Claude desktop app, sign in with a paid plan, and switch to the **Cowork** tab. This is where Claude can read files and use connected tools." },
          { title: "Connect one app", body: "In settings, add a single **connector** to start — Gmail or Google Drive are good first picks. You authenticate with that service and grant access." },
          { title: "Describe a small, clear task", body: "Try something contained: *“Read my unread email from today and give me a bullet summary.”* Specific beats broad." },
          { title: "Approve what it wants to do", body: "Cowork shows the steps it plans to take and asks permission for sensitive actions. Read, then approve — you're the human in the loop." },
          { title: "Review and refine", body: "Check the result and reply with adjustments: *“group these by sender”* or *“flag anything urgent.”* It reworks the output." },
        ],
        callout: {
          variant: "tip",
          title: "Start where the payoff is obvious",
          body: "Pick a small chore you do often — triaging email, formatting notes, pulling numbers from a sheet. Quick wins teach you how Cowork “thinks” before you trust it with bigger jobs.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Multi-step, multi-app workflows",
        heading: "Chain steps across tools",
        steps: [
          { title: "Connect a few more apps", body: "Add the tools your task touches — for example Calendar, Drive, and Notion — so Claude can move information between them in one job." },
          { title: "Delegate a multi-step outcome", body: "Describe the whole flow: *“Read today's calendar and unread email, draft a morning briefing, and save it to Drive as a dated note.”* Cowork sequences the steps itself." },
          { title: "Use plan-first for bigger jobs", body: "For anything consequential, have Cowork lay out its plan before it acts. You approve the approach, then let it execute — fewer surprises." },
          { title: "Point it at specific files", body: "Reference the exact documents or folders it should use so it works from the right source instead of guessing." },
          { title: "Keep a human checkpoint", body: "Leave actions like *sending* email or *deleting* files set to require your approval. Cowork drafts; you press send." },
        ],
        table: {
          caption: "Common connectors and what they unlock",
          columns: ["Connector", "Claude can…", "Example task"],
          rows: [
            { name: "Gmail", cells: ["Read & draft email", "“Summarize this thread and draft a reply.”"] },
            { name: "Google Drive / Docs", cells: ["Open & create docs", "“Turn these notes into a formatted report.”"] },
            { name: "Calendar", cells: ["Read schedule", "“What does my week look like? Flag conflicts.”"] },
            { name: "Notion", cells: ["Read & update pages", "“Add each new lead to my CRM database.”"] },
            { name: "GitHub", cells: ["Read issues & code", "“Summarize open issues by priority.”"] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Skills, MCP & scheduled automations",
        heading: "Automate and extend",
        steps: [
          { title: "Add Skills for repeatable jobs", body: "A **Skill** packages instructions for a specialized task so you don't re-explain it. Save your “daily briefing” or “weekly report” recipe as a Skill and invoke it on demand." },
          { title: "Connect MCP servers", body: "Extend Cowork beyond the built-in connectors by adding **MCP servers** in settings — linking tools like design, automation, or your own internal systems." },
          { title: "Schedule recurring tasks", body: "Set a job to run on a cadence — every morning, every Monday. Note that desktop schedules run while the app is open and the machine is awake." },
          { title: "Build a small library of automations", body: "Stack a few reliable recurring tasks: a morning briefing, an end-of-day summary, a weekly metrics pull. Each one is time you get back." },
          { title: "Pair Cowork with Chat", body: "Think and plan in Chat; execute in Cowork. Use Chat to design the workflow, then hand the finished recipe to Cowork to run." },
        ],
        callout: {
          variant: "warning",
          title: "Trust, but verify — especially early",
          body: "Agentic tools take real actions in your accounts. Keep approvals on for anything that sends, shares, or deletes until a workflow has earned your confidence. Start read-only, then widen access deliberately.",
        },
      },
    ],
  },
  reference: {
    table: {
      caption: "Cowork concepts",
      columns: ["Concept", "What it is", "Why it matters"],
      rows: [
        { name: "Connector", cells: ["A linked app (Gmail, Drive…)", "Lets Claude act on your real data."] },
        { name: "Skill", cells: ["A saved task recipe", "Repeat specialized work without re-explaining."] },
        { name: "MCP server", cells: ["A pluggable tool source", "Extends Cowork to new systems and tools."] },
        { name: "Plan step", cells: ["The proposed approach", "Your chance to approve before action."] },
        { name: "Scheduled task", cells: ["A recurring job", "Briefings and reports that run themselves."] },
      ],
    },
    grid: [
      { icon: "Workflow", title: "Describe outcomes", body: "Say the end state; let Cowork plan the steps." },
      { icon: "ShieldCheck", title: "Gate risky actions", body: "Require approval for send, share, and delete." },
      { icon: "Mail", title: "Drafts, not sends", body: "Let Claude prepare; you make the final call." },
      { icon: "FolderGit2", title: "Point to sources", body: "Name the files and folders it should use." },
      { icon: "Repeat", title: "Schedule the routine", body: "Automate the chores you repeat every day." },
      { icon: "Bot", title: "Plan in Chat", body: "Design the workflow first, then hand it off." },
    ],
  },
  faq: [
    { q: "How is Cowork different from Claude Chat?", a: "Chat is a conversation — it answers and creates. **Cowork** is an agent — it takes a multi-step task and carries it out across your connected apps and files, checking in with you along the way." },
    { q: "Is it safe to connect my email and files?", a: "You grant access app by app and can revoke it any time. Keep approvals on for sensitive actions, and start with read-only tasks so you can see how Claude behaves before widening permissions." },
    { q: "Do I need to be technical?", a: "No. Cowork is designed for everyday knowledge work — email, docs, scheduling, reporting — and you direct it in plain language. (For code-specific work, that's the Claude Code track.)" },
    { q: "What are Skills here?", a: "Reusable instructions for a specialized task. Save your common workflows as Skills so you can trigger them instantly instead of describing the steps each time." },
    { q: "Do scheduled tasks run when my computer is off?", a: "Desktop-scheduled tasks generally run only while the app is open and the machine is awake; if it sleeps through a run, the task resumes on the next opportunity. Plan cadences accordingly." },
  ],
}

export default cowork
