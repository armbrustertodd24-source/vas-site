/** The Promptu badge — garnet hexagon with the speech-bubble "P". */
export default function PromptuMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Promptu">
      <defs>
        <linearGradient id="promptuGarnet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a83648" />
          <stop offset="1" stopColor="#7c2532" />
        </linearGradient>
      </defs>
      <polygon
        points="60,7 105.9,33.5 105.9,86.5 60,113 14.1,86.5 14.1,33.5"
        fill="url(#promptuGarnet)"
        stroke="url(#promptuGarnet)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M48 90 L48 32 C74 32 84 40 84 50 C84 60 74 67 48 67"
        fill="none"
        stroke="#fffdf8"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 64 L54 79 L67 66 Z" fill="#fffdf8" />
      <circle cx="57" cy="48.5" r="2.6" fill="#fde7e0" />
      <circle cx="64" cy="48.5" r="2.6" fill="#fde7e0" />
      <circle cx="71" cy="48.5" r="2.6" fill="#fde7e0" />
    </svg>
  )
}
