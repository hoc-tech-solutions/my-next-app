# Laxman Lokare — Portfolio

A responsive personal portfolio built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure the public website URL

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL for the deployed website. This value is used for canonical metadata, absolute social-sharing image URLs, and the sitemap:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

For local development, add this setting to `.env.local`. Configure the same variable in the deployment provider before building for production. Without a public URL, the canonical tag and sitemap entry are omitted; the metadata base falls back to localhost.

## Portfolio details

Update the project placeholders and contact details in `app/page.tsx`. The contact form prepares an email draft and needs a real address in `contactEmail` before it can be used.

## SEO included

- Page title, description, keywords, author, and robots metadata
- Open Graph and Twitter card metadata with a generated share image
- Person structured data (JSON-LD)
- `robots.txt` and a sitemap based on `NEXT_PUBLIC_SITE_URL`
- A portfolio-branded favicon
