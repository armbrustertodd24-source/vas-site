# Secure foundation — setup guide

This adds **accounts, subscriptions, and payments** to the academy with a
security-first design. The short version of the guarantees:

| Sensitive data | Where it lives | If your DB is breached |
| --- | --- | --- |
| Card numbers / CVC | **Stripe only** (hosted Checkout) | Not exposed — never stored here |
| Passwords | **Nowhere** — Google OAuth only | Not exposed — none exist |
| Emails / names / progress | Your Railway Postgres (per-user scoped) | Only low-sensitivity profile data |

Stack: **Drizzle ORM** (Postgres) · **Auth.js / NextAuth v5** (Google OAuth) ·
**Stripe Checkout** + signed webhooks.

> Nothing here works until you provide the environment variables below. The app
> still builds and the marketing/learn pages still render without them — only the
> account/payment features need configuration.

---

## 1. Install & environment

```bash
npm install
cp .env.example .env.local   # then fill in the values
```

`.env.example` documents every variable. Never commit a real `.env` file
(`.gitignore` already blocks `.env*` except the example).

## 2. Database (Railway Postgres)

1. Put your Railway connection string in `DATABASE_URL`.
2. Choose a TLS mode with `DATABASE_SSL`:
   - `require` (default) — for Railway's **public** proxy endpoint.
   - `disable` — only if the app runs **on Railway** and reaches Postgres over
     the **private network** (`*.railway.internal`), which keeps the DB off the
     public internet entirely. This is the most secure option.
3. Create the tables from the schema:

```bash
npm run db:generate   # writes SQL migrations to ./drizzle
npm run db:migrate    # applies them to DATABASE_URL
# (or, for quick dev:)  npm run db:push
```

Tables created: `user`, `account`, `session`, `verificationToken`
(Auth.js), plus `subscription` and `progress` (app data).

## 3. Google OAuth (Auth.js)

1. Generate an auth secret: `npx auth secret` → put it in `AUTH_SECRET`.
2. In [Google Cloud Console](https://console.cloud.google.com) → APIs &
   Services → Credentials → **Create OAuth client ID** (Web application).
3. Authorized redirect URI:
   - dev: `http://localhost:3000/api/auth/callback/google`
   - prod: `https://YOURDOMAIN/api/auth/callback/google`
4. Put the client id/secret in `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`, and set
   `AUTH_URL` to your public URL in production.

No passwords are ever collected or stored — identity is fully delegated to
Google, and user/session records live in **your** Postgres.

## 4. Stripe

1. **Products & prices** (Stripe dashboard → Products). Create prices and copy
   their ids into env:
   - `STRIPE_PRICE_PRO_MONTHLY` — recurring monthly ($9)
   - `STRIPE_PRICE_PRO_ANNUAL` — recurring yearly ($79)
   - `STRIPE_PRICE_FOUNDING` — one-time ($99)
2. **Secret key** → `STRIPE_SECRET_KEY`.
3. **Webhook** (Developers → Webhooks → Add endpoint):
   - URL: `https://YOURDOMAIN/api/stripe/webhook`
   - Events: `checkout.session.completed`,
     `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy the signing secret → `STRIPE_WEBHOOK_SECRET`.
4. Set `NEXT_PUBLIC_APP_URL` to your public URL (used for Checkout
   success/cancel redirects).

Local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### How a purchase flows
`Pricing page → /api/checkout` (auth-gated) → Stripe-hosted Checkout (card entry
happens on Stripe) → `checkout.session.completed` webhook (signature-verified) →
we store the Stripe customer/subscription **ids** + status on the user's row.
The card never touches this server, keeping you in **PCI-DSS SAQ-A**.

## 5. Run

```bash
npm run dev      # http://localhost:3000/learn/pricing
```

The Pro/Founding buttons start real Checkout once the keys are set. Signed-out
users are sent through Google sign-in first.

---

## Security checklist before you go live

- [ ] `AUTH_SECRET` is a strong random value; secrets live in the host's vault,
      not the repo.
- [ ] Database connects over TLS (`DATABASE_SSL=require`) or a private network.
- [ ] App connects as a **least-privilege** DB role, not the Postgres superuser.
- [ ] Automated Postgres backups enabled in Railway.
- [ ] Stripe webhook secret set so subscription state can't be forged.
- [ ] 2FA enabled on your Stripe, Railway, Google Cloud, and GitHub accounts.
- [ ] A privacy policy + data-deletion path exists (GDPR/CCPA) before collecting
      real users' emails.

## Where access control lives

This project uses raw Postgres (not Supabase), so "a user can only see their own
data" is enforced **in code**: every application query is scoped by `userId` in
`lib/db/queries.ts`. Keep that discipline — never return cross-user rows to an
end user. For defense-in-depth you can additionally enable Postgres
Row-Level Security later.
