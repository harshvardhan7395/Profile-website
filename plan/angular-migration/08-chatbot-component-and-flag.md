# Task 8: ChatbotComponent + feature flag

Status: Pending
Created: 2026-09-19
Completed: —

## Goal
Build the chat UI wired to `ProfileQaService`, and gate its rendering behind a build-time boolean flag so the whole feature can be hidden by flipping one value and rebuilding.

## Acceptance criteria
- should append a user message and a bot response when `send()` is called with non-empty text
- should do nothing when `send()` is called with empty or whitespace-only text
- should render `<app-chatbot>` when `FEATURE_FLAGS.chatbotEnabled` is `true`, and omit it when `false`

## Notes
- `src/app/config/feature-flags.ts`: `export const FEATURE_FLAGS = { chatbotEnabled: true } as const;` — a dedicated config file, not Angular's `environment.ts` prod/dev mechanism (that's for build configuration, not product feature toggles).
- `app.component.ts`: `chatbotEnabled = FEATURE_FLAGS.chatbotEnabled;` / `app.component.html`: `@if (chatbotEnabled) { <app-chatbot /> }` after the other sections.
- `src/app/features/chatbot/chatbot.component.ts/.html/.css` (the only feature with its own stylesheet): `isOpen = signal(false)` floating-button toggle; `messages = signal<ChatMessage[]>([])`; `draft` bound via `[(ngModel)]` (needs `FormsModule` in the component's `imports`); `send()` pushes a user message, calls `profileQa.answer(text)`, pushes the bot reply.
- UI: fixed bottom-right floating button + panel, message list (user right-aligned/accent, bot left-aligned/neutral, reusing existing `var(--color-*)` tokens), input row + send button. No avatars, no typing indicator, no markdown rendering needed.
- Auto-scroll the message list to the bottom when `messages()` changes (e.g. via a template scroll-anchor + `afterRenderEffect`).
- This is simple conditional rendering, not build-time tree-shaking — the chatbot code still ships in the bundle when the flag is `false`, it just isn't instantiated/rendered. That matches the confirmed scope.
