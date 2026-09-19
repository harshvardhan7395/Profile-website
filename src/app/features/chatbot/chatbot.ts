import { Component, ElementRef, ViewChild, afterRenderEffect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileQaService } from './profile-qa.service';
import { ChatMessage } from './chat-message.model';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef<HTMLElement>;

  readonly isOpen = signal(false);
  readonly messages = signal<ChatMessage[]>([]);
  draft = '';

  constructor(private readonly profileQa: ProfileQaService) {
    afterRenderEffect(() => {
      this.messages();
      this.scrollAnchor?.nativeElement.scrollIntoView({ block: 'end' });
    });
  }

  toggleOpen(): void {
    this.isOpen.update((v) => !v);
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
}
