# Task 2: Hero headline

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Make the hero title state the positioning: full stack with a backend focus.

## Acceptance criteria
- should show "Full Stack Engineer · Backend focus" as the hero title when the hero is shown

## Notes
- Change `hero.title` in `src/app/data/profile-data.ts` (currently "Software Engineer · Full Stack").
- The existing hero spec compares against `PROFILE_DATA.hero.title`, so add an explicit literal assertion so the wording is pinned.
- The `<title>` and meta description in `src/index.html` say "Software Engineer" / "Full-stack engineer"; leave them unless the user asks.
