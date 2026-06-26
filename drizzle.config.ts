import type { Config } from "drizzle-kit"

/**
 * Drizzle Kit config — used for generating and applying migrations.
 *
 *   npx drizzle-kit generate   # create SQL migrations from schema.ts
 *   npx drizzle-kit migrate    # apply them to DATABASE_URL
 *
 * DATABASE_URL must be set in your environment (do not commit it).
 */
export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  strict: true,
  verbose: true,
} satisfies Config
