# Task 2: Migrate global styles

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Bring the existing 546-line `style.css` into the Angular app unchanged as the global stylesheet, so migrated components render pixel-identical output with zero CSS rewrites.

## Acceptance criteria
- should apply the same visual styling to migrated markup as the legacy static page (manual visual check — open `legacy/index.html` and the running `ng serve` app side by side, no automated test)

## Notes
- Copy `legacy/style.css` verbatim into `src/styles.css`, replacing the Angular CLI boilerplate content. No class renaming, no splitting into per-component styles in this pass.
- Keep the `:root` design-token block (colors, spacing, radius, fonts) here — CSS custom properties on `:root` cascade into every component regardless of Angular's view encapsulation, so nothing needs duplicating per component.
- The existing `[hidden] { display: none !important; }` rule already covers the `[hidden]` bindings Task 5/6 will use — no change needed there.
- No SCSS/Less — stay on plain CSS to match the hand-written source.
