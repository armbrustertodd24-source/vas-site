/**
 * Database schema (Drizzle ORM, Postgres).
 *
 * Two groups of tables:
 *  1. Auth.js (NextAuth) tables — the standard shape expected by
 *     @auth/drizzle-adapter. We use OAuth only, so NO passwords are ever
 *     stored here.
 *  2. Application tables — subscriptions and course progress. The
 *     subscriptions table stores ONLY Stripe identifiers and status, never
 *     card data (Stripe holds all payment details).
 *
 * Access control note: this app enforces "a user can only see their own
 * rows" in the query layer — every application query must be scoped by
 * userId. See lib/db/index.ts and the route handlers.
 */
import {
  pgTable,
  text,
  timestamp,
  primaryKey,
  integer,
  uniqueIndex,
} from "drizzle-orm/pg-core"
import type { AdapterAccountType } from "next-auth/adapters"

/* ───────────────────────── Auth.js tables ───────────────────────── */

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ]
)

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })]
)

/* ─────────────────────── Application tables ──────────────────────── */

/**
 * One row per user. Holds only Stripe identifiers + the derived plan/status.
 * No card numbers, no CVC, nothing sensitive — Stripe is the source of truth
 * for payment details.
 */
export const subscriptions = pgTable(
  "subscription",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    stripeCustomerId: text("stripeCustomerId"),
    stripeSubscriptionId: text("stripeSubscriptionId"),
    // "free" | "pro" | "founding"
    plan: text("plan").notNull().default("free"),
    // Stripe status: active, trialing, past_due, canceled, incomplete, etc.
    // "lifetime" for the one-time Founding purchase.
    status: text("status").notNull().default("inactive"),
    currentPeriodEnd: timestamp("currentPeriodEnd", { mode: "date" }),
    createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("subscription_user_idx").on(t.userId),
    uniqueIndex("subscription_customer_idx").on(t.stripeCustomerId),
  ]
)

/** Per-user course progress. Always queried scoped to the owning user. */
export const progress = pgTable(
  "progress",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // matches TrackSlug in lib/learn.ts: chat | design | cowork | code | automation
    trackSlug: text("trackSlug").notNull(),
    // beginner | intermediate | proficient
    level: text("level").notNull(),
    completedAt: timestamp("completedAt", { mode: "date" }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("progress_user_track_level_idx").on(
      t.userId,
      t.trackSlug,
      t.level
    ),
  ]
)

export type User = typeof users.$inferSelect
export type Subscription = typeof subscriptions.$inferSelect
export type Progress = typeof progress.$inferSelect
