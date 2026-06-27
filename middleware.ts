import { NextResponse, type NextRequest } from "next/server"

/**
 * Host-based routing.
 *
 * This repo holds two sites: the Vector Automation Systems marketing site at
 * the root, and the Promptu training site under /learn. This branch/deployment
 * is the *Promptu* one, so its root should show Promptu everywhere — the
 * getpromptu.com domain, Vercel preview URLs, and local dev — by transparently
 * rewriting "/" to "/learn".
 *
 * SAFETY: the only hosts excluded are the VAS marketing domains, which keep
 * their normal root. So even if this code ever reaches the VAS deployment,
 * vectorautomationsystems.com is never redirected to Promptu. The matcher also
 * limits this to the "/" path only — no other route is touched.
 */
const VAS_HOSTS = new Set([
  "vectorautomationsystems.com",
  "www.vectorautomationsystems.com",
])

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase().split(":")[0]
  if (!VAS_HOSTS.has(host)) {
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
