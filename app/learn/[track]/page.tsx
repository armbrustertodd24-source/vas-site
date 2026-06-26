import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { COURSES, getCourse } from "@/content/courses"
import CourseTemplate from "@/components/learn/CourseTemplate"

interface Props {
  params: Promise<{ track: string }>
}

export function generateStaticParams() {
  return COURSES.map((c) => ({ track: c.catalog.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { track } = await params
  const course = getCourse(track)
  if (!course) return { title: "Not found" }
  return { title: course.catalog.name, description: course.catalog.blurb }
}

export default async function TrackPage({ params }: Props) {
  const { track } = await params
  const course = getCourse(track)
  if (!course) notFound()
  return <CourseTemplate course={course} />
}
