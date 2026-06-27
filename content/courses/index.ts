/**
 * Course registry. The order here is the order courses appear everywhere
 * (nav, footer, landing cards, recommended path, prev/next pager).
 *
 * To add a course: create a new file in this folder (copy an existing one),
 * then import and add it to the COURSES array below. Everything else —
 * routing, nav, the catalog — updates automatically.
 */
import type { Course } from "./types"
import chat from "./chat"
import design from "./design"
import cowork from "./cowork"
import code from "./code"
import automation from "./automation"
import chatgpt from "./chatgpt"

export const COURSES: Course[] = [chat, design, cowork, code, automation, chatgpt]

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.catalog.slug === slug)
}

export type { Course } from "./types"
