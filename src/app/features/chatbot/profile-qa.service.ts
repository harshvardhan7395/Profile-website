import { Injectable } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { CHAT_INTENTS } from './chat-intents';

const FALLBACK =
  'I\'m not sure how to answer that. Try asking: "What are your skills?", "Tell me about FleetGate", or "What did you do at KYL Software?"';

@Injectable({ providedIn: 'root' })
export class ProfileQaService {
  private readonly data = PROFILE_DATA;

  answer(question: string): string {
    const normalized = question.toLowerCase().trim();
    if (!normalized) {
      return FALLBACK;
    }

    return this.matchEntity(normalized) ?? this.matchIntent(normalized) ?? FALLBACK;
  }

  private matchEntity(normalized: string): string | null {
    const allProjects = [...this.data.companyProjects, ...this.data.githubProjects];
    const project = allProjects.find((p) => normalized.includes(p.title.toLowerCase()));
    if (project) {
      return `${project.tagline} ${project.description}`;
    }

    const exp = this.data.experience.find((e) => normalized.includes(e.company.split(' ')[0].toLowerCase()));
    if (exp) {
      return `${exp.role} at ${exp.company} (${exp.dateRange}, ${exp.location}). ${exp.bullets.join(' ')}`;
    }

    return null;
  }

  private matchIntent(normalized: string): string | null {
    let bestScore = 0;
    let bestRespond: ((data: typeof PROFILE_DATA) => string) | null = null;

    for (const intent of CHAT_INTENTS) {
      const score = intent.keywords.filter((k) => normalized.includes(k)).length;
      if (score > bestScore) {
        bestScore = score;
        bestRespond = intent.respond;
      }
    }

    return bestRespond ? bestRespond(this.data) : null;
  }
}
