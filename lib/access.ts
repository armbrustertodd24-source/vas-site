import { auth } from "@/auth"
import { getSubscriptionByUserId } from "@/lib/db/queries"

const PAID_PLANS = new Set(["pro", "founding"])
const ACTIVE_STATUSES = new Set(["active", "trialing", "lifetime"])

/**
 * True if the signed-in user has an active paid plan (Pro or Founding).
 *
 * Returns false on any error (no session, auth/DB not configured, etc.) so the
 * site degrades safely to "locked" rather than crashing — and so the build,
 * which has no secrets, never throws here.
 */
export async function hasPaidAccess(): Promise<boolean> {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return false
    const sub = await getSubscriptionByUserId(userId)
    return !!sub && PAID_PLANS.has(sub.plan) && ACTIVE_STATUSES.has(sub.status)
  } catch {
    return false
  }
}
