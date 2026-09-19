# Task 1: Download CV button and file move

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Move the CV PDF into a proper served folder and give the hero a primary "Download CV" button that works under the `/Profile-website/` base path.

## Acceptance criteria
- should render a Download CV link to `docs/Harshvardhan_CV.pdf` with the `download` attribute when the hero is shown
- should use a relative URL with no leading slash when linking the CV, so it resolves under the base href

## Notes
- Move `Harshvardhan_CV.pdf` (repo root, untracked) to `public/docs/Harshvardhan_CV.pdf`. `angular.json` copies everything in `public/` into the build, so no config change is needed.
- `angular.json` sets `baseHref: /Profile-website/`, so the link must be `docs/...`, not `/docs/...`.
- Add a `cv` field (label + href) to `HeroData` in `src/app/data/profile-data.models.ts`, populate it in `profile-data.ts`, and render the button in `src/app/features/hero/hero.html`. Style it as a primary button in `src/styles.css`, next to the existing `.hero__links`. Add a print rule that hides it, like the other interactive controls.
- Extend `src/app/features/hero/hero.spec.ts`.
- Non-unit check: after `npm run build`, `dist/profile-website/browser/docs/Harshvardhan_CV.pdf` must exist.
- The PDF contains a phone number. That is intentional (decided 2026-09-19).
