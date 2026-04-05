[![Netlify Status](https://api.netlify.com/api/v1/badges/2b25ac44-1951-4481-ba9f-d1384b7e0598/deploy-status)](https://app.netlify.com/projects/skejjodev/deploys)

# Skejjo Hugo Site

This repository contains a Hugo site built on the `darkrise-hugo` theme and prepared for Netlify deployment with:

- Hugo `0.160.0`
- Pagefind `1.4.0`
- Decap CMS `3.11.0`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This runs Hugo first and then builds the Pagefind search index into `public/pagefind`.

## Netlify

The included [`netlify.toml`](/Users/seanodell/git.nosync/skejjo.dev/netlify.toml) sets the publish directory to `public` and pins Hugo `0.160.0`.

To use Decap CMS in production:

1. Deploy the site to Netlify.
2. Enable Identity.
3. Enable Git Gateway.
4. Invite editors or enable open registration, depending on your workflow.

The CMS lives at `/admin/` and is configured in [`static/admin/config.yml`](/Users/seanodell/git.nosync/skejjo.dev/static/admin/config.yml).
