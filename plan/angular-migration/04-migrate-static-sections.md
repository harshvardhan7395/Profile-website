# Task 4: Migrate static presentational sections

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Recreate the Hero, About, Skills, Experience, Education, and Footer sections as standalone Angular components rendering from `PROFILE_DATA`, with visual parity to `legacy/index.html`.

## Acceptance criteria
- should render the hero name, title, location, and contact links from `PROFILE_DATA.hero` when `HeroComponent` renders
- should render one `.chip` per skill within each skill group when `SkillsComponent` renders
- should render one timeline entry per item in `PROFILE_DATA.experience` when `ExperienceComponent` renders
- should apply the same visual layout as the legacy static page for each section (manual check against `legacy/index.html`)

## Notes
- Feature folders: `src/app/features/{hero,about,skills,experience,education,footer}/`, each a standalone component using `@if`/`@for` control flow (no `CommonModule` import needed).
- Do these six first — they're pure data rendering with no interactivity, lowest risk in the migration. Commit after each section rather than batching, so any visual regression is easy to bisect.
- `education.component.html` carries one inline `style="margin-top: 0.5rem"` on a `.chips.chips--small` row (the "Other Projects" AR nav entry) — keep it as an inline style binding, or promote to a small utility class in `styles.css`; either is fine, just be consistent.
- Only light smoke tests here (per confirmed test scenarios) — these components have no logic worth exhaustively testing beyond "does it wire the data through".
