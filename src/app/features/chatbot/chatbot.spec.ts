import { TestBed } from '@angular/core/testing';
import { Chatbot } from './chatbot';

describe('Chatbot', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Chatbot] }).compileComponents();
  });

  it('should seed the message list with a greeting/hint message when the chatbot is created', () => {
    const fixture = TestBed.createComponent(Chatbot);
    const chatbot = fixture.componentInstance;

    const messages = chatbot.messages();
    expect(messages.length).toBe(1);
    expect(messages[0].role).toBe('bot');
    expect(messages[0].text.length).toBeGreaterThan(0);
  });

  it('should append a user message and a bot response when send() is called with non-empty text', () => {
    const fixture = TestBed.createComponent(Chatbot);
    const chatbot = fixture.componentInstance;
    const before = chatbot.messages().length;

    chatbot.draft = 'what are your skills?';
    chatbot.send();

    const messages = chatbot.messages();
    expect(messages.length).toBe(before + 2);
    expect(messages[messages.length - 2].role).toBe('user');
    expect(messages[messages.length - 2].text).toBe('what are your skills?');
    expect(messages[messages.length - 1].role).toBe('bot');
    expect(messages[messages.length - 1].text.length).toBeGreaterThan(0);
    expect(chatbot.draft).toBe('');
  });

  it('should do nothing when send() is called with empty or whitespace-only text', () => {
    const fixture = TestBed.createComponent(Chatbot);
    const chatbot = fixture.componentInstance;
    const before = chatbot.messages().length;

    chatbot.draft = '   ';
    chatbot.send();

    expect(chatbot.messages().length).toBe(before);
  });

  it('should have a tooltip on the fab button inviting the visitor to use the chatbot', () => {
    const fixture = TestBed.createComponent(Chatbot);
    fixture.detectChanges();
    const fab = (fixture.nativeElement as HTMLElement).querySelector('.chatbot__fab');

    expect(fab?.getAttribute('title')?.length).toBeGreaterThan(0);
  });

  it('should show a visible hint label next to the fab when closed, and hide it once opened', () => {
    const fixture = TestBed.createComponent(Chatbot);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const hint = el.querySelector('.chatbot__hint');
    expect(hint?.textContent?.trim().length).toBeGreaterThan(0);

    fixture.componentInstance.toggleOpen();
    fixture.detectChanges();

    expect(el.querySelector('.chatbot__hint')).toBeFalsy();
  });

  it('should open the chatbot when the hint label is clicked', () => {
    const fixture = TestBed.createComponent(Chatbot);
    fixture.detectChanges();
    const hint = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.chatbot__hint')!;

    hint.click();

    expect(fixture.componentInstance.isOpen()).toBe(true);
  });
});
