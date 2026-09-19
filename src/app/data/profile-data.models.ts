export interface ContactLink {
  label: string;
  href: string;
  icon: 'email' | 'linkedin' | 'github';
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCv {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  title: string;
  location: string;
  cv: HeroCv;
  links: ContactLink[];
  stats: HeroStat[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
  accent?: boolean;
}

export interface ExperienceEntry {
  dateRange: string;
  location: string;
  role: string;
  company: string;
  bullets: string[];
}

export type CompanyBadgeVariant = 'kyl' | 'vebasoft' | 'hiredigital' | 'maverick';

export interface CompanyProject {
  title: string;
  badgeLabel: string;
  badgeVariant: CompanyBadgeVariant;
  tagline: string;
  description: string;
  tech: string[];
}

export interface GithubProject {
  title: string;
  repoUrl: string;
  tagline: string;
  description: string;
  tech: string[];
}

export interface EducationEntry {
  dateRange: string;
  location: string;
  degree: string;
  institution: string;
}

export interface OtherProjectEntry {
  date: string;
  title: string;
  description: string;
  tech: string[];
}

export interface FooterData {
  name: string;
  email: string;
}

export interface ProfileData {
  hero: HeroData;
  about: string;
  availability: string;
  skillGroups: SkillGroup[];
  experience: ExperienceEntry[];
  companyProjects: CompanyProject[];
  githubProjects: GithubProject[];
  education: EducationEntry[];
  otherProjects: OtherProjectEntry[];
  footer: FooterData;
}
