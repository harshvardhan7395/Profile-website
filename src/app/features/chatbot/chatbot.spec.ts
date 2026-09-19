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

  describe('when open on a small screen', () => {
    afterEach(() => {
      document.body.style.overflow = '';
    });

    async function openChatbot() {
      const fixture = TestBed.createComponent(Chatbot);
      fixture.detectChanges();
      fixture.componentInstance.toggleOpen();
      fixture.detectChanges();
      await fixture.whenStable();
      return fixture;
    }

    it('should lock page scroll on the document body when the chat panel is open', async () => {
      await openChatbot();

      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should release the page scroll lock when the chat panel is closed', async () => {
      const fixture = await openChatbot();

      fixture.componentInstance.toggleOpen();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(document.body.style.overflow).toBe('');
    });

    it('should release the page scroll lock when the component is destroyed while open', async () => {
      const fixture = await openChatbot();

      fixture.destroy();

      expect(document.body.style.overflow).toBe('');
    });

    it('should focus the message input when the chat panel opens', async () => {
      const fixture = await openChatbot();
      const input = (fixture.nativeElement as HTMLElement).querySelector('.chatbot__input');

      expect(input).toBeTruthy();
      expect(document.activeElement).toBe(input);
    });

    it('should close the chat panel when Escape is pressed while it is open', async () => {
      const fixture = await openChatbot();

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      expect(fixture.componentInstance.isOpen()).toBe(false);
    });

    it('should do nothing when Escape is pressed while the chat panel is closed', () => {
      const fixture = TestBed.createComponent(Chatbot);
      fixture.detectChanges();

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      expect(fixture.componentInstance.isOpen()).toBe(false);
    });

    it('should expose the panel as a dialog labelled "Ask me anything" when it is open', async () => {
      const fixture = await openChatbot();
      const panel = (fixture.nativeElement as HTMLElement).querySelector('.chatbot__panel');

      expect(panel?.getAttribute('role')).toBe('dialog');
      expect(panel?.getAttribute('aria-label')).toBe('Ask me anything');
    });
  });
});
