# ethan-portfolio

A clean, recruiter-friendly portfolio site for **Ethan Chen**.

## 1) Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2) Customize content

Edit `lib/siteData.ts`:
- Replace the LinkedIn URL placeholder
- Add project links (GitHub repos, demos)
- Adjust tagline/about copy as you like

## 3) Deploy on Vercel

1. Push this repo to GitHub
2. Import it into Vercel
3. Deploy (Vercel will detect Next.js automatically)

## 4) Connect your custom domain: ethanmaximuschen.com

In your Vercel project:
- Settings → Domains → Add `ethanmaximuschen.com` and `www.ethanmaximuschen.com`

Then set DNS with your registrar (typical setup):
- Apex (`@`) A record → **76.76.21.21**
- `www` CNAME → `cname.vercel-dns.com.`

Vercel will show the exact records it expects for your project in the Domains screen.
