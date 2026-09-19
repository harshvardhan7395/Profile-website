import { ProfileData } from './profile-data.models';

export const PROFILE_DATA: ProfileData = {
  hero: {
    name: 'Harshvardhan Akhare',
    title: 'Software Engineer · Full Stack',
    location: 'Coburg, Germany',
    phone: '+49 157 51514445',
    links: [
      { label: 'harshvardhan.akhare@gmail.com', href: 'mailto:harshvardhan.akhare@gmail.com', icon: 'email' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/harshvardhan-akhare', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/harshvardhan7395', icon: 'github' },
    ],
  },

  about:
    'Full Stack Engineer with 6+ years of experience designing and delivering production systems ' +
    'end-to-end, specializing in React, Angular, Node.js (Express/NestJS), Python (Django), and ' +
    'TypeScript. Proven track record of owning backend architecture, API design, and CI/CD automation ' +
    'across four companies — including secure infrastructure for a German security authority. ' +
    'Experienced with Docker, Kubernetes, PostgreSQL, and AI-assisted development workflows (Claude ' +
    'Code, GitHub Copilot).',

  skillGroups: [
    { label: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python'] },
    { label: 'Frontend', skills: ['Angular', 'React', 'Next.js', 'HTML5', 'CSS3', 'NGXS', 'Angular Material', 'Tailwind CSS'] },
    { label: 'Backend', skills: ['NestJS', 'Express', 'Django', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'CI/CD', 'Jest'] },
    { label: 'Tools', skills: ['GitLab', 'Git', 'Postman', 'WebStorm', 'VS Code', 'PyCharm'] },
    { label: 'AI Tools', skills: ['Claude Code', 'GitHub Copilot', 'OpenAI Codex'], accent: true },
    { label: 'Languages', skills: ['English (C1)', 'German (A2)'] },
  ],

  experience: [
    {
      dateRange: 'May 2025 – Present',
      location: 'Bamberg, Germany',
      role: 'Software Development Engineer',
      company: 'KYL Software GmbH',
      bullets: [
        'Designed and built a secure network bridge (Gateway A→B) in Node.js for a German security authority, replacing a third-party solution and giving the team full control over cross-server microservice communication (~20K requests/day).',
        'Implemented HTTP-to-WebSocket tunnelling, dual Ed25519 signature verification, idempotency guarantees, and Redis response caching.',
        'Containerised backend services using Docker, improving deployment consistency across development and production environments.',
        'Implemented cross-cutting middleware layers (authentication, access control, request signing, idempotency, caching) with full TDD coverage and structured observability (Winston logging + Prometheus metrics).',
        'Built ExpressJS APIs with OpenAPI-driven contract validation, including custom JSON Patch middleware and schema-driven request enforcement, ensuring API reliability across consumer teams.',
        "Led development of a financial controlling backend (Node.js/Express, PostgreSQL/Sequelize) for Lupp Facility Management GmbH — designed the data model for contracts, task orders, and cost positions, and delivered OAuth2 role-based authentication, Excel reporting, data import pipelines, and a HATEOAS middleware layer.",
      ],
    },
    {
      dateRange: 'Feb 2023 – Dec 2024',
      location: 'Rödental, Germany',
      role: 'Software Development Engineer',
      company: 'vebasoft GmbH',
      bullets: [
        'Improved an intuitive web application tailored for advanced football scouting and analytics using Angular, Angular Material, and Chart.js.',
        'Utilised NestJS to process football match datasets and integrated data from 3+ sources for real-time analytics.',
        'Utilised NGXS state management and implemented backend testing with Jest, ensuring efficient data handling, code reliability, and high-quality APIs.',
        'Designed and automated the GitLab CI/CD pipeline end-to-end, reducing deployment times by 30% and enabling multiple production releases per week.',
        'Worked directly with clients to translate requirements into features — redesigned the player profile UI and score visualisation module, boosting user engagement by 50%.',
      ],
    },
    {
      dateRange: 'Nov 2021 – Dec 2022',
      location: 'Mumbai, India',
      role: 'Software Development Engineer',
      company: 'Hire Digital',
      bullets: [
        'Redesigned and redeveloped the talent-matching website using Next.js, including developing a scalable blog post component capable of managing 300+ blogs.',
        "Developed a new client registration interface using ReactJS and Django REST APIs, and enhanced the call-scheduling component of HireDigital's React-Django web portal.",
        'Developed GitHub Actions scripts for multiple web platforms of the company for testing, building, and deployment.',
      ],
    },
    {
      dateRange: 'Dec 2019 – Sep 2021',
      location: 'Pune, India',
      role: 'Software Development Engineer',
      company: 'Maverick Labs',
      bullets: [
        'Built and maintained multiple full-stack web applications including a supply chain audit platform for 20+ European coal mine sites and a rumour monitoring system across 10+ countries, using Django REST Framework, Jinja, and Tailwind CSS.',
        'Designed and implemented backend features such as supplier questionnaires and data-driven workflows, ensuring reliability through TDD (pytest) and structured Agile delivery.',
        'Developed an educational platform using Strapi (Node.js) and ReactJS, connecting students from 170+ colleges with job opportunities, including modules for registration, document uploads, and eligibility filtering.',
      ],
    },
  ],

  companyProjects: [
    {
      title: 'Secure Network Gateway',
      badgeLabel: 'KYL Software',
      badgeVariant: 'kyl',
      tagline: 'Bidirectional WebSocket tunnel between two isolated government server environments with Ed25519 authentication, Redis caching, and full observability.',
      description: 'Designed and implemented a secure bidirectional communication bridge for a German security authority, connecting two isolated server environments previously limited to unidirectional proxy communication. The gateway establishes a persistent WebSocket tunnel at startup, routing HTTP requests from external microservices through to internal services and returning responses via the same channel. Built with dual Ed25519 signature verification, request idempotency, Redis response caching, and source-IP forwarding middleware — backed by full TDD coverage and structured observability via Winston logging and Prometheus metrics.',
      tech: ['Node.js', 'Express', 'WebSocket', 'Ed25519', 'Redis', 'Docker'],
    },
    {
      title: 'Financial Controlling API',
      badgeLabel: 'KYL Software',
      badgeVariant: 'kyl',
      tagline: 'RESTful financial backend for facility management with OpenAPI validation, OAuth2 auth, and HATEOAS — eliminating 4 hours of manual work per project.',
      description: 'Built a RESTful financial controlling backend for Lupp Facility Management GmbH, managing contracts, task orders, cost positions, and utilisation logs. Developed an OpenAPI-driven schema validation middleware for PATCH requests that automated a previously manual validation process, saving 4 hours of developer time per project. Implemented role-based authentication with OAuth2, Excel report generation, data import pipelines, and a HATEOAS middleware layer — all backed by PostgreSQL with Sequelize ORM and full TDD coverage.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'OAuth2', 'OpenAPI'],
    },
    {
      title: 'Football Scouting & Analytics Platform',
      badgeLabel: 'vebasoft',
      badgeVariant: 'vebasoft',
      tagline: 'Real-time football analytics platform integrating 3+ data sources, reducing deployment times by 30% and boosting user engagement by 50%.',
      description: 'Developed and enhanced a web application for advanced football scouting and analytics, integrating data from 3+ sources for real-time match analysis. Built NestJS backend services to process match datasets, implemented NGXS state management, and added Jest-based backend testing. Improved the player profile UI and score visualisation module, boosting user engagement by 50%. Automated deployment via GitLab CI/CD, reducing deployment times by 30%.',
      tech: ['Angular', 'Angular Material', 'NestJS', 'Chart.js', 'NGXS', 'Jest'],
    },
    {
      title: 'Talent-Matching Website Redesign',
      badgeLabel: 'Hire Digital',
      badgeVariant: 'hiredigital',
      tagline: 'Next.js redesign of a talent marketplace with a scalable blog component managing 300+ posts and automated CI/CD pipelines.',
      description: "Redesigned and redeveloped the company's talent-matching website using Next.js, delivering a scalable blog post component capable of managing 300+ blogs. Established GitHub Actions pipelines for automated testing, building, and deployment across multiple web platforms, significantly improving release reliability.",
      tech: ['Next.js', 'React', 'TypeScript', 'GitHub Actions'],
    },
    {
      title: 'Client Registration & Call Scheduling Portal',
      badgeLabel: 'Hire Digital',
      badgeVariant: 'hiredigital',
      tagline: "Client onboarding and call-scheduling portal built with React and Django REST APIs for HireDigital's web portal.",
      description: "Built a new client registration interface using ReactJS and Django REST APIs, streamlining the client onboarding experience. Enhanced the call-scheduling component of HireDigital's React-Django web portal, improving the end-to-end engagement workflow for both clients and the internal team.",
      tech: ['React', 'Django', 'Django REST Framework'],
    },
    {
      title: 'Supply Chain Audit Platform',
      badgeLabel: 'Maverick Labs',
      badgeVariant: 'maverick',
      tagline: 'Compliance audit platform serving 20+ European coal mine sites with structured supplier questionnaire workflows.',
      description: 'Built a full-stack supply chain audit platform serving 20+ European coal mine sites, enabling suppliers to complete structured questionnaires and auditors to track compliance through data-driven workflows. Developed with Django REST Framework and Tailwind CSS, with reliability ensured through test-driven development using pytest and structured Agile delivery.',
      tech: ['Django', 'Django REST Framework', 'Tailwind CSS', 'pytest'],
    },
    {
      title: 'Rumour Monitoring System',
      badgeLabel: 'Maverick Labs',
      badgeVariant: 'maverick',
      tagline: 'Cross-country misinformation tracker monitoring information spread in near real-time across 10+ countries.',
      description: 'Built a cross-country rumour monitoring system tracking information spread across 10+ countries, enabling analysts to identify and respond to misinformation in near real-time. Developed using Django and Jinja templating with structured Agile delivery practices.',
      tech: ['Django', 'Jinja', 'Python'],
    },
    {
      title: 'Educational Platform — College to Career',
      badgeLabel: 'Maverick Labs',
      badgeVariant: 'maverick',
      tagline: 'Job-matching platform connecting students from 170+ colleges with employment opportunities via eligibility-based filtering.',
      description: 'Developed an educational platform connecting students from 170+ colleges with job opportunities. Built with Strapi (Node.js) and ReactJS, the platform included modules for student registration, document uploads, and eligibility-based filtering of job listings, significantly expanding access to employment for underrepresented students.',
      tech: ['Strapi', 'Node.js', 'React', 'PostgreSQL'],
    },
  ],

  githubProjects: [
    {
      title: 'Workshop Job Board',
      repoUrl: 'https://github.com/harshvardhan7395/Workshop-Job-Board',
      tagline: 'Real-time automotive workshop job assignment with drag-and-drop, optimistic UI, and three-layer test coverage.',
      description: 'Real-time job assignment for automotive workshops with drag-and-drop, optimistic UI, and NgRx state management. Three-layer testing with Jest unit tests, effect tests, and Playwright e2e assertions.',
      tech: ['Angular 17', 'NgRx', 'Socket.io', 'TypeScript'],
    },
    {
      title: 'Engagement Briefing Tool',
      repoUrl: 'https://github.com/harshvardhan7395/Engagement-Briefing-Tool',
      tagline: 'RAG pipeline converting consulting notes into searchable briefings using Claude AI and pgvector with hallucination prevention.',
      description: 'RAG pipeline converting unstructured consulting notes into searchable briefings using vector embeddings and LLMs. Uses 500-token chunks with overlap and a 0.75 similarity threshold to prevent hallucination.',
      tech: ['Next.js 14', 'Claude AI', 'pgvector', 'Supabase'],
    },
    {
      title: 'Club Gap API',
      repoUrl: 'https://github.com/harshvardhan7395/Club-gap-api',
      tagline: 'Spatial REST API identifying optimal gym locations via H3 hexagonal demand scoring with GDPR-compliant aggregation.',
      description: 'Spatial REST API that analyses gym check-in data via H3 hexagonal grid to identify optimal locations for new club openings. GDPR-compliant — all results aggregated at cell level with no member IDs exposed.',
      tech: ['NestJS', 'PostgreSQL', 'Prisma', 'H3'],
    },
    {
      title: 'Nexus Admin',
      repoUrl: 'https://github.com/harshvardhan7395/Nexus-Admin',
      tagline: 'Distributed systems dashboard for live P2P sync conflict visualisation and TLS certificate lifecycle monitoring.',
      description: 'Distributed systems admin dashboard for P2P file sync observability: live side-by-side conflict diffs with vector clock visualisation, and TLS certificate lifecycle monitoring across node networks.',
      tech: ['React 18', 'FastAPI', 'WebSocket', 'Python'],
    },
    {
      title: 'Reward Notification Gateway',
      repoUrl: 'https://github.com/harshvardhan7395/Reward-Notification-Gateway',
      tagline: 'Scalable real-time reward notifications via Redis Pub/Sub fan-out across multiple WebSocket server pods.',
      description: "Horizontally scalable real-time reward push notifications using Redis Pub/Sub fan-out across multiple WebSocket server pods. Any pod can publish; only the pod holding the target user's connection delivers — no sticky sessions required.",
      tech: ['NestJS', 'Redis Pub/Sub', 'Socket.io', 'JWT'],
    },
    {
      title: 'Sentinel Gateway',
      repoUrl: 'https://github.com/harshvardhan7395/Sentinel-gateway',
      tagline: 'Secure HTTP-to-WebSocket bridge with dual Ed25519 signature verification for security-sensitive government environments.',
      description: 'Secure HTTP-to-WebSocket bridge with dual Ed25519 signature verification, Redis response caching, and idempotency enforcement for security-sensitive environments.',
      tech: ['Node.js', 'TypeScript', 'WebSocket', 'Redis'],
    },
    {
      title: 'Onboarding & Payments Pipeline',
      repoUrl: 'https://github.com/harshvardhan7395/Onboarding-Payments-Pipeline-Service',
      tagline: 'Production-grade payments pipeline for a micro-mobility operator with event-driven state machines, fraud detection, and country-based routing.',
      description: 'Backend prototype addressing four core challenges in payments at scale: onboarding funnel drop-off tracked via structured logging, async payment observability via correlation IDs threaded through GCP Pub/Sub, a weighted four-signal fraud scorer using Redis atomic counters, and runtime country-based payment routing via Firestore config — no redeployment needed. Built with idempotent event processing and optimistic concurrency control.',
      tech: ['Node.js', 'TypeScript', 'GCP Pub/Sub', 'Firestore', 'Redis', 'Fastify'],
    },
    {
      title: 'Authz-Engine',
      repoUrl: 'https://github.com/harshvardhan7395/Authz-engine',
      tagline: 'Explainable ABAC + ReBAC authorization engine for multi-tenant platforms with hierarchical organizational structures.',
      description: "Authorization engine for B2B platforms serving organizations with internal hierarchies (institution → department → group → member), combining Zanzibar-style relation tuples with ABAC gates so a role held in one organizational unit doesn't implicitly grant access elsewhere. Every grant decision returns a full explanation chain, while denials stay opaque to callers but generate complete audit traces internally. Demonstrates materialized permission tables and multi-tenant isolation via PostgreSQL Row Level Security.",
      tech: ['TypeScript', 'Bun', 'Effect.ts', 'Hono', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'FleetGate',
      repoUrl: 'https://github.com/harshvardhan7395/FleetGate',
      tagline: 'Multi-tenant equipment fleet admin console with JWT-based tenant isolation, keyset-cursor pagination benchmarking, and a simulate-before-publish rule engine.',
      description: 'Admin console for managing equipment fleets across isolated tenants, with tenant scoping enforced via JWT claims plus EF Core global query filters. Includes a built-in pagination comparison panel benchmarking keyset-cursor vs. offset/limit strategies across ~500k rows, virtualized Angular CDK scrolling with ARIA accessibility, a rule engine that lets admins simulate rule changes before publishing them, and immutable, role-permission-enforced audit trails at the database level. Ships a /demo/seed endpoint that generates ~1,000 test tenants, backed by 23 Jasmine/Karma frontend unit specs.',
      tech: ['.NET 9', 'ASP.NET Core', 'EF Core 9', 'Npgsql', 'Angular 19', 'Angular CDK', 'RxJS', 'PostgreSQL 16', 'Docker Compose'],
    },
    {
      title: 'GroundTruth-Sync',
      repoUrl: 'https://github.com/harshvardhan7395/GroundTruth-Sync',
      tagline: 'Backend reliability prototype reconciling conflicting CRM and field-service events for heat pump installations via idempotent, retry-safe webhook processing.',
      description: 'Simulates two upstream systems — a CRM and a field-service tool — sending conflicting events about heat pump installations, reconciling conflicts so field execution data wins over business intent before pushing downstream. Implements idempotent webhook handling via composite keys and atomic DB claims, a "fast ack, deferred push" architecture with background processing, exponential backoff retries (1s–60s, up to 6 attempts via tenacity), periodic staleness detection, structured JSON logging with correlation IDs, HMAC-SHA256 webhook signature verification, and Prometheus metrics with pre-provisioned Grafana dashboards. Validated with real integration tests against PostgreSQL. Framed as a portfolio prototype for a backend role in energy/utilities.',
      tech: ['Python 3.12', 'FastAPI', 'SQLAlchemy (async)', 'PostgreSQL', 'Docker Compose', 'structlog', 'tenacity', 'httpx', 'APScheduler', 'Pydantic'],
    },
  ],

  education: [
    {
      dateRange: 'Aug 2017 – May 2020',
      location: 'Pune, India',
      degree: 'Master of Science — Industrial Mathematics with Computer Applications',
      institution: 'Fergusson College',
    },
    {
      dateRange: 'Jun 2014 – May 2017',
      location: 'Mumbai, India',
      degree: 'Bachelor of Science — Mathematics',
      institution: 'University of Mumbai',
    },
  ],

  otherProjects: [
    {
      date: 'Sep 2019',
      title: 'Location-Based Augmented Reality for Indoor Navigation',
      description: 'Built an AR Android application facilitating indoor navigation inside a college campus.',
      tech: ['C#', 'Unity', 'SQLite'],
    },
  ],

  footer: {
    name: 'Harshvardhan Akhare',
    email: 'harshvardhan.akhare@gmail.com',
  },
};
