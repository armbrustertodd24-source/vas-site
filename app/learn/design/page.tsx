import type { Metadata } from "next"
import {
  Sparkles, Code2, FileText, GitBranch, Share2, Palette,
  Folder, RefreshCw, Eye, Layers, PenLine, Boxes,
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
import ArtifactMockup from "@/components/learn/mockups/ArtifactMockup"

const track = getTrack("design")

export const metadata: Metadata = {
  title: track.name,
  description: track.blurb,
}

export default function DesignTrack() {
  return (
    <>
      <TrackHero
        track={track}
        access="Inside Claude Chat on claude.ai or the desktop app. Artifacts appear automatically; Projects live in the left sidebar."
        mockup={<ArtifactMockup />}
      />

      <Section
        eyebrow="The big picture"
        title="Claude's creative canvas"
        intro="Artifacts turn Claude's output into something you can see, use, and edit live. Projects keep your work organized with shared knowledge and instructions. Together they're how you build and create with Claude."
      >
        <FeatureGrid
          accentText="text-cl-design"
          accentBg="bg-cl-design-soft"
          features={[
            { icon: Eye, title: "Live preview", body: "Substantial output opens in a side panel you can see rendered — not buried in chat scroll." },
            { icon: Boxes, title: "Interactive apps", body: "Ask for a calculator, dashboard, or tool and get a working React app you can click and use." },
            { icon: GitBranch, title: "Diagrams & visuals", body: "Generate flowcharts, charts, and SVG graphics, then refine them by talking." },
            { icon: FileText, title: "Documents", body: "Formatted docs, slide outlines, and downloadable files — drafted and edited in place." },
            { icon: Share2, title: "Publish & share", body: "Turn an artifact into a link anyone can open. No Claude account required to view." },
            { icon: Folder, title: "Projects", body: "Bundle chats, files, and custom instructions into a reusable workspace per topic." },
          ]}
        />
      </Section>

      <Section
        eyebrow="Your roadmap"
        title="From first artifact to interactive apps"
        intro="Learn to create, then organize, then build genuinely useful interactive things."
      >
        <LevelTabs
          activeBg="bg-cl-design"
          levels={[
            { id: "beginner", label: "Beginner", blurb: "Create & edit your first artifact" },
            { id: "intermediate", label: "Intermediate", blurb: "Projects, styles & sharing" },
            { id: "proficient", label: "Proficient", blurb: "Interactive apps & live dashboards" },
          ]}
          panels={[
            <LevelPanel key="b" heading="Make something you can see">
              <StepGuide
                accentBg="bg-cl-design"
                steps={[
                  { title: "Ask for something substantial", body: <>In a normal chat, ask for content with structure — <em>&quot;make a one-page resume,&quot;</em> <em>&quot;build a simple budget calculator,&quot;</em> or <em>&quot;create a flowchart of this process.&quot;</em> Claude opens it as an <strong>Artifact</strong> on the right.</> },
                  { title: "Watch it render", body: <>Code runs, documents format, and diagrams draw in the preview panel. You see the finished thing, not just the source.</> },
                  { title: "Iterate by talking", body: <>Say <em>&quot;make the header blue,&quot;</em> <em>&quot;add a column for dates,&quot;</em> or <em>&quot;shorten the summary.&quot;</em> The artifact updates in place — no copy-paste.</> },
                  { title: "Switch between preview and code", body: <>Use the tabs at the top of the panel to flip between the rendered <strong>Preview</strong> and the underlying <strong>Code</strong> or markup.</> },
                  { title: "Copy or download", body: <>Use the panel controls to copy the content or download it as a file when you&apos;re happy.</> },
                ]}

              />
              <Callout variant="tip" title="If you don't see an artifact">
                Just ask: <em>&quot;put that in an artifact.&quot;</em> Short answers stay in the chat;
                anything you&apos;ll want to reuse or edit belongs in an artifact.
              </Callout>
            </LevelPanel>,

            <LevelPanel key="i" heading="Organize and share">
              <StepGuide
                accentBg="bg-cl-design"
                steps={[
                  { title: "Create a Project", body: <>Click <strong>+ New project</strong> in the sidebar and name it (e.g. <em>&quot;Marketing 2026&quot;</em>). Every chat inside inherits its settings.</> },
                  { title: "Add project knowledge", body: <>Upload reference files — a brand guide, product docs, past examples. Claude draws on them automatically, so you stop re-explaining context.</> },
                  { title: "Write project instructions", body: <>Set the role and rules once: <em>&quot;You are our brand copywriter. Use a warm, concise tone and always follow the uploaded style guide.&quot;</em></> },
                  { title: "Pick a writing style", body: <>Use <strong>Styles</strong> (Normal, Concise, Explanatory, Formal, Learning) to shape voice per conversation — or define your own custom style from a sample of your writing.</> },
                  { title: "Publish an artifact", body: <>Hit <strong>Share / Publish</strong> on an artifact to get a public link. Recipients can view — and, with an account, remix — your creation.</> },
                ]}
              />
              <RefTable
                caption="Artifact types you can ask for"
                columns={["Type", "Ask for…", "Good for"]}
                rows={[
                  { name: "Interactive app", cells: ["“a React tip calculator”", "Tools, forms, mini-apps you can click."] },
                  { name: "Document", cells: ["“a formatted project brief”", "Reports, letters, outlines, specs."] },
                  { name: "Diagram", cells: ["“a flowchart of onboarding”", "Processes, org charts, sequences."] },
                  { name: "Visual / SVG", cells: ["“an icon set in SVG”", "Simple graphics and illustrations."] },
                  { name: "Code", cells: ["“a Python script that…”", "Scripts and snippets you can run."] },
                ]}
              />
            </LevelPanel>,

            <LevelPanel key="p" heading="Build real, interactive things">
              <StepGuide
                accentBg="bg-cl-design"
                steps={[
                  { title: "Specify behavior, not just looks", body: <>For interactive apps, describe state and interactions: <em>&quot;a habit tracker where I add habits, check them off daily, and see a streak count.&quot;</em> Claude wires up the logic.</> },
                  { title: "Refine like a designer", body: <>Direct layout, spacing, and color in plain language. Ask for variations — <em>&quot;show me a card layout instead&quot;</em> — and compare.</> },
                  { title: "Build a curated Project knowledge base", body: <>Load 10+ well-chosen reference files into a Project. On paid plans, retrieval expands how much context Claude can draw on, so large knowledge bases stay sharp.</> },
                  { title: "Combine artifacts with connectors", body: <>Pull real data in — <em>&quot;build a dashboard from the numbers in this Google Sheet&quot;</em> — so your artifact reflects live context, not placeholders.</> },
                  { title: "Create reusable dashboards", body: <>Set up tracker-style artifacts (KPIs, content calendars, pipelines) you reopen and update, and publish the ones your team should see.</> },
                ]}
              />
              <Callout variant="note" title="Projects vs. custom instructions">
                Account-level <strong>custom instructions</strong> apply everywhere; a
                <strong> Project</strong>&apos;s instructions and knowledge apply only inside that
                workspace. Use Projects to keep different jobs (and their context) cleanly separated.
              </Callout>
            </LevelPanel>,
          ]}
        />
      </Section>

      <Section eyebrow="Keep it handy" title="Quick reference">
        <div className="space-y-5">
          <RefTable
            caption="Working with artifacts"
            columns={["Control", "Where", "Does"]}
            rows={[
              { name: "Preview / Code", cells: ["Top of panel", "Toggle between rendered output and source."] },
              { name: "Edit", cells: ["In the panel", "Tweak directly, then send back to Claude to refine."] },
              { name: "Publish", cells: ["Share button", "Create a public link others can open."] },
              { name: "Copy / Download", cells: ["Panel menu", "Grab the content or save it as a file."] },
              { name: "Versions", cells: ["Panel history", "Step back to an earlier take of the artifact."] },
            ]}
          />
          <FeatureGrid
            columns={3}
            accentText="text-cl-design"
            accentBg="bg-cl-design-soft"
            features={[
              { icon: Layers, title: "One Project per job", body: "Separate knowledge and instructions keep results on-target." },
              { icon: PenLine, title: "Custom styles", body: "Teach Claude your voice from a writing sample." },
              { icon: RefreshCw, title: "Iterate in place", body: "Refine artifacts by conversation, never copy-paste." },
              { icon: Code2, title: "Describe interactions", body: "Say what should happen on click, not just how it looks." },
              { icon: Palette, title: "Ask for variations", body: "Compare layouts and styles side by side." },
              { icon: Share2, title: "Publish to share", body: "Send a link; viewers don't need an account." },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Common questions" title="Good to know">
        <LearnAccordion
          items={[
            { q: "What exactly is an Artifact?", a: <>A standalone piece of content — an app, document, diagram, or graphic — that Claude renders in a side panel so you can see, edit, and reuse it. It stays put even as the chat keeps scrolling.</> },
            { q: "How are Projects different from regular chats?", a: <>A <strong>Project</strong> is a workspace with its own uploaded knowledge and custom instructions. Every chat you start inside it automatically uses that context — ideal for recurring work on the same topic.</> },
            { q: "Can other people use what I make?", a: <>Yes. <strong>Publish</strong> an artifact to get a shareable link. Anyone can view it, and people with a Claude account can remix it into their own version.</> },
            { q: "Do I need to know how to code?", a: <>No. You describe what you want in plain language and Claude writes the code behind interactive artifacts. You can peek at the code, but you never have to write it.</> },
            { q: "What are custom styles?", a: <>Reusable voice presets. Pick a built-in style (Concise, Formal, Learning…) or create your own from a sample of writing so Claude consistently matches your tone.</> },
          ]}
        />
      </Section>

      <TrackPager current="design" />
    </>
  )
}
