# Task 10: Unified Projects Section — HTML

Status: Completed
Created: 2026-06-24
Completed: 2026-06-24

## Goal
Replace the existing "GitHub Projects" section in index.html with a single unified "Projects" section containing all company and personal GitHub projects, each card tagged with a coloured origin badge.

## Acceptance criteria
- should display all 14 project cards in one section
- should show a coloured origin badge (company name or "GitHub") on every card
- should include a GitHub link only on open-source cards (company work is proprietary)
- should render stack tags (chips) on every card

## Project data
Fill in the `description` fields marked with `TODO` before implementing.

---

### Company Projects

#### 1. Secure Network Gateway
- **Company:** KYL Software GmbH
- **Badge colour:** purple (`--badge-kyl`)
- **Description:** So we had a situation where we wanted to build a secure communication between 2 isolated server for the german security authorities, the existing setup had a problem of communicating between the internal-->external server through proxy. but we wanted bi directional data transmission between the servers which hosted numerous microservices. So i implemented a network gateway which would open a websocket tunnel connection between the internal and external servers at the start of the application with dual Ed25519 signature verification, idempotency, response caching using Redis, and source-IP forwarding middleware. so here an HTTP request from in external server goes through the network-gateway and is made to the internal server's microservice which then returns the response which we send back through the network-bridge to the external server's mircro service.Containerized backend services using Docker, improving deployment
  consistency across development and production environments.
  Implemented cross-cutting middleware layers (authentication, access control,
  request signing, idempotency, caching) with full TDD coverage and structured
  observability (Winston logging + Prometheus metrics)
- **Stack tags:** Node.js, Express, WebSocket, Ed25519, Redis, Docker
- **Link:** none (proprietary)

#### 2. Financial Controlling API (Lupp Facility Management)
- **Company:** KYL Software GmbH
- **Badge colour:** purple (`--badge-kyl`)
- **Description:** Used OpenaAPI and expressjs to create a secure backend for LUPP facility management. Developed a schema validation middleware for OpenAPI PATCH requests, automating a previously manual process and saving 4 hours of developer time per project.Built a RESTful API backend (Node.js/Express) for financial controlling at Lupp
  Facility Management GmbH, managing contracts, task orders, cost positions,
  and utilization logs. Implemented features including role-based authentication
  using OAuth2, Excel report generation, data import pipelines, and a HATEOAS
  middleware layer, backed by PostgreSQL with Sequelize ORM  with full TDD coverage and structured
  observability (Winston logging + Prometheus metrics).
- **Stack tags:** Node.js, Express, PostgreSQL, Sequelize, OAuth2, HATEOAS, OpenAPI
- **Link:** none (proprietary)

#### 3. Football Scouting & Analytics Platform
- **Company:** vebasoft GmbH
- **Badge colour:** green (`--badge-vebasoft`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
- **Stack tags:** Angular, Angular Material, NestJS, Chart.js, NGXS, Jest
- **Link:** none (proprietary)

#### 4. Talent-Matching Website Redesign
- **Company:** Hire Digital
- **Badge colour:** orange (`--badge-hiredigital`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
- **Stack tags:** Next.js, React, TypeScript
- **Link:** none (proprietary)

#### 5. Client Registration & Call Scheduling Portal
- **Company:** Hire Digital
- **Badge colour:** orange (`--badge-hiredigital`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
- **Stack tags:** React, Django, Django REST Framework
- **Link:** none (proprietary)

#### 6. Supply Chain Audit Platform
- **Company:** Maverick Labs
- **Badge colour:** red (`--badge-maverick`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
- **Stack tags:** Django, Django REST Framework, Tailwind CSS, pytest
- **Link:** none (proprietary)

#### 7. Rumour Monitoring System
- **Company:** Maverick Labs
- **Badge colour:** red (`--badge-maverick`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
- **Stack tags:** Django, Jinja, Python
- **Link:** none (proprietary)

#### 8. Educational Platform (College–Job Connect)
- **Company:** Maverick Labs
- **Badge colour:** red (`--badge-maverick`)
- **Description:** take contents from the experience section which i currently have in the website section for this company
Int 
- **Stack tags:** Strapi, Node.js, React, PostgreSQL
- **Link:** none (proprietary)

---

### GitHub (Open Source) Projects

#### 9. Workshop Job Board
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** Real-time job assignment for automotive workshops with drag-and-drop, optimistic UI, and NgRx state management.
- **Stack tags:** Angular 17, NgRx, Socket.io, TypeScript
- **Link:** https://github.com/harshvardhan7395/Workshop-Job-Board

#### 10. Engagement Briefing Tool
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** RAG pipeline converting unstructured consulting notes into searchable briefings using vector embeddings and LLMs.
- **Stack tags:** Next.js 14, Claude AI, pgvector, Supabase
- **Link:** https://github.com/harshvardhan7395/Engagement-Briefing-Tool

#### 11. Club Gap API
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** Spatial REST API that analyses gym check-in data via H3 hexagonal grid to identify optimal locations for new club openings.
- **Stack tags:** NestJS, PostgreSQL, Prisma, H3
- **Link:** https://github.com/harshvardhan7395/Club-gap-api

#### 12. Nexus Admin
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** Distributed systems admin dashboard for P2P file sync observability: live conflict diffs and TLS certificate lifecycle monitoring.
- **Stack tags:** React 18, FastAPI, WebSocket, Python
- **Link:** https://github.com/harshvardhan7395/Nexus-Admin

#### 13. Reward Notification Gateway
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** Horizontally scalable real-time reward push notifications using Redis Pub/Sub fan-out across multiple WebSocket server pods.
- **Stack tags:** NestJS, Redis Pub/Sub, Socket.io, JWT
- **Link:** https://github.com/harshvardhan7395/Reward-Notification-Gateway

#### 14. Sentinel Gateway
- **Badge:** GitHub (blue, `--badge-github`)
- **Description:** Secure HTTP-to-WebSocket bridge with dual Ed25519 signature verification, Redis caching, and idempotency for security-sensitive environments.
- **Stack tags:** Node.js, TypeScript, WebSocket, Redis
- **Link:** https://github.com/harshvardhan7395/Sentinel-gateway

## Notes
- Fill in all `TODO` description fields before handing off to `/implement`
- Company cards have no external link — the card is not an `<a>` tag, just a `<div>`
- GitHub cards link to the repo and open in a new tab
- Section replaces `<section id="projects">` in index.html