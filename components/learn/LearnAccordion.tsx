"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

export interface QA {
  q: string
  a: React.ReactNode
}

export default function LearnAccordion({ items }: { items: QA[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="rounded-2xl border border-cl-rim bg-cl-surface divide-y divide-cl-rim overflow-hidden">
      {items.map((item, i) => (
        <AccordionPrimitive.Item key={i} value={`item-${i}`}>
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left font-display font-600 text-cl-ink hover:text-cl-accent transition-colors">
              {item.q}
              <Plus className="w-4 h-4 flex-shrink-0 text-cl-muted transition-transform duration-200 group-data-[state=open]:rotate-45 group-hover:text-cl-accent" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:cl-accordion-open data-[state=closed]:cl-accordion-closed">
            <div className="px-5 pb-5 text-cl-muted text-sm leading-relaxed [&_strong]:text-cl-ink [&_strong]:font-semibold [&_code]:bg-cl-surface-2 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-cl-ink [&_code]:text-[0.85em] [&_code]:font-mono">
              {item.a}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
