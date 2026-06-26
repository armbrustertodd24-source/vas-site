/**
 * Database connection (Drizzle + postgres.js).
 *
 * Security:
 *  - TLS is enforced by default. Set DATABASE_SSL to change behaviour:
 *      (unset) | "require"   → TLS required (default; use for public endpoints
 *                              such as Railway's public proxy)
 *      "no-verify"          → TLS required but cert not verified
 *      "disable"            → no TLS (ONLY for a trusted private network, e.g.
 *                              app + DB both on Railway's private network)
 *  - DATABASE_URL is read from the environment and never hard-coded. Keep it
 *    in your platform's secret store, never in the repo.
 *
 * The client is constructed lazily-safe: building the module never opens a
 * connection (postgres.js connects on first query), so `next build` works
 * without a live database. A real query requires a real DATABASE_URL.
 */
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL

export const isDbConfigured = Boolean(connectionString)

function resolveSsl(): "require" | { rejectUnauthorized: boolean } | false {
  switch (process.env.DATABASE_SSL) {
    case "disable":
      return false
    case "no-verify":
      return { rejectUnauthorized: false }
    default:
      return "require"
  }
}

// A harmless placeholder keeps module import side-effect free during build
// when DATABASE_URL is absent. It will fail loudly only if an actual query
// runs without a configured database — which is the correct behaviour.
const client = postgres(
  connectionString ?? "postgres://invalid:invalid@127.0.0.1:5432/invalid",
  {
    ssl: resolveSsl(),
    max: Number(process.env.DATABASE_POOL_MAX ?? 10),
    idle_timeout: 20,
    // Safe with connection poolers (e.g. PgBouncer) if you add one later.
    prepare: false,
  }
)

export const db = drizzle(client, { schema })
export { schema }
