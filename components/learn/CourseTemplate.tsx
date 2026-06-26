import { notFound } from "next/navigation"
import type { Course } from "@/content/courses"
import { getTrack } from "@/lib/learn"
import { getIcon } from "@/lib/icons"
import TrackHero from "@/components/learn/TrackHero"
import TrackPager from "@/components/learn/TrackPager"
import { Section, LevelPanel } from "@/components/learn/Section"
import LevelTabs from "@/components/learn/LevelTabs"
import StepGuide from "@/components/learn/StepGuide"
import FeatureGrid, { type Feature } from "@/components/learn/FeatureGrid"
import RefTable, { type RefRow } from "@/components/learn/RefTable"
import Callout from "@/components/learn/Callout"
import LearnAccordion from "@/components/learn/LearnAccordion"
import RichText from "@/components/learn/RichText"
import type { FeatureItem, RefTableData } from "@/content/courses/types"

// Bespoke hero mockups, keyed by a course's `mockup` field.
import ChatMockup from "@/components/learn/mockups/ChatMockup"
import ArtifactMockup from "@/components/learn/mockups/ArtifactMockup"
import CoworkMockup from "@/components/learn/mockups/CoworkMockup"
import CodeMockup from "@/components/learn/mockups/CodeMockup"
import AutomationMockup from "@/components/learn/mockups/AutomationMockup"
import GenericMockup from "@/components/learn/mockups/GenericMockup"

const MOCKUPS: Record<string, React.ComponentType> = {
  chat: ChatMockup,
  design: ArtifactMockup,
  cowork: CoworkMockup,
  code: CodeMockup,
  automation: AutomationMockup,
}

function toFeatures(items: FeatureItem[]): Feature[] {
  return items.map((f) => ({ icon: getIcon(f.icon), title: f.title, body: f.body }))
}

function toRows(table: RefTableData): RefRow[] {
  return table.rows.map((r) => ({
    name: r.name,
    cells: r.cells.map((c, i) => <RichText key={i}>{c}</RichText>),
  }))
}

export default function CourseTemplate({ course }: { course: Course }) {
  const track = getTrack(course.catalog.slug)
  if (!track) notFound()

  const Mockup = course.mockup ? MOCKUPS[course.mockup] : undefined

  return (
    <>
      <TrackHero
        track={track}
        access={course.access}
        mockup={Mockup ? <Mockup /> : <GenericMockup track={track} />}
      />

      {/* What it can do */}
      <Section
        eyebrow={course.overview.eyebrow}
        title={course.overview.title}
        intro={course.overview.intro}
      >
        <FeatureGrid
          accentText={track.text}
          accentBg={track.softBg}
          features={toFeatures(course.overview.features)}
        />
      </Section>

      {/* Levels */}
      <Section
        eyebrow={course.roadmap.eyebrow}
        title={course.roadmap.title}
        intro={course.roadmap.intro}
      >
        <LevelTabs
          activeBg={track.bg}
          levels={course.roadmap.levels.map((l) => ({ id: l.id, label: l.label, blurb: l.blurb }))}
          panels={course.roadmap.levels.map((level) => (
            <LevelPanel key={level.id} heading={level.heading}>
              <StepGuide
                accentBg={track.bg}
                steps={level.steps.map((s) => ({
                  title: s.title,
                  body: <RichText>{s.body}</RichText>,
                }))}
              />
              {level.callout && (
                <Callout variant={level.callout.variant} title={level.callout.title}>
                  <RichText>{level.callout.body}</RichText>
                </Callout>
              )}
              {level.table && (
                <RefTable
                  caption={level.table.caption}
                  columns={level.table.columns}
                  rows={toRows(level.table)}
                />
              )}
            </LevelPanel>
          ))}
        />
      </Section>

      {/* Cheat sheet */}
      <Section eyebrow="Keep it handy" title="Quick reference">
        <div className="space-y-5">
          <RefTable
            caption={course.reference.table.caption}
            columns={course.reference.table.columns}
            rows={toRows(course.reference.table)}
          />
          <FeatureGrid
            columns={3}
            accentText={track.text}
            accentBg={track.softBg}
            features={toFeatures(course.reference.grid)}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Common questions" title="Good to know">
        <LearnAccordion
          items={course.faq.map((item) => ({
            q: item.q,
            a: <RichText>{item.a}</RichText>,
          }))}
        />
      </Section>

      <TrackPager current={course.catalog.slug} />
    </>
  )
}
