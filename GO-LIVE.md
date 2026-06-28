# Promptu Go-Live Checklist 🦍 (the knuckle-dragger edition)

This turns on **sign-in** and **payments** so the Pro/Founding buttons actually
charge and unlock the gated lessons. Plan for ~45 minutes. You'll make free
accounts on 3 services (Railway, Google, Stripe), copy some keys, paste them
into Vercel, and run one command. No coding.

> 💡 Do the whole thing in Stripe **Test mode** first (fake money, test cards).
> Once it works end-to-end, swap in the **Live** keys. Notes at the end.

---

## Step 0 — Pick ONE web address and use it everywhere

To avoid sign-in headaches, use **`https://getpromptu.com`** for everything below
(no `www`). Optional but recommended: in **Vercel → Promptu project → Settings →
Domains**, make `getpromptu.com` the one that serves directly and set
`www.getpromptu.com` to **redirect** to it.

Everywhere this doc says a URL, use your real domain.

---

## Step 1 — Database (Railway) ⏱️ ~10 min

- [ ] Go to **railway.app** → sign in with GitHub.
- [ ] **New Project → Provision PostgreSQL.** Wait ~30s for it to spin up.
- [ ] Click the **Postgres** box → **Variables** (or **Connect**) tab.
- [ ] Copy the **public** connection string (looks like
      `postgresql://postgres:xxxx@xxxx.proxy.rlwy.net:12345/railway`).
      ⚠️ Use the **public/proxy** one, not the `.railway.internal` one — your
      app runs on Vercel, not inside Railway.
- [ ] Paste it somewhere safe. **This is your `DATABASE_URL`.**

## Step 2 — Create the tables ⏱️ ~5 min

On your computer, in the `vector-automation-systems` folder (PowerShell):

```powershell
git pull origin claude/claude-training-website-stc5co
npm install
$env:DATABASE_URL="paste-your-railway-url-here"
$env:DATABASE_SSL="require"
npm run db:push
```

- [ ] It should say it created the tables (`user`, `account`, `session`,
      `subscription`, `progress`, …). Type `y` if it asks to confirm.
- [ ] 🛟 If it errors about SSL, add `?sslmode=require` to the end of the URL and
      run the last line again.

## Step 3 — Google sign-in ⏱️ ~10 min

- [ ] Go to **console.cloud.google.com** → create a project (name it `Promptu`).
- [ ] **APIs & Services → OAuth consent screen** → choose **External** → fill in
      app name `Promptu`, your email → Save. Add your own email under **Test
      users**.
- [ ] **APIs & Services → Credentials → Create Credentials → OAuth client ID →
      Web application.**
- [ ] **Authorized JavaScript origins**, add:
      - `https://getpromptu.com`
      - `https://www.getpromptu.com`
- [ ] **Authorized redirect URIs**, add:
      - `https://getpromptu.com/api/auth/callback/google`
      - `https://www.getpromptu.com/api/auth/callback/google`
- [ ] Click **Create**. Copy the **Client ID** → this is `AUTH_GOOGLE_ID`.
      Copy the **Client secret** → this is `AUTH_GOOGLE_SECRET`.
- [ ] Make a sign-in secret. In the project folder run:
      ```powershell
      npx auth secret
      ```
      Copy the value it generates → this is `AUTH_SECRET`. (Or any random 40+
      character string.)

## Step 4 — Stripe (payments) ⏱️ ~10 min

- [ ] Go to **dashboard.stripe.com** → sign up / log in. Keep the **Test mode**
      toggle ON for now (top right).
- [ ] **Products → Add product** → name `Promptu Pro`. Add **two prices**:
      - `$9.00` / **Recurring / Monthly** → save → copy its price id
        (`price_…`) → this is `STRIPE_PRICE_PRO_MONTHLY`.
      - `$79.00` / **Recurring / Yearly** → save → copy its price id →
        `STRIPE_PRICE_PRO_ANNUAL`.
- [ ] **Add product** again → name `Promptu Founding` → price `$99.00` /
      **One time** → save → copy its price id → `STRIPE_PRICE_FOUNDING`.
