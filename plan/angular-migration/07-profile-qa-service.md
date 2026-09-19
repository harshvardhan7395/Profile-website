# Task 7: ProfileQaService

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Implement the chatbot's answering logic as a pure, synchronous, `providedIn: 'root'` service that matches free-text questions against `PROFILE_DATA` — no HTTP, no LLM, fully client-side. This is the highest-value test surface in the whole migration.

## Acceptance criteria
- should return a project's tagline + description when the question names that project (e.g. "tell me about FleetGate")
- should return an experience entry's role/company/bullets when the question names that company (e.g. "what did you do at vebasoft")
- should return the skills list grouped by category when the question asks about skills
- should return the about/bio text when the question asks "who are you" / "tell me about yourself"
- should return contact links when the question asks how to reach the person
- should return a fallback message with example questions when the question matches no intent or entity

## Notes
- Path: `src/app/features/chatbot/profile-qa.service.ts`, `chat-intents.ts`, `chat-message.model.ts`.
- Matching strategy, in order:
  1. **Entity-lookup pass**: normalize the question (lowercase, strip punctuation), substring-match against `companyProjects[].title`, `githubProjects[].title`, `experience[].company`. A match returns a templated answer built from that entity's fields — highest precision, handles "tell me about FleetGate" unambiguously.
  2. **Intent-scoring pass** (if no entity match): a static `chat-intents.ts` array, each `{ id, keywords: string[], respond: (data: ProfileData) => string }` — score = number of keyword substrings found via `.includes()`; take the highest-scoring intent with score > 0. Seed intents: about, skills, experience (overview), projects (overview), education, contact, location.
  3. **Fallback**: canned response suggesting example questions if nothing scores.
- No NLP libraries, no fuzzy matching — deliberately simple `.includes()` checks are enough per the confirmed scope (rule-based, no LLM).
- Every responder reads from `PROFILE_DATA` directly — no hardcoded prose duplicated outside the data model.
