# Task 9: CI/CD build & deploy

Status: In Progress (config done, remote verification pending)
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
  - `actions/setup-node@v4` (`node-version: 24` — Angular 22's `@angular/core` requires Node `^22.22.3 || ^24.15.0 || >=26.0.0`, so Node 20 fails; `cache: npm` requires `package-lock.json` to be committed, confirmed in Task 1)
  - `npm ci`
  - `npm test -- --watch=false` (the `@angular/build:unit-test` builder's non-watch flag; it already defaults to non-watch outside a TTY, but this makes CI intent explicit) — must run and pass before build
  - `npm run build`
  - repoint `upload-pages-artifact`'s `path` from `.` to `dist/profile-website/browser` (the esbuild "application" builder's fixed output layout)
- Also bumped `package.json`'s `packageManager` field from the stale `npm@9.3.0` (which had an arborist bug on Node 24's peer-dep graph) to `npm@12.0.2`.
- Verified locally: production build emits `<base href="/Profile-website/">` correctly in `dist/profile-website/browser/index.html`; full test suite (25 tests) and typecheck pass.
- Not yet verified: an actual `workflow_dispatch` run against the pushed feature branch (requires pushing to the remote — pending user confirmation before pushing/triggering, since that touches the shared GitHub repo and Actions). Do not merge to `main` until that run passes.
