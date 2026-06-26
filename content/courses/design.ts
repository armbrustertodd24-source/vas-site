import type { Course } from "./types"

const design: Course = {
  catalog: {
    slug: "design",
    name: "Claude Design",
    short: "Design",
    tagline: "Projects & Artifacts — Claude's creative canvas",
    blurb:
      "Build interactive apps, documents, diagrams, and visuals you can edit live. Organize work into Projects with shared knowledge, and shape Claude's voice with custom styles.",
    accent: "design",
    icon: "Sparkles",
  },
  access:
    "Inside Claude Chat on claude.ai or the desktop app. Artifacts appear automatically; Projects live in the left sidebar.",
  mockup: "design",
  overview: {
    eyebrow: "The big picture",
    title: "Claude's creative canvas",
    intro:
      "Artifacts turn Claude's output into something you can see, use, and edit live. Projects keep your work organized with shared knowledge and instructions. Together they're how you build and create with Claude.",
    features: [
      { icon: "Eye", title: "Live preview", body: "Substantial output opens in a side panel you can see rendered — not buried in chat scroll." },
      { icon: "Boxes", title: "Interactive apps", body: "Ask for a calculator, dashboard, or tool and get a working React app you can click and use." },
      { icon: "GitBranch", title: "Diagrams & visuals", body: "Generate flowcharts, charts, and SVG graphics, then refine them by talking." },
      { icon: "FileText", title: "Documents", body: "Formatted docs, slide outlines, and downloadable files — drafted and edited in place." },
      { icon: "Share2", title: "Publish & share", body: "Turn an artifact into a link anyone can open. No Claude account required to view." },
      { icon: "Folder", title: "Projects", body: "Bundle chats, files, and custom instructions into a reusable workspace per topic." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first artifact to interactive apps",
    intro: "Learn to create, then organize, then build genuinely useful interactive things.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Create & edit your first artifact",
        heading: "Make something you can see",
        steps: [
          { title: "Ask for something substantial", body: "In a normal chat, ask for content with structure — *“make a one-page resume,”* *“build a simple budget calculator,”* or *“create a flowchart of this process.”* Claude opens it as an **Artifact** on the right." },
          { title: "Watch it render", body: "Code runs, documents format, and diagrams draw in the preview panel. You see the finished thing, not just the source." },
          { title: "Iterate by talking", body: "Say *“make the header blue,”* *“add a column for dates,”* or *“shorten the summary.”* The artifact updates in place — no copy-paste." },
          { title: "Switch between preview and code", body: "Use the tabs at the top of the panel to flip between the rendered **Preview** and the underlying **Code** or markup." },
          { title: "Copy or download", body: "Use the panel controls to copy the content or download it as a file when you're happy." },
        ],
        callout: {
          variant: "tip",
          title: "If you don't see an artifact",
          body: "Just ask: *“put that in an artifact.”* Short answers stay in the chat; anything you'll want to reuse or edit belongs in an artifact.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Projects, styles & sharing",
        heading: "Organize and share",
        steps: [
          { title: "Create a Project", body: "Click **+ New project** in the sidebar and name it (e.g. *“Marketing 2026”*). Every chat inside inherits its settings." },
          { title: "Add project knowledge", body: "Upload reference files — a brand guide, product docs, past examples. Claude draws on them automatically, so you stop re-explaining context." },
          { title: "Write project instructions", body: "Set the role and rules once: *“You are our brand copywriter. Use a warm, concise tone and always follow the uploaded style guide.”*" },
          { title: "Pick a writing style", body: "Use **Styles** (Normal, Concise, Explanatory, Formal, Learning) to shape voice per conversation — or define your own custom style from a sample of your writing." },
          { title: "Publish an artifact", body: "Hit **Share / Publish** on an artifact to get a public link. Recipients can view — and, with an account, remix — your creation." },
        ],
        table: {
          caption: "Artifact types you can ask for",
          columns: ["Type", "Ask for…", "Good for"],
          rows: [
            { name: "Interactive app", cells: ["“a React tip calculator”", "Tools, forms, mini-apps you can click."] },
            { name: "Document", cells: ["“a formatted project brief”", "Reports, letters, outlines, specs."] },
            { name: "Diagram", cells: ["“a flowchart of onboarding”", "Processes, org charts, sequences."] },
            { name: "Visual / SVG", cells: ["“an icon set in SVG”", "Simple graphics and illustrations."] },
            { name: "Code", cells: ["“a Python script that…”", "Scripts and snippets you can run."] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Interactive apps & live dashboards",
        heading: "Build real, interactive things",
        steps: [
          { title: "Specify behavior, not just looks", body: "For interactive apps, describe state and interactions: *“a habit tracker where I add habits, check them off daily, and see a streak count.”* Claude wires up the logic." },
          { title: "Refine like a designer", body: "Direct layout, spacing, and color in plain language. Ask for variations — *“show me a card layout instead”* — and compare." },
          { title: "Build a curated Project knowledge base", body: "Load 10+ well-chosen reference files into a Project. On paid plans, retrieval expands how much context Claude can draw on, so large knowledge bases stay sharp." },
          { title: "Combine artifacts with connectors", body: "Pull real data in — *“build a dashboard from the numbers in this Google Sheet”* — so your artifact reflects live context, not placeholders." },
          { title: "Create reusable dashboards", body: "Set up tracker-style artifacts (KPIs, content calendars, pipelines) you reopen and update, and publish the ones your team should see." },
        ],
        callout: {
          variant: "note",
          title: "Projects vs. custom instructions",
          body: "Account-level **custom instructions** apply everywhere; a **Project**'s instructions and knowledge apply only inside that workspace. Use Projects to keep different jobs (and their context) cleanly separated.",
        },
      },
    ],
  },
  reference: {
    table: {
      caption: "Working with artifacts",
      columns: ["Control", "Where", "Does"],
      rows: [
        { name: "Preview / Code", cells: ["Top of panel", "Toggle between rendered output and source."] },
        { name: "Edit", cells: ["In the panel", "Tweak directly, then send back to Claude to refine."] },
        { name: "Publish", cells: ["Share button", "Create a public link others can open."] },
        { name: "Copy / Download", cells: ["Panel menu", "Grab the content or save it as a file."] },
        { name: "Versions", cells: ["Panel history", "Step back to an earlier take of the artifact."] },
      ],
    },
    grid: [
      { icon: "Layers", title: "One Project per job", body: "Separate knowledge and instructions keep results on-target." },
      { icon: "PenLine", title: "Custom styles", body: "Teach Claude your voice from a writing sample." },
      { icon: "RefreshCw", title: "Iterate in place", body: "Refine artifacts by conversation, never copy-paste." },
      { icon: "Code2", title: "Describe interactions", body: "Say what should happen on click, not just how it looks." },
      { icon: "Palette", title: "Ask for variations", body: "Compare layouts and styles side by side." },
      { icon: "Share2", title: "Publish to share", body: "Send a link; viewers don't need an account." },
    ],
  },
  faq: [
    { q: "What exactly is an Artifact?", a: "A standalone piece of content — an app, document, diagram, or graphic — that Claude renders in a side panel so you can see, edit, and reuse it. It stays put even as the chat keeps scrolling." },
    { q: "How are Projects different from regular chats?", a: "A **Project** is a workspace with its own uploaded knowledge and custom instructions. Every chat you start inside it automatically uses that context — ideal for recurring work on the same topic." },
    { q: "Can other people use what I make?", a: "Yes. **Publish** an artifact to get a shareable link. Anyone can view it, and people with a Claude account can remix it into their own version." },
    { q: "Do I need to know how to code?", a: "No. You describe what you want in plain language and Claude writes the code behind interactive artifacts. You can peek at the code, but you never have to write it." },
    { q: "What are custom styles?", a: "Reusable voice presets. Pick a built-in style (Concise, Formal, Learning…) or create your own from a sample of writing so Claude consistently matches your tone." },
  ],
}

export default design
