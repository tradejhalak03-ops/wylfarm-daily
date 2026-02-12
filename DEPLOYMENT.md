# Deploy WylFarm Daily

Your site is ready to deploy. The build succeeds and your repo is at `github.com/tradejhalak03-ops/wylfarm-daily`.

## Option 1: Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Import `tradejhalak03-ops/wylfarm-daily`.
4. Leave defaults (Vercel detects Vite).
5. Click **Deploy**.

Your site will be live at `https://wylfarm-daily.vercel.app` (or a custom URL). You can set a custom domain in Project Settings.

---

## Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **Add new site → Import an existing project**.
3. Choose your GitHub repo `wylfarm-daily`.
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

---

## Option 3: GitHub Pages

1. In your repo, go to **Settings → Pages**.
2. **Source:** GitHub Actions.
3. Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deploy
        uses: actions/deploy-pages@v4
```

4. Add `base: '/wylfarm-daily/'` to `vite.config.ts` if the repo is not at the root domain.

---

## Option 4: Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**.
2. Click **Create** → **Pages** → **Connect to Git**.
3. Connect GitHub and select `tradejhalak03-ops/wylfarm-daily`.
4. Build settings:
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (leave empty)
5. Click **Save and Deploy**.

Your site will be live at `https://wylfarm-daily.pages.dev` (or a custom URL). A `_redirects` file is included for SPA routing.

**Custom domain:** Project → **Custom domains** → Add `wylfarm.in` and follow the DNS setup.

---

## Custom domain (wylfarm.in)

After deploy:

- **Vercel:** Project → Settings → Domains → Add `wylfarm.in` and add the DNS records shown.
- **Netlify:** Site settings → Domain management → Add custom domain.
- **Cloudflare Pages:** Project → Custom domains → Add domain.

Then update `index.html` so `og:image` and `twitter:image` use your live URL (e.g. `https://wylfarm.in/apple-touch-icon.png`).
