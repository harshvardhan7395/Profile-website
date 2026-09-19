# Task 4: Sync experience with the PDF

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Make the site's experience data agree with the downloadable CV: KYL has ended, and the Hire Digital monorepo bullet is present.

## Acceptance criteria
- should show KYL Software as "May 2025 – Jun 2026" when the experience is rendered
- should include the npm Workspaces monorepo bullet for Hire Digital when the experience is rendered

## Notes
- In `src/app/data/profile-data.ts`, change KYL's `dateRange` from "May 2025 – Present" to "May 2025 – Jun 2026".
- Check for other wording that assumes a current job, e.g. the About text and any chatbot answer.
- Hire Digital bullet from the PDF, kept faithful to it: worked within an npm Workspaces monorepo spanning 7 packages, redesigning and redeveloping the talent-matching website using Next.js (including the scalable blog component managing 300+ blogs), consuming shared UI components from the internal `@hiredigital/ui` library. It replaces the existing first Hire Digital bullet rather than duplicating it.
- The "Developed GitHub Actions scripts" bullet in the PDF also says "across multiple monorepo workspaces". Adopt that wording for consistency.
- Changing `dateRange` changes the experience `entryKey`, which is only used at runtime, so no test depends on it.
- Tests go in `experience.spec.ts`.
- Not done here: the PDF lacks the TLS-incident bullet and has a dropped "~" in "( 20K requests/day)". The user regenerates the PDF.
