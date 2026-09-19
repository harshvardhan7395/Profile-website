# Task 9: CI/CD build & deploy

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Update the build config and GitHub Actions workflow so the Angular app builds, tests, and deploys correctly to GitHub Pages at the existing `/Profile-website/` subpath — verified on the feature branch before merging to `main`.

## Acceptance criteria
- should serve all JS/CSS chunks with no 404s once deployed under the `/Profile-website/` base href (checked via `workflow_dispatch` run on `feature/angular-migration`, inspecting the browser network tab on the resulting Pages URL)
- should fail the workflow when `npm test` fails (tests gate the deploy, not just the build)

## Notes
- `angular.json`: set `"baseHref": "/Profile-website/"` on the `production` build configuration. No `CNAME` exists, so the site stays at `harshvardhan7395.github.io/Profile-website/` — getting the base href wrong 404s every asset even though it works fine locally with `ng serve` (which uses the `development` configuration, no base href override).
- `.github/workflows/deploy.yml`: insert before the existing `configure-pages`/`upload-pages-artifact`/`deploy-pages` steps:
  - `actions/setup-node@v4` (`node-version: 20`, `cache: npm` — requires `package-lock.json` to be committed, confirmed in Task 1)
  - `npm ci`
  - `npm test -- --run` (Vitest's CI/non-watch mode) — must run and pass before build
  - `npm run build`
  - repoint `upload-pages-artifact`'s `path` from `.` to `dist/profile-website/browser` (the esbuild "application" builder's fixed output layout; adjust the project-name segment if the scaffold in Task 1 used a different name)
- Verify via manual `workflow_dispatch` (or a temporary branch-scoped copy of the workflow) targeting the feature branch — do not merge to `main` until this passes, since `deploy.yml` currently triggers on every push to `main`.
