# Plan: CV Website for Harshvardhan Akhare

Status: Completed
Created: 2026-06-23
Completed: 2026-06-23

## Overview
Single-page personal website built from CV_31.pdf + GitHub repos.
Stack: Plain HTML/CSS/JS | Style: Minimal & clean | Host: GitHub Pages

## Test scenarios
- should display all sections when the page loads
- should show name, location, and clickable contact links in the header
- should group skills by category (Languages / Frontend / Backend / Tools / AI Tools)
- should list all 4 jobs in reverse-chronological order with dates and bullets
- should show 6 GitHub project cards with stack tags and working repo links
- should be readable and usable on a 375px mobile viewport
- should deploy successfully to GitHub Pages via a GitHub Actions workflow

## Tasks
- [x] [01-project-scaffolding.md](01-project-scaffolding.md) — index.html, style.css, assets/ folder, base reset/typography
- [x] [02-header-hero.md](02-header-hero.md) — name, title, location, email/LinkedIn/GitHub links
- [x] [03-summary.md](03-summary.md) — professional summary paragraph
- [x] [04-skills.md](04-skills.md) — skill chips grouped by category
- [x] [05-experience.md](05-experience.md) — 4-job timeline with dates and bullet points
- [x] [06-education-cv-projects.md](06-education-cv-projects.md) — two degrees + AR project from CV
- [x] [07-github-projects.md](07-github-projects.md) — cards for 6 repos with stack tags and GitHub links
- [x] [08-responsive-polish.md](08-responsive-polish.md) — mobile-first breakpoints, final CSS polish
- [x] [09-github-pages-deploy.md](09-github-pages-deploy.md) — .github/workflows/deploy.yml