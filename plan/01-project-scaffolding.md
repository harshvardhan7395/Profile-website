# Task 1: Project Scaffolding

Status: Pending
Created: 2026-06-23
Completed: —

## Goal
Create the foundational file structure with a CSS reset, base typography, and CSS custom properties (design tokens) so all subsequent tasks build on a consistent base.

## Acceptance criteria
- should render a blank page with no browser-default margin/padding when index.html is opened
- should load style.css without 404 errors
- should define CSS custom properties for colors, font sizes, and spacing

## Notes
- Use a single `index.html` + `style.css` (no build tool, no JS framework)
- Define a `--color-accent` token early — all sections will reference it
- Font: system-ui stack (no external font dependency to keep it fast)
- File layout:
  ```
  /
  ├── index.html
  ├── style.css
  └── assets/          (for any future icons/images)
  ```