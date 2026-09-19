# Task 10: Cleanup and merge

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Remove migration scaffolding no longer needed, merge `feature/angular-migration` into `main`, and confirm the live site works end-to-end.

## Acceptance criteria
- should have zero references to the `legacy/` directory once the migration is complete (deleted from the repo)
- should render all sections, both project tabs (all 9 GitHub cards expanding correctly), and the chatbot button (answering a few test questions correctly) when loading the live Pages URL fresh after merge

## Notes
- Delete `legacy/index.html` and `legacy/style.css` only after Task 9's `workflow_dispatch` run has confirmed full parity — no need to keep them around past that point (use `git show main:index.html` later if a reference is ever needed).
- Merge to `main` only after Task 9 passes on the feature branch — this is the one push to `main` that matters; every prior task has already been verified in isolation on the branch.
- Post-merge smoke check on `https://harshvardhan7395.github.io/Profile-website/` (bypass cache): all sections render, tab switching works, all 9 GitHub project cards (including FleetGate/GroundTruth-Sync) expand/collapse correctly, chatbot button appears (flag defaults `true`) and correctly answers: a skills question, "tell me about FleetGate", "what did you do at vebasoft", and a nonsense query (checks the fallback).
