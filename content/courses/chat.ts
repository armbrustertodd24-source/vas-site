import type { Course } from "./types"

const chat: Course = {
  catalog: {
    slug: "chat",
    name: "Claude Chat",
    short: "Chat",
    tagline: "The conversation that starts it all",
    blurb:
      "Talk to Claude on the web, desktop, or your phone. Learn to prompt well, attach files, search the web, and turn Claude into your everyday thinking partner.",
    accent: "chat",
    icon: "MessageSquare",
  },
  access:
    "claude.ai in any browser, the desktop app (Mac / Windows / Linux), or the iOS & Android apps. A free account is enough to start.",
  mockup: "chat",
  overview: {
    eyebrow: "The big picture",
    title: "What Claude Chat can do",
    intro:
      "Claude Chat is a conversation with a capable AI assistant. You type, it responds, and you refine together. Here's the surface area you'll learn to use.",
    features: [
      { icon: "MessageSquare", title: "Think & write together", body: "Draft, summarize, brainstorm, explain, translate, and reason through problems in plain language." },
      { icon: "Upload", title: "Read your files", body: "Attach PDFs, docs, spreadsheets, and images. Claude reads them and answers questions about the content." },
      { icon: "Globe", title: "Search the web", body: "Turn on web search and Claude pulls in current information with links you can verify." },
      { icon: "Mic", title: "Talk out loud", body: "Use voice mode on mobile and desktop to have a spoken back-and-forth, hands-free." },
      { icon: "Settings", title: "Shape its behavior", body: "Set custom instructions once so every chat follows your tone, role, and preferences." },
      { icon: "Plug", title: "Connect your tools", body: "Link apps like Gmail, Drive, and Notion so Claude can use your own context." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first message to power user",
    intro:
      "Work through the three levels in order, or jump to where you are. Each one builds on the last.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Have your first great conversation",
        heading: "Get talking",
        steps: [
          { title: "Create your account", body: "Go to [claude.ai](https://claude.ai) and sign up — the free plan is enough to learn everything in this level. Install the desktop or mobile app if you want Claude on hand." },
          { title: "Start a new chat", body: "Click **New chat** and type a question or task in the box at the bottom. Press `Enter` to send. That's the whole loop: you write, Claude replies." },
          { title: "Be specific about what you want", body: "Say the goal, the audience, and the format. Instead of *“write about dogs,”* try *“write a friendly 100-word intro about adopting rescue dogs, for a pet shelter newsletter.”*" },
          { title: "Refine with follow-ups", body: "You don't have to get it right in one shot. Reply with *“make it shorter,”* *“more formal,”* or *“add an example.”* Claude remembers the conversation so far." },
          { title: "Start fresh when the topic changes", body: "Begin a **new chat** for a new subject. Each conversation keeps its own context, which keeps answers focused." },
        ],
        callout: {
          variant: "tip",
          title: "The one habit that matters most",
          body: "Treat it like a conversation, not a search engine. The magic is in the back-and-forth — your second and third messages are where great results come from.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Bring in files, search & context",
        heading: "Add context and reach",
        steps: [
          { title: "Attach files and images", body: "Click the **paperclip** (or drag a file in) to add a PDF, spreadsheet, screenshot, or photo, then ask about it — *“summarize this contract”* or *“what's wrong with this error screenshot?”*" },
          { title: "Turn on web search", body: "Enable **web search** from the tools menu in the composer for anything time-sensitive. Claude cites its sources — click through to verify before you rely on them." },
          { title: "Try voice mode", body: "On mobile or desktop, tap the **voice** icon to speak instead of type. Great for thinking out loud or when you're away from the keyboard." },
          { title: "Set custom instructions", body: "In **Settings → Profile**, add instructions Claude should always follow — your name, role, preferred tone, and how concise you like answers. It applies to every new chat." },
          { title: "Group related work in a Project", body: "Create a **Project** to keep chats and reference files together with their own instructions. (You'll go deep on Projects in the Claude Design track.)" },
        ],
        table: {
          caption: "Settings worth knowing",
          columns: ["Setting", "Where", "What it does"],
          rows: [
            { name: "Model", cells: ["Model picker in chat", "Switch between faster (Haiku), balanced (Sonnet), and most-capable (Opus) models."] },
            { name: "Custom instructions", cells: ["Settings → Profile", "Persistent guidance applied to every conversation."] },
            { name: "Web search", cells: ["Tools menu in composer", "Let Claude look things up and cite live sources."] },
            { name: "Connectors", cells: ["Settings → Connectors", "Link apps like Gmail, Drive, and Notion for personal context."] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Make Claude work the way you do",
        heading: "Make it yours",
        steps: [
          { title: "Connect your apps", body: "In **Settings → Connectors**, link tools like Gmail, Google Drive, Calendar, or Notion. Now you can ask *“find the budget doc in my Drive and pull the Q3 totals.”*" },
          { title: "Add Skills for repeatable expertise", body: "Skills package instructions and know-how Claude loads when relevant. Browse and enable **Skills** from the tools/capabilities menu so Claude handles specialized tasks consistently — without you re-explaining every time." },
          { title: "Build multi-step prompts", body: "Chain instructions in one message: *“First outline the article, then draft section one, then suggest three headlines.”* Claude follows the sequence." },
          { title: "Use the right model for the job", body: "Reach for the most capable model on hard reasoning, and a faster one for quick drafts and simple lookups to get snappier replies." },
          { title: "Develop a personal prompt library", body: "Keep your best prompts somewhere reusable. Combine custom instructions, a Project, and connectors so a single sentence kicks off a rich, context-aware result." },
        ],
        callout: {
          variant: "note",
          title: "What's a connector, really?",
          body: "Connectors (built on the open **Model Context Protocol**) give Claude secure, permissioned access to an external app's data. You stay in control — you approve each connection and can revoke it any time.",
        },
      },
    ],
  },
  reference: {
    table: {
      caption: "Everyday moves",
      columns: ["Action", "How", "When to use"],
      rows: [
        { name: "New chat", cells: ["New chat button", "Any time the topic changes — keeps context clean."] },
        { name: "Attach", cells: ["Paperclip / drag-and-drop", "Ask questions about a file, image, or screenshot."] },
        { name: "Web search", cells: ["Tools menu", "Current events, prices, recent docs — verify the citations."] },
        { name: "Voice", cells: ["Voice icon (mobile/desktop)", "Hands-free, spoken conversations."] },
        { name: "Skills", cells: ["Tools / capabilities menu", "Give Claude reusable, specialized know-how."] },
      ],
    },
    grid: [
      { icon: "Search", title: "Verify web results", body: "Citations are links — open them when accuracy matters." },
      { icon: "FileText", title: "One topic per chat", body: "Cleaner context means sharper, more relevant answers." },
      { icon: "Keyboard", title: "Iterate, don't restart", body: "Refine with follow-ups instead of rewriting your prompt." },
      { icon: "Folder", title: "Projects for recurring work", body: "Reuse instructions and files across many conversations." },
      { icon: "Puzzle", title: "Skills for expertise", body: "Package specialized workflows once, reuse them forever." },
      { icon: "Sparkles", title: "Custom instructions", body: "Set your tone and preferences a single time." },
    ],
  },
  faq: [
    { q: "Do I need a paid plan?", a: "No. The free plan covers everything in the Beginner and most of the Intermediate level. Paid plans (Pro, Max) add higher usage limits, priority access, and earlier access to new features and the most capable models." },
    { q: "Does Claude remember me between chats?", a: "Within a single conversation, yes — it remembers everything said so far. Across chats, it uses your **custom instructions** and any **Project** knowledge rather than recalling past conversations automatically." },
    { q: "Can Claude access the internet?", a: "Only when you enable **web search**. Otherwise it answers from what it already knows. With search on, it looks things up and shows links you can check." },
    { q: "What's the difference between the models?", a: "Faster models (Haiku) are great for quick, simple tasks; balanced models (Sonnet) suit most work; the most capable models (Opus) shine on hard reasoning. Switch with the model picker." },
    { q: "Is it safe to upload my documents?", a: "You control what you share. Review your plan's data settings, avoid pasting secrets you wouldn't want stored, and use connectors (which you approve and can revoke) for ongoing access." },
  ],
}

export default chat
