/**
 * Auth.js (NextAuth v5) configuration.
 *
 * OAuth-only (Google): no passwords are ever collected or stored. User
 * records, sessions, and OAuth tokens live in YOUR Postgres via the Drizzle
 * adapter — nothing about identity leaves your database.
 *
 * Required env (see .env.example):
 *   AUTH_SECRET           — random 32+ byte secret (npx auth secret)
 *   AUTH_GOOGLE_ID        — Google OAuth client id
 *   AUTH_GOOGLE_SECRET    — Google OAuth client secret
 *   AUTH_URL (prod)       — e.g. https://yourdomain.com
 */
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/db"
import { users, accounts, sessions, verificationTokens } from "@/lib/db/schema"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
  session: { strategy: "database" },
  pages: {
    // Use the default Auth.js pages unless you build custom ones.
    // signIn: "/learn/sign-in",
  },
  callbacks: {
    // Expose the user id to the session so route handlers can scope queries.
    session({ session, user }) {
      if (session.user) session.user.id = user.id
      return session
    },
  },
})
