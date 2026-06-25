import { cn } from "@/lib/utils"

export interface RefRow {
  /* First cell rendered in monospace (a command, flag, shortcut, or param) */
  name: string
  /* Remaining cells, plain text or nodes */
  cells: React.ReactNode[]
}

export default function RefTable({
  columns,
  rows,
  caption,
}: {
  columns: string[]
  rows: RefRow[]
  caption?: string
}) {
  return (
    <div className="rounded-xl border border-cl-rim bg-cl-surface overflow-hidden">
      {caption && (
        <div className="px-4 md:px-5 py-3 border-b border-cl-rim bg-cl-surface-2/60">
          <p className="text-xs font-semibold uppercase tracking-wider text-cl-muted">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cl-rim">
              {columns.map((c, i) => (
                <th
                  key={c}
                  className={cn(
                    "text-left font-semibold text-cl-muted text-xs uppercase tracking-wider px-4 md:px-5 py-3",
                    i === 0 && "w-[34%]"
                  )}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-cl-rim last:border-0 hover:bg-cl-surface-2/40 transition-colors align-top"
              >
                <td className="px-4 md:px-5 py-3">
                  <code className="font-mono text-[0.82rem] text-cl-accent-dark bg-cl-accent-soft rounded px-1.5 py-0.5 whitespace-nowrap">
                    {row.name}
                  </code>
                </td>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className="px-4 md:px-5 py-3 text-cl-ink-soft leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
