# Task 14: Tab Switching and Card Expand/Collapse JS

Status: Completed
Created: 2026-06-24
Completed: 2026-06-24

## Goal
Add a small inline `<script>` at the bottom of index.html that handles tab switching and card expand/collapse — no frameworks, no external files.

## Acceptance criteria
- should switch the visible tab panel when a tab button is clicked
- should mark the clicked tab button as active and deactivate the others
- should expand a card's detail block when the card summary is clicked
- should collapse an expanded card when the summary is clicked again
- should update the toggle label from "▸ Details" to "▾ Details" when expanded
- should NOT expand/collapse the card when the GitHub repo link is clicked

## Logic outline

### Tab switching
```js
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // deactivate all tabs and hide all panels
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-btn--active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.hidden = true);
    // activate clicked tab and show its panel
    btn.classList.add('tab-btn--active');
    document.getElementById('tab-' + btn.dataset.tab).hidden = false;
  });
});
```

### Card expand/collapse
```js
document.querySelectorAll('.project-card__summary').forEach(summary => {
  summary.addEventListener('click', (e) => {
    // Don't expand if the click was on the repo link
    if (e.target.closest('.project-card__repo-link')) return;

    const card = summary.closest('.project-card');
    const detail = card.querySelector('.project-card__detail');
    const toggle = card.querySelector('.project-card__toggle');
    const expanded = card.dataset.expanded === 'true';

    card.dataset.expanded = expanded ? 'false' : 'true';
    detail.hidden = expanded;
    toggle.textContent = expanded ? '▸ Details' : '▾ Details';
  });
});
```

## Notes
- Script goes at the bottom of `<body>`, just before `</body>`, so DOM is ready without needing DOMContentLoaded
- Keep the script inline in index.html — no separate .js file needed for this small amount of logic
- No libraries — vanilla JS only
