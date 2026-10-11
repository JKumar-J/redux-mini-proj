# MediaScout

A React and Redux mini project for searching images, videos, and GIFs.

GitHub repository name: `media-scout`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on each push to `main`. You can also run it from the **Actions** tab.

Vite uses the repository name as the GitHub Pages base path during Actions builds, so the repository can use a different name if desired.

## Run locally

```sh
npm ci
npm run dev
```
