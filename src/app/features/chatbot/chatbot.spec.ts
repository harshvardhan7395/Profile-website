import { TestBed } from '@angular/core/testing';
import { Chatbot } from './chatbot';

describe('Chatbot', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Chatbot] }).compileComponents();
  });

  it('should append a user message and a bot response when send() is called with non-empty text', () => {
    const fixture = TestBed.createComponent(Chatbot);
    const chatbot = fixture.componentInstance;

    chatbot.draft = 'what are your skills?';
    chatbot.send();

    const messages = chatbot.messages();
    expect(messages.length).toBe(2);
    expect(messages[0].role).toBe('user');
    expect(messages[0].text).toBe('what are your skills?');
    expect(messages[1].role).toBe('bot');
    expect(messages[1].text.length).toBeGreaterThan(0);
    expect(chatbot.draft).toBe('');
  });

  it('should do nothing when send() is called with empty or whitespace-only text', () => {
    const fixture = TestBed.createComponent(Chatbot);
    const chatbot = fixture.componentInstance;

    chatbot.draft = '   ';
    chatbot.send();

    expect(chatbot.messages().length).toBe(0);
  });
});