- [ ] **Developers → API keys** → copy the **Secret key** (`sk_test_…`) →
      `STRIPE_SECRET_KEY`.
- [ ] **Developers → Webhooks → Add endpoint:**
      - Endpoint URL: `https://getpromptu.com/api/stripe/webhook`
      - **Select events** → add these three:
        - `checkout.session.completed`
        - `customer.subscription.updated`
        - `customer.subscription.deleted`
      - Click **Add endpoint** → copy the **Signing secret** (`whsec_…`) →
        `STRIPE_WEBHOOK_SECRET`.

## Step 5 — Paste everything into Vercel ⏱️ ~5 min

**Vercel → Promptu project → Settings → Environment Variables.** Add each of
these (Environment = **Production**), then save:

| Name | Value |
| --- | --- |
| `DATABASE_URL` | your Railway URL |
| `DATABASE_SSL` | `require` |
| `AUTH_SECRET` | from `npx auth secret` |
| `AUTH_GOOGLE_ID` | Google client id |
| `AUTH_GOOGLE_SECRET` | Google client secret |
| `AUTH_URL` | `https://getpromptu.com` |
| `STRIPE_SECRET_KEY` | `sk_test_…` |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` |
| `STRIPE_PRICE_PRO_MONTHLY` | `price_…` (monthly) |
| `STRIPE_PRICE_PRO_ANNUAL` | `price_…` (yearly) |
| `STRIPE_PRICE_FOUNDING` | `price_…` (founding) |
| `NEXT_PUBLIC_APP_URL` | `https://getpromptu.com` |

- [ ] After saving, go to **Deployments → … → Redeploy** so the new variables
      take effect.

## Step 6 — Test the whole flow ⏱️ ~5 min

- [ ] Open **getpromptu.com** → **sign in** with Google.
- [ ] Open any course → click the **Intermediate** tab → you should see the
      **"Unlock with Pro"** card.
- [ ] Click it → **Pricing** → **Go Pro** → on Stripe's checkout, pay with the
      **test card** `4242 4242 4242 4242`, any future date, any CVC/ZIP.
- [ ] You're sent back → reopen the course → **Intermediate & Proficient are now
      unlocked.** 🎉 That confirms accounts + payments + gating all work.

## Step 7 — Go from Test to Live (when you're ready for real money)

- [ ] In Stripe, flip the toggle to **Live mode** and **redo Step 4** (re-create
      the products/prices, grab the **live** `sk_live_…` secret key, and create a
      **live** webhook → new `whsec_…`).
- [ ] Update those 5 Stripe values in Vercel (Step 5) with the live ones →
      **Redeploy.**
- [ ] Real cards now work. (Test cards stop working in Live mode — that's
      expected.)

---

## Bonus — comp yourself a free Founding account (no payment)

Once you're on **Live** keys and don't want to pay yourself:

1. Sign in once at getpromptu.com (creates your user row).
2. In **Railway → Postgres → Query** tab, run this (it grants your email
   lifetime Founding access):

```sql
insert into subscription (id, "userId", plan, status)
values (
  gen_random_uuid()::text,
  (select id from "user" where email = 'armbrustertodd24@gmail.com'),
  'founding',
  'lifetime'
);
```

3. Refresh a course — everything's unlocked. (If it says the row already exists,
   change `insert into` to an `update subscription set plan='founding',
   status='lifetime' where "userId" = (select id from "user" where email='…')`.)

---

## If something breaks

- **Sign-in fails / "host" error** → add a Vercel env var `AUTH_TRUST_HOST` =
  `true`, redeploy.
- **Sign-in redirect mismatch** → double-check the redirect URIs in Google
  exactly match your domain (Step 3), including `https://`.
- **Paid but still locked** → Stripe → Developers → Webhooks → open your
  endpoint → check recent deliveries succeeded (200). If they failed, the
  `STRIPE_WEBHOOK_SECRET` is probably wrong/mismatched.
- **DB connection errors** → make sure `DATABASE_SSL=require` is set in Vercel
  and you used the **public** Railway URL.
