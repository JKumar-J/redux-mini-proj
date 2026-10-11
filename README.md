# MediaScout

A React and Redux mini project for searching images, videos, and GIFs.

GitHub repository name: `media-scout`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Under **Settings → Secrets and variables → Actions**, add these names as repository secrets or variables:
   - `VITE_UNSPLASH_KEY`
   - `VITE_PEXELS_KEY` (the previous misspelling `VITE_PEXLES_KEY` is also accepted)
   - `VITE_GIPHY_KEY`
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on each push to `main`. You can also run it from the **Actions** tab.

Vite uses the repository name as the GitHub Pages base path during Actions builds, so the repository can use a different name if desired.

These `VITE_` values are included in the public client-side build and can be seen by site visitors. Use API keys intended for browser use and restrict them with each provider; do not put private credentials in a Vite frontend.

## Run locally

```sh
npm ci
npm run dev
```
