# Plan: Migrate to Angular + feature-flagged chatbot

Status: In Progress
Created: 2026-09-19
Completed: —

## Overview
Migrate the static index.html/style.css portfolio to an Angular app (Vitest for tests — Angular's native modern default, no Router — single scrolling page), and add a fully client-side, rule-based chatbot that answers visitor questions about the profile, gated behind a build-time feature flag. Work happens on `feature/angular-migration`; `main` (and its GitHub Pages deploy) stays untouched until the migration is fully verified. Part A (adding FleetGate + GroundTruth-Sync project cards to the current static site) is already done and merged to `main` (commit `aa994a6`).

## Test scenarios
- should produce a production build with no errors when running `ng build` with the production configuration
- should pass when running `npm test` on the initial scaffold
- should render the GitHub badge + icon link when `repoUrl` is provided on `ProjectCardComponent`, and a plain company badge when `badgeLabel` is provided instead
- should toggle `expanded` when the card summary is clicked, and NOT toggle when a repo-link anchor inside it is clicked
- should hide the detail block when `expanded` is false, and show description + tech chips when true
- should show the company-projects panel when `activeTab` is `'company'`, and the github-projects panel when `'github'`, switching on tab-button click
- should render hero name/title/contact links, one skill chip per skill, and one timeline entry per experience entry, all sourced from `PROFILE_DATA`
- should return a project's tagline+description when the question names that project (e.g. "tell me about FleetGate")
- should return an experience entry's details when the question names that company (e.g. "what did you do at vebasoft")
- should return the grouped skills list, the about/bio text, or contact links when asked about skills / "who are you" / how to reach the person, respectively
- should return a fallback/example-questions message when the question matches no intent or entity
- should append a user message + bot reply when `ChatbotComponent.send()` is called with non-empty text, and do nothing when called with empty/whitespace text
- should render `<app-chatbot>` when `FEATURE_FLAGS.chatbotEnabled` is `true`, and omit it when `false`
- should serve all JS/CSS chunks with no 404s once deployed under the `/Profile-website/` base href (verified via `workflow_dispatch` on the feature branch before merge)

## Tasks
- [x] [01-scaffold-angular-app.md](01-scaffold-angular-app.md) — `ng new` with Vitest on a feature branch, merge into repo root, archive legacy files
- [x] [02-migrate-global-styles.md](02-migrate-global-styles.md) — copy `style.css` verbatim into `src/styles.css`
- [x] [03-profile-data-model.md](03-profile-data-model.md) — typed `ProfileData` interfaces + `PROFILE_DATA` const (incl. all 9 GitHub projects)
- [x] [04-migrate-static-sections.md](04-migrate-static-sections.md) — Hero/About/Skills/Experience/Education/Footer components + smoke tests
- [ ] [05-project-card-component.md](05-project-card-component.md) — reusable `ProjectCardComponent` (company + GitHub variants)
- [ ] [06-projects-component.md](06-projects-component.md) — `ProjectsComponent` tab switching + rendering
- [ ] [07-profile-qa-service.md](07-profile-qa-service.md) — `ProfileQaService` entity lookup + intent scoring + fallback
- [ ] [08-chatbot-component-and-flag.md](08-chatbot-component-and-flag.md) — `ChatbotComponent` + `FEATURE_FLAGS.chatbotEnabled` gating
- [ ] [09-ci-cd-build-deploy.md](09-ci-cd-build-deploy.md) — `angular.json` baseHref + `deploy.yml` build/test/deploy steps
- [ ] [10-cleanup-and-merge.md](10-cleanup-and-merge.md) — remove `legacy/`, merge to `main`, live smoke check
