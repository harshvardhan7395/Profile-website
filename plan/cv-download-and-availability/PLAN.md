# Plan: CV download, headline, chatbot availability

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Context
Follow-up to the recruiter audit. The user added `Harshvardhan_CV.pdf` at the repo root.
Decisions made while planning:
- KYL Software ended **June 2026** (the PDF is right, the site's "Present" is stale).
- Hero title wording: **Full Stack Engineer · Backend focus**.
- The phone number stays in the PDF (it stays off the web page).
- The site gets the PDF's Hire Digital monorepo bullet. The PDF lacks the site's TLS-incident bullet and has a dropped "~" in "( 20K requests/day)"; the user regenerates the PDF (out of scope here).

## Test scenarios
- should render a Download CV link to `docs/Harshvardhan_CV.pdf` with the `download` attribute when the hero is shown
- should use a relative URL with no leading slash when linking the CV, so it resolves under the base href
- should show "Full Stack Engineer · Backend focus" as the hero title when the hero is shown
- should answer that I can join immediately when asked about availability, notice period or start date
- should mention relocation to the Netherlands and within Germany when asked about relocating
- should answer with availability, not the location intent, when asked "are you open to relocation?"
- should still answer with the location when asked "where are you based?"
- should answer availability, not the Hire Digital entry, when the question contains "hire" but not "Hire Digital"
- should still return the Hire Digital entry when the question names "Hire Digital"
- should show KYL Software as "May 2025 – Jun 2026" when the experience is rendered
- should include the npm Workspaces monorepo bullet for Hire Digital when the experience is rendered

## Out of scope
`og:image`, work-authorisation and salary chatbot answers, fixing the PDF itself, project curation from the earlier audit.

## Tasks
- [x] [01-download-cv-button.md](01-download-cv-button.md) — move the PDF to `public/docs/` and add a Download CV button to the hero
- [x] [02-hero-headline.md](02-hero-headline.md) — set the hero title to "Full Stack Engineer · Backend focus"
- [x] [03-chatbot-availability.md](03-chatbot-availability.md) — availability/relocation intent plus the Hire Digital matching fix
- [x] [04-sync-experience-with-pdf.md](04-sync-experience-with-pdf.md) — KYL end date and Hire Digital monorepo bullet
