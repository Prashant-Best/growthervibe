# Vite App

This project uses Vite and is ready for local development, Git commits, and static deployment.

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:

1. Push this project to GitHub.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch to trigger deployment.

The Vite config uses a relative base path so the built site works well on GitHub Pages and other static hosts.
