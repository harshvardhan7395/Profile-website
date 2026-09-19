import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild, afterRenderEffect, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileQaService } from './profile-qa.service';
import { ChatMessage } from './chat-message.model';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
  host: { '(document:keydown.escape)': 'close()' },
})
export class Chatbot {
  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef<HTMLElement>;
  @ViewChild('messageInput') private messageInput?: ElementRef<HTMLInputElement>;

  private readonly document = inject(DOCUMENT);
  private readonly profileQa = inject(ProfileQaService);

  readonly hintLabel = 'Ask me anything 👋';
  readonly tooltip = 'Ask me about my skills, experience, or projects';

  readonly isOpen = signal(false);
  readonly messages = signal<ChatMessage[]>([this.createGreeting()]);
  draft = '';

  constructor() {
    effect((onCleanup) => {
      if (!this.isOpen()) {
        return;
      }
      const body = this.document.body;
      const previousOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
      onCleanup(() => (body.style.overflow = previousOverflow));
    });

    afterRenderEffect(() => {
      if (this.isOpen()) {
        this.messageInput?.nativeElement.focus();
      }
    });

    afterRenderEffect(() => {
      this.messages();
      this.scrollAnchor?.nativeElement.scrollIntoView({ block: 'end' });
    });
  }

  toggleOpen(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  send(): void {
    const text = this.draft.trim();
    if (!text) {
      return;
    }

    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', text, timestamp: Date.now() };
    const answer = this.profileQa.answer(text);
    const botMessage: ChatMessage = { id: crypto.randomUUID(), role: 'bot', text: answer, timestamp: Date.now() };

    this.messages.update((m) => [...m, userMessage, botMessage]);
    this.draft = '';
  }

  private createGreeting(): ChatMessage {
    return {
      id: crypto.randomUUID(),
      role: 'bot',
      text: `Hi! ${this.tooltip} — try "Tell me about FleetGate" or "What are your skills?"`,
      timestamp: Date.now(),
    };
  }
}
