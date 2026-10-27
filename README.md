# MediaScout

MediaScout is a responsive media search app built with React, Redux Toolkit, and Vite. Search for photos, videos, and GIFs from one interface.

**Live demo:** [jkumar-j.github.io/redux-mini-proj](https://jkumar-j.github.io/redux-mini-proj/)

## Features

- Search photos from Unsplash, videos from Pexels, and GIF stickers from GIPHY.
- Switch between media types without leaving the page.
- View loading, empty, and error states while results are fetched.
- Browse results in a responsive grid; images load as they enter the viewport.

## Tech stack

- React 19 and Vite
- Redux Toolkit and React Redux for shared search state
- Tailwind CSS for styling
- Axios for API requests
- Unsplash, Pexels, and GIPHY APIs for media search

## Run locally

Requirements: Node.js 22+ and npm.

```sh
npm ci
```

Create a `.env.local` file in the project root and add API keys:

```dotenv
VITE_UNSPLASH_KEY=your_unsplash_key
VITE_PEXELS_KEY=your_pexels_key
VITE_GIPHY_KEY=your_giphy_key
```

Start the development server:

```sh
npm run dev
```

Run the checks and production build:

```sh
npm run lint
npm run build
```

## Deploy to GitHub Pages

This repository deploys through the workflow at `.github/workflows/deploy.yml`.

1. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Do not select **Deploy from a branch**; that publishes the source `index.html` rather than Vite's compiled app.
2. Under **Settings → Secrets and variables → Actions**, add the following repository secrets or variables. The workflow also checks the `github-pages` environment for environment-level values.
   - `VITE_UNSPLASH_KEY`
   - `VITE_PEXELS_KEY`
   - `VITE_GIPHY_KEY`
3. Push to `main`, or run **Deploy to GitHub Pages** from the **Actions** tab.

Vite uses the repository name as the Pages base path during Actions builds, so the built assets resolve under `/redux-mini-proj/`.

### Troubleshooting a blank Pages deployment

If the browser console shows 404s for `main.jsx`, `/src/main.jsx`, or `vite.svg`, Pages is likely serving the source branch instead of the Actions build artifact. Set the Pages source to **GitHub Actions**, then run the deployment workflow again. A successful build serves bundled files from `/redux-mini-proj/assets/`, not the source entry point.

If the workflow fails at **Build site**, check that all three API key names above are configured. These `VITE_` values are included in the public client-side bundle and can be seen by visitors. Use API keys intended for browser use and apply provider-side restrictions; never put private credentials in a Vite frontend.

## Project structure

```text
src/
  api/                 API clients for Unsplash, Pexels, and GIPHY
  components/          Search controls and media result components
  redux/feature/       Search and collection Redux slices
  redux/store.js       Redux store configuration
```
