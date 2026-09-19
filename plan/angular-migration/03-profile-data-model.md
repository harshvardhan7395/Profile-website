# Task 3: Profile data model

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Extract all hardcoded content from `legacy/index.html` into a single typed data source that both the section components and the chatbot's `ProfileQaService` (Task 7) consume — no duplication between rendering and Q&A knowledge.

## Acceptance criteria
- should type-check with no compiler errors when `profile-data.ts` is built against the `ProfileData` interfaces in `profile-data.models.ts`
- should contain all required top-level sections (hero, about, skillGroups, experience, companyProjects, githubProjects, education, otherProjects, footer) when `PROFILE_DATA` is loaded

## Notes
- `src/app/data/profile-data.models.ts`: interfaces `ContactLink`, `HeroData`, `SkillGroup`, `ExperienceEntry`, `CompanyProject` (with `badgeVariant: 'kyl'|'vebasoft'|'hiredigital'|'maverick'`), `GithubProject` (with `repoUrl`), `EducationEntry`, `OtherProjectEntry`, `ProfileData`.
- `src/app/data/profile-data.ts`: one `export const PROFILE_DATA: ProfileData = {...}` transcribing everything from `legacy/index.html` — 6 skill groups, 4 experience entries, 8 company projects, all 9 GitHub projects (7 original + FleetGate + GroundTruth-Sync, already live on `main` from Part A — copy their exact title/tagline/description/tech content over), 2 education entries + 1 "other project" (AR nav app).
- Use a plain typed `.ts` const, not an imported `.json` file, so literal union types (`badgeVariant`, etc.) get full compiler checking.
- No images/assets to migrate — all icons are inline SVG and stay inline in component templates (Task 4/5).
