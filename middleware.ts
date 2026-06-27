import { NextResponse, type NextRequest } from "next/server"

/**
 * Host-based routing.
 *
 * Promptu (the training site) lives at /learn inside this app, while the
 * Vector Automation Systems marketing site lives at the root. When a visitor
 * hits the bare getpromptu.com domain we transparently show the Promptu home
 * (rewrite "/" -> "/learn") so the brand owns its own root.
 *
 * SAFETY: this only acts when the request host is getpromptu.com (or www).
 * For every other host — vectorautomationsystems.com, localhost, Vercel
 * preview URLs — it does nothing, so the VAS site is never affected, no matter
 * where it's deployed from. The matcher also restricts this to the "/" path
 * only, so no other route is touched.
 */
const PROMPTU_HOSTS = new Set(["getpromptu.com", "www.getpromptu.com"])

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase()
  if (PROMPTU_HOSTS.has(host)) {
    const url = req.nextUrl.clone()
    url.pathname = "/learn"
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  // Only ever run on the root path.
  matcher: ["/"],
}
