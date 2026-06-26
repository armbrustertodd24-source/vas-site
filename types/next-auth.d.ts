import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  /** Add the user id to the session (set in the session callback in auth.ts). */
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}
