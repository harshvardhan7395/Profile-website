# Task 1: Scaffold Angular app on a feature branch

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Stand up a bare Angular app (Vitest test runner, no Router, no SSR) inside the repo on `feature/angular-migration`, with the current static site archived for reference, without touching `main`.

## Acceptance criteria
- should produce a production build with no errors when running `ng build` with the production configuration
- should pass when running `npm test` on the initial scaffold (default boilerplate spec)

## Notes
- Create and switch to branch `feature/angular-migration` before scaffolding anything.
- `ng new profile-website --routing=false --style=css --ssr=false --test-runner=vitest` (Angular CLI 22's native Vitest support — no extra config needed).
- `ng new` refuses a non-empty directory — scaffold into a throwaway sibling folder, then move its contents into the repo root.
- Move the current `index.html` and `style.css` to `legacy/index.html` and `legacy/style.css` (kept only as a migration reference, deleted in Task 10).
- Merge the CLI-generated `.gitignore` entries (`node_modules/`, `dist/`) into the existing `.gitignore` — do not overwrite the existing macOS/editor/Python rules already there.
- Confirm `package-lock.json` is committed (needed for `actions/setup-node`'s npm cache in Task 9).
