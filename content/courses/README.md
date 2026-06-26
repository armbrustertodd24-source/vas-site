# Courses — how to add a training

Every course on the site is **one data file** in this folder. There are no
per-course page components: a single template (`components/learn/CourseTemplate.tsx`)
renders any course, and the dynamic route `app/learn/[track]/page.tsx` serves it.

Because content is plain data, this is also the foundation for a future no-code
admin panel — the same fields can live in the database and be edited in a form.

## Add a course in 3 steps

1. **Copy an existing file** in this folder (e.g. `chat.ts`) to
   `your-slug.ts` and fill in the content. The shape is defined and documented
   in [`types.ts`](./types.ts). Text fields support light markdown:

   | Markdown        | Renders as |
   | --------------- | ---------- |
   | `**bold**`      | **bold**   |
   | `*italic*`      | *italic*   |
   | `` `code` ``    | `code`     |
   | `[label](url)`  | a link     |

2. **Register it** in [`index.ts`](./index.ts): import your course and add it to
   the `COURSES` array (array order = order on the site).

3. **Pick an accent + icon:**
   - `catalog.accent` must be a key in `ACCENTS` (lib/learn.ts). To **reuse** an
     existing color, just use `"chat" | "design" | "cowork" | "code" | "auto"`.
     For a **new** color, add an entry to `ACCENTS` *and* the matching
     `--color-cl-<key>` / `--color-cl-<key>-soft` tokens in `app/globals.css`.
   - `catalog.icon` and every `icon` field must be a name in `lib/icons.ts`.
     To use a new icon, add one import + one map entry there.

That's it. The nav, footer, landing-page cards, recommended path, prev/next
pager, route, and metadata all update automatically from the registry.

## Optional: a custom hero mockup

Each course shows an animated mockup in its hero. If you omit `mockup` (or use a
key with no registered component), a clean **generic** card is shown using the
course's icon and accent — so a new course looks complete with zero extra work.

To add a bespoke animation, create a component under
`components/learn/mockups/`, then register it in the `MOCKUPS` map in
`components/learn/CourseTemplate.tsx` and set `mockup: "your-key"` in the course.

## Fields at a glance

- `catalog` — slug, name, short, tagline, blurb, accent, icon (drives nav/cards)
- `access` — the "Where do I find it?" line in the hero
- `mockup` — optional hero mockup key
- `overview` — the "what it can do" feature grid
- `roadmap` — the three levels (Beginner / Intermediate / Proficient), each with
  steps and an optional callout or reference table
- `reference` — the cheat-sheet table + grid
- `faq` — the "Good to know" accordion
