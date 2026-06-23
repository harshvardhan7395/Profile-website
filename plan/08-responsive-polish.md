# Task 8: Responsive Design & Polish

Status: Pending
Created: 2026-06-23
Completed: —

## Goal
Ensure the site is readable and usable at 375px (mobile) and looks polished at all common breakpoints.

## Acceptance criteria
- should stack all sections vertically on a 375px viewport with no horizontal overflow
- should show the GitHub project cards in a single column on mobile, 2 columns on tablet, 3 on desktop
- should have comfortable tap targets (min 44px height) for all links on mobile

## Notes
- Use `@media (max-width: 768px)` for mobile overrides
- Skills chips should wrap naturally (flexbox already handles this)
- No JS required for any responsive behaviour
- Polish checklist:
  - Smooth hover transitions on cards and links (0.2s ease)
  - Section headings with a subtle accent underline
  - Consistent vertical rhythm (use multiples of the base spacing token)
  - Print stylesheet or print-friendly styles (optional but nice — matches the PDF origin)