# Task 7: GitHub Projects Section

Status: Pending
Created: 2026-06-23
Completed: —

## Goal
Render a card grid of 6 personal GitHub projects with title, short description, tech stack tags, and a link to the repo.

## Acceptance criteria
- should display 6 project cards in a responsive grid
- should show a title, one-line description, and stack tags on each card
- should link each card to the correct GitHub repo URL
- should open GitHub links in a new tab

## Notes
Projects and data:

| Repo | Description | Stack tags | URL |
|------|-------------|------------|-----|
| Workshop-Job-Board | Real-time job assignment for automotive workshops with drag-and-drop and optimistic UI | Angular 17, NgRx, Socket.io, TypeScript | https://github.com/harshvardhan7395/Workshop-Job-Board |
| Engagement-Briefing-Tool | RAG pipeline converting consulting notes into searchable briefings using LLMs | Next.js 14, Claude AI, pgvector, Supabase | https://github.com/harshvardhan7395/Engagement-Briefing-Tool |
| Club-gap-api | Spatial API identifying optimal gym locations using H3 hexagonal grid analysis | NestJS, PostgreSQL, Prisma, H3 | https://github.com/harshvardhan7395/Club-gap-api |
| Nexus-Admin | Admin dashboard for distributed P2P sync observability and TLS cert monitoring | React 18, FastAPI, WebSocket, Python | https://github.com/harshvardhan7395/Nexus-Admin |
| Reward-Notification-Gateway | Scalable real-time reward push notifications across multiple server pods | NestJS, Redis Pub/Sub, Socket.io, JWT | https://github.com/harshvardhan7395/Reward-Notification-Gateway |
| Sentinel-gateway | Secure HTTP-to-WebSocket bridge with Ed25519 dual-signature verification | Node.js, TypeScript, WebSocket | https://github.com/harshvardhan7395/Sentinel-gateway |

Layout: CSS grid, 2-3 columns on desktop, 1 column on mobile. Cards have a subtle border and hover lift effect.