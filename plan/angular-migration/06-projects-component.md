# Task 6: ProjectsComponent (tabs)

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Recreate the "Company Projects" / "GitHub Projects" tab switcher, rendering both project arrays from `PROFILE_DATA` through `ProjectCardComponent`.

## Acceptance criteria
- should show the company-projects panel when `activeTab()` is `'company'`
- should show the github-projects panel when `activeTab()` is `'github'`
- should switch panels when the other tab button is clicked

## Notes
- Path: `src/app/features/projects/projects.component.ts`.
- `activeTab = signal<'company' | 'github'>('company')`, toggled via `(click)="activeTab.set('company'|'github')"` on the two `.tab-btn` elements, with `[class.tab-btn--active]` bound to the matching state.
- `@if (activeTab() === 'company') { ... @for (p of companyProjects; track p.title) { <app-project-card ... /> } }` and the same for `'github'`.
- `companyProjects`/`githubProjects` come from `PROFILE_DATA` (Task 3), which already includes all 9 GitHub projects (7 original + FleetGate + GroundTruth-Sync).
- After wiring this up, visually verify the `.projects-grid` layout still looks right with 9 GitHub cards (vs. 7 in the legacy site) in both desktop 3-column and mobile 1-column layouts — no CSS change expected, but confirm.
