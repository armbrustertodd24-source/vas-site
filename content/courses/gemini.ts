import type { Course } from "./types"

const gemini: Course = {
  catalog: {
    slug: "gemini",
    name: "Google Gemini",
    short: "Gemini",
    tagline: "Google's AI, woven into the apps you already use",
    blurb:
      "Gemini is Google's AI — in its own app and built into Gmail, Docs, Sheets, and Search. Learn to chat, analyze files and images, generate visuals, and put Gemini to work right inside your Google workflow.",
    accent: "gemini",
    icon: "Sparkle",
  },
  access:
    "gemini.google.com in any browser, the Android and iOS apps, and built into Google Workspace (Gmail, Docs, Sheets) and Search. A free Google account covers the basics.",
  mockup: "gemini",
  overview: {
    eyebrow: "The big picture",
    title: "Google's AI, right where you work",
    intro:
      "Gemini is Google's AI assistant — in its own app and built directly into Gmail, Docs, Sheets, and Search. If you live in Google's tools, it's the AI that's already there: ready to draft, summarize, analyze, and create.",
    features: [
      { icon: "MessageSquare", title: "Chat & create", body: "Ask questions, draft and rewrite, brainstorm, translate, and reason — like any top AI assistant." },
      { icon: "Mail", title: "Inside Gmail & Docs", body: "Draft replies, summarize threads, and write documents with Gemini built right into Workspace." },
      { icon: "Image", title: "See & make images", body: "Understand photos and screenshots you upload, and generate new images from a description." },
      { icon: "FileSearch", title: "Analyze your Drive", body: "Point Gemini at your Google Drive files so it answers from your own documents." },
      { icon: "Globe", title: "Grounded in Search", body: "Connected to Google Search, so answers can include fresh, cited information from the web." },
      { icon: "Bot", title: "Custom Gems", body: "Build reusable mini-assistants — 'Gems' — for tasks you repeat, like a writing coach or study tutor." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first chat to your Google workflow",
    intro:
      "Start in the Gemini app, then learn to use it across Gmail, Docs, and Drive — and build your own Gems.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Have your first chat with Gemini",
        heading: "Start chatting with Gemini",
        steps: [
          { title: "Open Gemini", body: "Go to [gemini.google.com](https://gemini.google.com) and sign in with your Google account, or get the app for Android and iOS. The free tier covers everything in this level." },
          { title: "Ask in plain language", body: "Type a question or task and press **Enter**. Try *“explain compound interest like I'm twelve”* or *“draft a thank-you note to a customer.”*" },
          { title: "Add a goal and an audience", body: "Specifics win. Instead of *“give me ideas,”* try *“give me five low-cost marketing ideas for a new coffee shop near a college.”*" },
          { title: "Refine with follow-ups", body: "Reply with *“make it shorter,”* *“more formal,”* or *“turn it into a bulleted list.”* Gemini keeps the context." },
          { title: "Check the sources", body: "When Gemini offers a *“double-check with Google”* option or shows citations, use them — it can verify its answer against Search." },
        ],
        callout: {
          variant: "tip",
          title: "Its edge is that it's connected to Google",
          body: "Gemini is wired into Google. Ask about things in your Gmail or Drive, or for current info from Search — it can pull them in when you allow it. That's the advantage to lean on.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Files, images & your Google apps",
        heading: "Use Gemini across Google",
        steps: [
          { title: "Pull in your own content with @", body: "Type **@** to reference your Google apps — *“@Gmail summarize my unread messages”* or *“@Drive find my budget spreadsheet.”* (Requires turning on Workspace connections.)" },
          { title: "Use Gemini inside Gmail & Docs", body: "Look for **Help me write** in Gmail and Docs to draft, rewrite, and shorten right where you're working — no copy-paste." },
          { title: "Analyze files and images", body: "Upload a PDF, spreadsheet, or photo and ask about it — *“summarize this lease”* or *“what's in this screenshot?”*" },
          { title: "Generate images", body: "Describe a visual — *“a flat-style icon of a rocket”* — and Gemini creates it; refine it in words." },
          { title: "Try Deep Research", body: "Ask Gemini to research a topic and it browses many sources and compiles a cited report — great for comparisons and buying decisions." },
        ],
        table: {
          caption: "Where you'll find Gemini",
          columns: ["Surface", "What it does", "Example"],
          rows: [
            { name: "Gemini app", cells: ["The full assistant", "“Plan a 3-day Lisbon trip.”"] },
            { name: "Gmail", cells: ["Draft & summarize", "“Help me write a reply.”"] },
            { name: "Docs / Sheets", cells: ["Write & organize", "“Summarize this document.”"] },
            { name: "Search", cells: ["AI overviews", "A summary atop your results."] },
            { name: "@ mentions", cells: ["Pull from your apps", "“@Drive find the Q3 report.”"] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Gems, Canvas & grounded answers",
        heading: "Make Gemini your own",
        steps: [
          { title: "Build a Gem", body: "A **Gem** is a custom version of Gemini with your own instructions — a writing coach, a study tutor, a brand-voice assistant. Create one once and reuse it." },
          { title: "Pick the right model", body: "Switch to the more capable **Pro** model for hard reasoning and long documents; the faster model is fine for quick tasks. (The top models may need Google's AI Premium plan.)" },
          { title: "Work in Canvas", body: "Use **Canvas** to draft and edit documents or code side-by-side with Gemini, iterating in place instead of in the chat thread." },
          { title: "Ground answers in your data", body: "Combine @ mentions and Drive access so Gemini answers from your real documents, not just general knowledge." },
          { title: "Chain multi-step requests", body: "Ask for a sequence: *“Research these three laptops, compare them in a table, then recommend one for video editing.”*" },
        ],
        callout: {
          variant: "note",
          title: "Gemini vs. the others",
          body: "Gemini's superpower is Google integration — Gmail, Docs, Drive, and Search. If your work lives in Google, that's where it shines brightest. The prompting skills you've learned carry straight over.",
        },
      },
    ],
  },
  reference: {
    table: {
      caption: "Everyday moves",
      columns: ["Action", "How", "When to use"],
      rows: [
        { name: "New chat", cells: ["New chat button", "Any time the topic changes."] },
        { name: "Attach", cells: ["+ / upload", "Ask about a file, sheet, or photo."] },
        { name: "@ mention", cells: ["Type @", "Pull from Gmail, Docs, or Drive."] },
        { name: "Create image", cells: ["Ask in words", "Icons, art, and mockups."] },
        { name: "Deep Research", cells: ["Choose the option", "Big comparisons and reports."] },
      ],
    },
    grid: [
      { icon: "Boxes", title: "Lives in your apps", body: "Gmail, Docs, Sheets, Slides, and Search — already there." },
      { icon: "Image", title: "Reads & makes images", body: "Understand uploads; generate new visuals." },
      { icon: "Globe", title: "Grounded in Search", body: "Ask for current info and check the citations." },
      { icon: "Bot", title: "Gems for repeat work", body: "Build a custom assistant once, reuse it." },
      { icon: "FileSearch", title: "Answers from your Drive", body: "Point it at your own documents with @." },
      { icon: "Keyboard", title: "Context still wins", body: "Goal + audience + format beats keywords." },
    ],
  },
  faq: [
    { q: "Is Gemini free?", a: "Yes — a free Google account gives you Gemini for everyday chat, image generation, and file uploads. Google's **AI Premium** plan (part of Google One) unlocks the most capable models, higher limits, and deeper Workspace features." },
    { q: "How is Gemini different from ChatGPT or Claude?", a: "All three are excellent assistants with a lot of overlap. Gemini's standout is **Google integration** — it's built into Gmail, Docs, Drive, and Search. If you live in Google's tools, it's the most convenient. Your prompting skills transfer across all of them." },
    { q: "Can Gemini see my emails and files?", a: "Only when you allow it. With Workspace connections on, you can **@-mention** Gmail, Docs, and Drive so Gemini works from your content — and you can turn those connections off any time." },
    { q: "What's a Gem?", a: "A custom version of Gemini pre-loaded with your instructions for a specific job — like ChatGPT's custom GPTs. Build one (a tutor, a coder, a brand writer) and reuse it whenever you need it." },
    { q: "Is it connected to the internet?", a: "Yes — Gemini is grounded in Google Search, so it can pull in current information and cite sources. Use the double-check option to verify important answers." },
  ],
}

export default gemini
