# Task 11: Origin Badge CSS Styles

Status: Completed
Created: 2026-06-24
Completed: 2026-06-24

## Goal
Add CSS custom properties and badge classes so each project card shows a distinct coloured pill identifying its origin (company name or "GitHub").

## Acceptance criteria
- should render a visually distinct badge colour per company
- should render GitHub cards with the existing blue accent colour
- should be readable at small font sizes (badge text is ~0.7rem)

## Notes
Badge colour tokens to add to `:root` in style.css:

```css
--badge-github:      #2563eb;   /* blue  — matches existing --color-accent */
--badge-kyl:         #7c3aed;   /* purple */
--badge-vebasoft:    #059669;   /* green  */
--badge-hiredigital: #d97706;   /* amber  */
--badge-maverick:    #dc2626;   /* red    */
```

Badge class pattern:
```css
.badge { /* base pill style */ }
.badge--github      { background: ...; color: #fff; }
.badge--kyl         { background: ...; color: #fff; }
.badge--vebasoft    { background: ...; color: #fff; }
.badge--hiredigital { background: ...; color: #fff; }
.badge--maverick    { background: ...; color: #fff; }
```

Badge sits in the top-right corner of each project card using `position: absolute` on the card (which gets `position: relative`).