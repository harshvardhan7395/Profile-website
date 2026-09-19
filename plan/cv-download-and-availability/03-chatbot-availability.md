# Task 3: Chatbot availability intent

Status: Completed
Created: 2026-09-19
Completed: 2026-09-19

## Goal
Let the chatbot answer availability and relocation questions: able to join immediately, willing to relocate to the Netherlands and within Germany.

## Acceptance criteria
- should answer that I can join immediately when asked about availability, notice period or start date
- should mention relocation to the Netherlands and within Germany when asked about relocating
- should answer with availability, not the location intent, when asked "are you open to relocation?"
- should still answer with the location when asked "where are you based?"
- should answer availability, not the Hire Digital entry, when the question contains "hire" but not "Hire Digital"
- should still return the Hire Digital entry when the question names "Hire Digital"

## Notes
- Add an `availability` intent to `src/app/features/chatbot/chat-intents.ts`. Suggested keywords: `available`, `availability`, `notice`, `start date`, `when can you start`, `join`, `immediately`, `relocat`, `netherlands`. Answer text: "I'm available to join immediately, and I'm willing to relocate, both to the Netherlands and within Germany."
- Put the wording in `profile-data.ts` (e.g. an `availability` field) rather than hard-coding it in the intent, so the data stays the single source of truth like the other intents.
- Pitfall 1: `ProfileQaService.matchEntity` runs before intents and matches a company by its first word, so "hire" matches Hire Digital (`profile-qa.service.ts:28`). Match Hire Digital only on its full name (e.g. "hire digital"/"hiredigital"), keeping first-word matching for the other companies.
- Pitfall 2: "relocation" contains "location". `matchIntent` picks the highest keyword count with a strict `>`. `relocat` + `relocation` (2) beats `location` (1), so no change is needed there, but the test above locks it in.
- Optionally add "Are you available to start?" to `FALLBACK` in `profile-qa.service.ts` and to the greeting in `chatbot.ts`. Keep the chatbot spec in sync if it asserts on that text.
- Do not add work-authorisation or salary answers (out of scope; the user hasn't given wording).
- Tests go in `profile-qa.service.spec.ts`.
