import React from "react"

/**
 * Tiny, safe inline-markdown renderer. Supports:
 *   **bold**   *italic*   `code`   [label](https://url)
 *
 * It parses to real React elements (<strong>/<em>/<code>/<a>) — no
 * dangerouslySetInnerHTML, so course content can never inject markup. The
 * surrounding components already style these tags (links, code, bold).
 */
function render(text: string, keyBase: string): React.ReactNode[] {
  // A fresh regex per call so nested recursion doesn't share lastIndex.
  const token =
    /`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g
  const nodes: React.ReactNode[] = []
  let last = 0
  let i = 0
  let m: RegExpExecArray | null

  while ((m = token.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const key = `${keyBase}-${i++}`

    if (m[1] !== undefined) {
      nodes.push(<code key={key}>{m[1]}</code>)
    } else if (m[2] !== undefined) {
      nodes.push(
        <a key={key} href={m[3]} target="_blank" rel="noreferrer">
          {render(m[2], key)}
        </a>
      )
    } else if (m[4] !== undefined) {
      nodes.push(<strong key={key}>{render(m[4], key)}</strong>)
    } else if (m[5] !== undefined) {
      nodes.push(<em key={key}>{render(m[5], key)}</em>)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

export default function RichText({ children }: { children: string }) {
  return <>{render(children, "rt")}</>
}
