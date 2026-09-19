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

    return this.matchTech(normalized);
  }

  private matchTech(normalized: string): string | null {
    const allTech = new Set<string>();
    this.data.skillGroups.forEach((g) => g.skills.forEach((s) => allTech.add(s)));
    [...this.data.companyProjects, ...this.data.githubProjects].forEach((p) => p.tech.forEach((t) => allTech.add(t)));

    const tech = [...allTech]
      .filter((t) => normalized.includes(t.toLowerCase()))
      .sort((a, b) => b.length - a.length)[0];
    if (!tech) {
      return null;
    }

    const skillGroup = this.data.skillGroups.find((g) =>
      g.skills.some((s) => s.toLowerCase() === tech.toLowerCase()),
    );
    const projects = [...this.data.companyProjects, ...this.data.githubProjects].filter((p) =>
      p.tech.some((t) => t.toLowerCase() === tech.toLowerCase()),
    );

    const parts: string[] = [];
    if (skillGroup) {
      parts.push(`${tech} is part of my ${skillGroup.label} skillset.`);
    }
    if (projects.length) {
      parts.push(`I've used it on: ${projects.map((p) => p.title).join(', ')}.`);
    }
    if (!parts.length) {
      parts.push(`I have some experience with ${tech}.`);
    }
    return parts.join(' ');
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
