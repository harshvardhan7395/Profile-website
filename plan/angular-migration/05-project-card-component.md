# Task 5: ProjectCardComponent

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Build one reusable, standalone `ProjectCardComponent` that renders both company-project and GitHub-project cards, replicating the legacy expand/collapse and repo-link-click behavior exactly.

## Acceptance criteria
- should render the GitHub badge + icon link when the `repoUrl` input is provided
- should render a plain company badge (using `badgeVariant`) when `badgeLabel` is provided instead of `repoUrl`
- should toggle `expanded` when the `.project-card__summary` block is clicked
- should NOT toggle `expanded` when a `.project-card__repo-link` anchor inside the summary is clicked
- should hide the `.project-card__detail` block when `expanded` is false, and show description + tech chips when `expanded` is true

## Notes
- Path: `src/app/features/projects/project-card/project-card.component.ts`.
- Inputs: `title`, `tagline`, `description`, `tech: string[]`, optional `badgeLabel`/`badgeVariant`, optional `repoUrl` (presence of `repoUrl` selects the GitHub badge+icon variant over the plain badge).
- `expanded = signal(false)`; toggle on summary click. Each repo-link anchor gets `(click)="$event.stopPropagation()"` — this replaces the legacy `e.target.closest('.project-card__repo-link')` DOM-traversal check from the original inline `<script>`.
- Use `[hidden]="!expanded()"` on the detail block (not `@if`) to match the original's exact hide semantics — element stays in the DOM, just hidden, same as today; the existing `[hidden]{display:none!important}` CSS rule already covers it.
- `[attr.data-expanded]="expanded()"` preserves the original `data-expanded="true|false"` attribute hook.
- Reuse the exact GitHub SVG icon markup from `legacy/index.html`'s Authz-Engine card.
