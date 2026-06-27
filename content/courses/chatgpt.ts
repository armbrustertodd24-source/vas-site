import type { Course } from "./types"

const chatgpt: Course = {
  catalog: {
    slug: "chatgpt",
    name: "ChatGPT",
    short: "ChatGPT",
    tagline: "The everyday AI — far beyond image generation",
    blurb:
      "Most people use a sliver of what ChatGPT can do. Learn the whole toolkit — sharp conversations, file and data analysis, image generation, voice, web browsing, and your own custom GPTs.",
    accent: "gpt",
    icon: "Bot",
  },
  access:
    "chatgpt.com in any browser, or the iOS, Android, Mac, and Windows apps. A free account covers the basics; Plus and Pro unlock the most capable models and higher limits.",
  mockup: "chatgpt",
  overview: {
    eyebrow: "The big picture",
    title: "ChatGPT is a full toolkit, not just images",
    intro:
      "Image generation is the part everyone notices — but it's a fraction of what ChatGPT does. The same box analyzes your files, browses the web, writes and runs code, talks with you, and can be customized into purpose-built assistants.",
    features: [
      { icon: "MessageSquare", title: "Think & write", body: "Draft, summarize, brainstorm, translate, and reason through problems in plain language." },
      { icon: "Upload", title: "Analyze files & data", body: "Upload PDFs, spreadsheets, and images — ChatGPT reads them, answers questions, and charts the numbers." },
      { icon: "Image", title: "Generate images", body: "Create and edit images from a description — the part most people start (and stop) with." },
      { icon: "Globe", title: "Browse the web", body: "Pull in current information with links, so answers aren't stuck with old training data." },
      { icon: "Mic", title: "Talk with voice", body: "Have a real spoken conversation, hands-free, in the mobile app." },
      { icon: "Boxes", title: "Custom GPTs", body: "Build (or use) purpose-made versions of ChatGPT for a specific job — no coding required." },
    ],
  },
  roadmap: {
    eyebrow: "Your roadmap",
    title: "From first prompt to power user",
    intro:
      "Start with great conversations, then unlock files, images, voice, and your own custom GPTs.",
    levels: [
      {
        id: "beginner",
        label: "Beginner",
        blurb: "Have your first great conversation",
        heading: "Get a great first answer",
        steps: [
          { title: "Create a free account", body: "Go to [chatgpt.com](https://chatgpt.com) and sign up, or install the app for iOS, Android, Mac, or Windows. The free plan is plenty to learn the essentials." },
          { title: "Just start typing", body: "Type a question or task in the box and press **Enter**. ChatGPT replies; you reply back. The conversation is the product — keep going." },
          { title: "Give it context and a goal", body: "Instead of *“write a post,”* try *“write a friendly 120-word post announcing our new bakery, aimed at local families.”* Specifics get far better results." },
          { title: "Refine instead of restarting", body: "Reply with *“make it shorter,”* *“add a call to action,”* or *“more casual.”* It remembers the conversation and adjusts." },
          { title: "Start a new chat per topic", body: "Click **New chat** when the subject changes. Each chat keeps its own context, which keeps answers sharp." },
        ],
        callout: {
          variant: "tip",
          title: "Stop treating it like Google",
          body: "A search box wants keywords; ChatGPT wants context and back-and-forth. Your follow-up messages are where the best results come from.",
        },
      },
      {
        id: "intermediate",
        label: "Intermediate",
        blurb: "Files, images, voice & the web",
        heading: "Use the whole toolbox",
        steps: [
          { title: "Upload a file and ask about it", body: "Click the **+** (or paperclip) to attach a PDF, spreadsheet, or image, then ask — *“summarize this report”* or *“which month had the highest sales in this CSV?”*" },
          { title: "Generate and edit images", body: "Describe what you want — *“a minimalist logo of a fox reading a book.”* Then refine in words: *“make it navy and add a coffee cup.”*" },
          { title: "Turn on web browsing", body: "For anything recent — prices, news, a company's latest — ChatGPT can search the web and cite links you can open to verify." },
          { title: "Use voice mode", body: "In the mobile app, tap the **voice** icon and just talk. Great for brainstorming on the go or practicing a language." },
          { title: "Pick the right model", body: "The model picker swaps between faster models for quick tasks and more capable ones for hard reasoning. Reach for the stronger model when accuracy matters." },
        ],
        table: {
          caption: "What the + / tools menu unlocks",
          columns: ["Tool", "What it does", "Try it for"],
          rows: [
            { name: "Attach file", cells: ["Read PDFs, sheets, images", "“Summarize this contract.”"] },
            { name: "Create image", cells: ["Generate & edit images", "“A watercolor of my street.”"] },
            { name: "Web search", cells: ["Look things up live", "“Latest reviews of the X phone.”"] },
            { name: "Voice", cells: ["Spoken conversation", "Hands-free brainstorming."] },
            { name: "Data analysis", cells: ["Crunch & chart files", "“Chart revenue by quarter.”"] },
          ],
        },
      },
      {
        id: "proficient",
        label: "Proficient",
        blurb: "Memory, data analysis & custom GPTs",
        heading: "Make it yours",
        steps: [
          { title: "Set custom instructions", body: "In **Settings → Personalization → Custom instructions**, tell ChatGPT who you are and how you like answers. It applies to every new chat." },
          { title: "Turn on memory", body: "Let ChatGPT remember useful facts about you across chats — your role, preferences, ongoing projects — and review or clear what it stores any time." },
          { title: "Use and build custom GPTs", body: "Explore the **GPT Store** for purpose-built assistants, or create your own in minutes: give it instructions, knowledge files, and a name — no code required." },
          { title: "Analyze data seriously", body: "Upload a spreadsheet and ask for pivots, trends, and charts. ChatGPT writes and runs code behind the scenes to compute real answers, not guesses." },
          { title: "Chain steps in one prompt", body: "Ask for a sequence: *“Outline the article, then draft the intro, then suggest three titles.”* It works through them in order." },
        ],
        callout: {
          variant: "note",
          title: "What's a custom GPT?",
          body: "A custom GPT is ChatGPT pre-loaded with your instructions and reference files for a specific job — a brand-voice writer, a study tutor, a recipe helper. Build it once, reuse it, and share it with a link.",
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
        { name: "Attach", cells: ["+ / paperclip", "Ask about a file, sheet, or image."] },
        { name: "Create image", cells: ["+ → Create image", "Logos, art, mockups, edits."] },
        { name: "Web search", cells: ["Tools / automatic", "Recent or factual lookups — check the links."] },
        { name: "Voice", cells: ["Voice icon (app)", "Hands-free, spoken chats."] },
      ],
    },
    grid: [
      { icon: "Image", title: "More than images", body: "Files, data, voice, and the web all live in the same box." },
      { icon: "FileText", title: "Context beats keywords", body: "Say the goal, audience, and format up front." },
      { icon: "Search", title: "Verify web answers", body: "Open the cited links when accuracy matters." },
      { icon: "Boxes", title: "Custom GPTs save time", body: "Build an assistant once, reuse it forever." },
      { icon: "Settings", title: "Set it up once", body: "Custom instructions + memory tailor every chat." },
      { icon: "Keyboard", title: "Iterate, don't restart", body: "Refine with follow-ups instead of rewriting." },
    ],
  },
  faq: [
    { q: "Is ChatGPT free?", a: "Yes — a free account covers everyday chat, image generation, file uploads, and voice with capable models. Paid plans (Plus, Pro) add the most advanced models, higher limits, and earlier access to new features." },
    { q: "Is ChatGPT just for generating images?", a: "Not at all — that's just the part people notice most. The same box analyzes your documents and spreadsheets, browses the web, holds spoken conversations, writes and runs code, and can be customized into your own assistants." },
    { q: "How is this different from Claude?", a: "They're both excellent AI assistants with a lot of overlap. Learning one makes you better at the other — the prompting habits transfer. Many people use both and pick whichever they prefer for a given task." },
    { q: "Does ChatGPT remember me?", a: "Within a chat, it remembers everything said. Across chats, it uses your **custom instructions** and **memory** (both of which you control) — not your entire history automatically." },
    { q: "Can it access current information?", a: "Yes, when web browsing is on. Otherwise it answers from training data, which has a cutoff. Turn on search for anything time-sensitive and verify the cited links." },
  ],
}

export default chatgpt
