/**
 * Data access helpers.
 *
 * Every function here is scoped to a single userId — this is where the
 * "a user can only ever touch their own rows" rule is enforced in code.
 * Never write a query that returns rows across users to an end user.
 */
import { eq } from "drizzle-orm"
import { db } from "./index"
import { subscriptions, progress, type Subscription } from "./schema"

export async function getSubscriptionByUserId(
  userId: string
): Promise<Subscription | undefined> {
  const rows = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
    .limit(1)
  return rows[0]
}

export async function getSubscriptionByCustomerId(
  stripeCustomerId: string
): Promise<Subscription | undefined> {
  const rows = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.stripeCustomerId, stripeCustomerId))
    .limit(1)
  return rows[0]
}

/** Create the user's subscription row if missing; returns the existing/new row. */
export async function ensureSubscriptionRow(
  userId: string
): Promise<Subscription> {
  const existing = await getSubscriptionByUserId(userId)
  if (existing) return existing
  const [row] = await db.insert(subscriptions).values({ userId }).returning()
  return row
}

export async function setStripeCustomerId(
  userId: string,
  stripeCustomerId: string
): Promise<void> {
  await db
    .update(subscriptions)
    .set({ stripeCustomerId, updatedAt: new Date() })
    .where(eq(subscriptions.userId, userId))
}

/** Apply subscription state from a verified Stripe webhook event. */
export async function applySubscriptionState(
  userId: string,
  data: {
    plan: string
    status: string
    stripeSubscriptionId?: string | null
    currentPeriodEnd?: Date | null
  }
): Promise<void> {
  await db
    .update(subscriptions)
    .set({
      plan: data.plan,
      status: data.status,
      stripeSubscriptionId: data.stripeSubscriptionId ?? null,
      currentPeriodEnd: data.currentPeriodEnd ?? null,
      updatedAt: new Date(),
    })
    .where(eq(subscriptions.userId, userId))
}

/** Mark a level complete for a user (idempotent). */
export async function markLevelComplete(
  userId: string,
  trackSlug: string,
  level: string
): Promise<void> {
  await db
    .insert(progress)
    .values({ userId, trackSlug, level })
    .onConflictDoNothing()
}

export async function getProgressForUser(userId: string) {
  return db.select().from(progress).where(eq(progress.userId, userId))
}
