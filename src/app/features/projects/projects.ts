import { Component, signal } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
})
export class Projects {
  readonly companyProjects = PROFILE_DATA.companyProjects;
  readonly githubProjects = PROFILE_DATA.githubProjects;
  readonly activeTab = signal<'company' | 'github'>('company');

  setTab(tab: 'company' | 'github'): void {
    this.activeTab.set(tab);
  }
}
