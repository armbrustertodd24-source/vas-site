/**
 * Course content model.
 *
 * A whole training course is described by ONE plain-data object of this shape.
 * Text fields are strings with light inline markdown — `**bold**`, `*italic*`,
 * `` `code` ``, and `[label](https://url)` — rendered by <RichText>. No JSX,
 * no per-course page component. To add a course, copy an existing file in this
 * folder, fill it in, and register it in `index.ts`.
 *
 * Because the content is plain strings, the exact same data can later be moved
 * into the database and edited from an admin UI without changing this shape.
 */

/** A feature/cheat-sheet card. `icon` is a name from lib/icons.ts. */
export interface FeatureItem {
  icon: string
  title: string
  body: string
}

/** A reference table: a code-styled first column + free-text cells. */
export interface RefTableData {
  caption?: string
  columns: string[]
  rows: { name: string; cells: string[] }[]
}

/** An optional highlighted note shown under a level's steps. */
export interface CalloutData {
  variant: "tip" | "note" | "warning"
  title?: string
  body: string
}

/** One numbered step in a level's walkthrough. */
export interface StepData {
  title: string
  body: string
}

/** One level tab (Beginner / Intermediate / Proficient) and its panel. */
export interface LevelData {
  id: string
  label: string
  /** Short description shown on the tab. */
  blurb: string
  /** Heading above the steps in the panel. */
  heading: string
  steps: StepData[]
  /** Optional extra below the steps — a callout or a reference table. */
  callout?: CalloutData
  table?: RefTableData
}

/** Catalog metadata — drives nav, footer, landing cards, and the pager. */
export interface CourseCatalog {
  slug: string
  name: string
  /** Short label used in compact spots. */
  short: string
  tagline: string
  blurb: string
  /** Accent key from the ACCENTS palette in lib/learn.ts. */
  accent: string
  /** Icon name from lib/icons.ts. */
  icon: string
}

export interface Course {
  catalog: CourseCatalog
  /** The "Where do I find it?" line in the hero. */
  access: string
  /** Mockup key (lib mockup registry); falls back to a generic card. */
  mockup?: string
  overview: {
    eyebrow: string
    title: string
    intro: string
    features: FeatureItem[]
  }
  roadmap: {
    eyebrow: string
    title: string
    intro: string
    levels: LevelData[]
  }
  reference: {
    table: RefTableData
    grid: FeatureItem[]
  }
  faq: { q: string; a: string }[]
}
