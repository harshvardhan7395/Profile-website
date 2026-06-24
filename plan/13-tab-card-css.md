# Task 13: Tab and Card CSS

Status: Completed
Created: 2026-06-24
Completed: 2026-06-24

## Goal
Style the tab buttons, expandable card states, and mobile layout — all in style.css with no JS dependency.

## Acceptance criteria
- should visually distinguish the active tab from inactive tabs
- should show `.project-card__detail` only when the card has `data-expanded="true"`
- should animate the expand/collapse with a smooth transition
- should display tab buttons full-width on viewports ≤ 640px
- should display cards in a single column on viewports ≤ 640px

## Styles to add / update

### Tab buttons
```css
.project-tabs {
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0;
}

.tab-btn {
  background: none;
  border: none;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;       /* sits flush on the container border */
  transition: color var(--transition), border-color var(--transition);
}

.tab-btn--active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.tab-btn:hover:not(.tab-btn--active) {
  color: var(--color-text);
}
```

### Card collapsed/expanded states
```css
/* Summary always visible */
.project-card__summary {
  cursor: pointer;
}

.project-card__tagline {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
  line-height: 1.5;
}

.project-card__toggle {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: var(--space-xs);
  transition: opacity var(--transition);
}

/* Detail block — hidden/shown via [hidden] + data-expanded */
.project-card__detail {
  margin-top: var(--space-md);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border);
}

/* GitHub repo link button (inside card header, doesn't trigger expand) */
.project-card__repo-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-text-muted);
  margin-left: auto;
  padding: 0.2rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition);
}

.project-card__repo-link:hover {
  color: var(--color-accent);
  opacity: 1;
}
```

### Mobile overrides (add to existing @media (max-width: 640px) block)
```css
.project-tabs {
  flex-direction: column;
  border-bottom: none;
  gap: var(--space-xs);
}

.tab-btn {
  width: 100%;
  text-align: left;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  border-bottom-color: var(--color-border);
  margin-bottom: 0;
  padding: 0.75rem 1rem;
}

.tab-btn--active {
  background: var(--color-accent-light);
  border-color: #bfdbfe;
  color: var(--color-accent);
}
```

## Notes
- The existing `.project-card`, `.project-card__header`, `.project-card__title`, `.project-card__desc`, `.badge` styles stay as-is — this task only adds new selectors
- Remove `.project-card__icon` styles (no longer used — GitHub icon moves to `.project-card__repo-link`)
- The `hidden` attribute hides `.project-card__detail` natively — no CSS needed for that. CSS only needed for the transition effect when revealed
