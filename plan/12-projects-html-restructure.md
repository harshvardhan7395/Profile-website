# Task 12: Projects Section — HTML Restructure

Status: Completed
Created: 2026-06-24
Completed: 2026-06-24

## Goal
Replace the flat 14-card grid with a tabbed layout: two tab buttons ("Company Projects" / "GitHub Projects") each controlling a panel of expandable cards. Each card shows a 1-line summary when collapsed and reveals full description + stack tags when expanded.

## Acceptance criteria
- should render two tab buttons inside the Projects section
- should render 8 company cards inside the Company panel
- should render 6 GitHub cards inside the GitHub panel
- should show a 1-line summary on every card in collapsed state
- should contain a hidden full-description block on every card for expand state
- should include a small external link icon button on GitHub cards (separate from the expand click target)

## Card HTML structure (per card)

```html
<div class="project-card" data-expanded="false">
  <div class="project-card__summary">
    <div class="project-card__header">
      <h3 class="project-card__title">Title</h3>
      <span class="badge badge--kyl">KYL Software</span>
    </div>
    <p class="project-card__tagline">One-line summary sentence.</p>
    <span class="project-card__toggle" aria-label="Expand project details">▸ Details</span>
  </div>
  <div class="project-card__detail" hidden>
    <p class="project-card__desc">Full multi-sentence description...</p>
    <div class="chips chips--small">
      <span class="chip">Node.js</span>
      ...
    </div>
  </div>
</div>
```

GitHub cards additionally get this inside `.project-card__header`:
```html
<a href="https://github.com/..." target="_blank" rel="noopener"
   class="project-card__repo-link" aria-label="View on GitHub">
  <svg ...github icon.../>
</a>
```

## Tab HTML structure

```html
<div class="project-tabs">
  <button class="tab-btn tab-btn--active" data-tab="company">Company Projects</button>
  <button class="tab-btn" data-tab="github">GitHub Projects</button>
</div>
<div class="tab-panel" id="tab-company">
  <!-- 8 company cards -->
</div>
<div class="tab-panel" id="tab-github" hidden>
  <!-- 6 GitHub cards -->
</div>
```

## 1-line summaries (use these exactly in `.project-card__tagline`)

### Company Projects
1. **Secure Network Gateway** — Bidirectional WebSocket tunnel between two isolated government server environments with Ed25519 authentication, Redis caching, and full observability.
2. **Financial Controlling API** — RESTful financial backend for facility management with OpenAPI validation, OAuth2 auth, and HATEOAS — eliminating 4 hours of manual work per project.
3. **Football Scouting & Analytics Platform** — Real-time football analytics platform integrating 3+ data sources, reducing deployment times by 30% and boosting user engagement by 50%.
4. **Talent-Matching Website Redesign** — Next.js redesign of a talent marketplace with a scalable blog component managing 300+ posts and automated CI/CD pipelines.
5. **Client Registration & Call Scheduling Portal** — Client onboarding and call-scheduling portal built with React and Django REST APIs for HireDigital's web portal.
6. **Supply Chain Audit Platform** — Compliance audit platform serving 20+ European coal mine sites with structured supplier questionnaire workflows.
7. **Rumour Monitoring System** — Cross-country misinformation tracker monitoring information spread in near real-time across 10+ countries.
8. **Educational Platform — College to Career** — Job-matching platform connecting students from 170+ colleges with employment opportunities via eligibility-based filtering.

### GitHub Projects
9. **Workshop Job Board** — Real-time automotive workshop job assignment with drag-and-drop, optimistic UI, and three-layer test coverage.
10. **Engagement Briefing Tool** — RAG pipeline converting consulting notes into searchable briefings using Claude AI and pgvector with hallucination prevention.
11. **Club Gap API** — Spatial REST API identifying optimal gym locations via H3 hexagonal demand scoring with GDPR-compliant aggregation.
12. **Nexus Admin** — Distributed systems dashboard for live P2P sync conflict visualisation and TLS certificate lifecycle monitoring.
13. **Reward Notification Gateway** — Scalable real-time reward notifications via Redis Pub/Sub fan-out across multiple WebSocket server pods.
14. **Sentinel Gateway** — Secure HTTP-to-WebSocket bridge with dual Ed25519 signature verification for security-sensitive government environments.

## Notes
- Full descriptions for all cards are already in index.html — copy them into `.project-card__detail`
- The `hidden` attribute on `.project-card__detail` is toggled by JS (task 14)
- The `hidden` attribute on `#tab-github` is toggled by JS (task 14)
- Company tab is active by default
- Stack tags go inside `.project-card__detail` (hidden until expanded)
