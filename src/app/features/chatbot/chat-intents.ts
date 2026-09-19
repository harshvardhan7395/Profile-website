import { ProfileData } from '../../data/profile-data.models';

export interface ChatIntent {
  id: string;
  keywords: string[];
  respond: (data: ProfileData) => string;
}

export const CHAT_INTENTS: ChatIntent[] = [
  {
    id: 'about',
    keywords: ['about', 'who are you', 'summary', 'bio', 'yourself'],
    respond: (data) => data.about,
  },
  {
    id: 'skills',
    keywords: ['skill', 'tech stack', 'stack', 'technology', 'proficient'],
    respond: (data) => data.skillGroups.map((g) => `${g.label}: ${g.skills.join(', ')}`).join('\n'),
  },
  {
    id: 'experience',
    keywords: ['experience', 'work history', 'career'],
    respond: (data) => data.experience.map((e) => `${e.role} @ ${e.company} (${e.dateRange})`).join('\n'),
  },
  {
    id: 'projects',
    keywords: ['project', 'portfolio', 'github repo'],
    respond: (data) =>
      [...data.companyProjects, ...data.githubProjects].map((p) => `${p.title}: ${p.tagline}`).join('\n'),
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'college', 'study'],
    respond: (data) => data.education.map((e) => `${e.degree} — ${e.institution} (${e.dateRange})`).join('\n'),
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'linkedin', 'hire me', 'phone'],
    respond: (data) => data.hero.links.map((l) => `${l.label}: ${l.href}`).join(', ') + `. Phone: ${data.hero.phone}`,
  },
  {
    id: 'location',
    keywords: ['location', 'where are you', 'based', 'where do you live'],
    respond: (data) => data.hero.location,
  },
];
