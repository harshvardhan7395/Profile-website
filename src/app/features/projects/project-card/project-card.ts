import { Component, input, signal } from '@angular/core';
import { CompanyBadgeVariant } from '../../../data/profile-data.models';
import { GithubIcon } from '../../../shared/icons/github-icon';

@Component({
  selector: 'app-project-card',
  imports: [GithubIcon],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly title = input.required<string>();
  readonly tagline = input.required<string>();
  readonly description = input.required<string>();
  readonly tech = input<string[]>([]);
  readonly badgeLabel = input<string>();
  readonly badgeVariant = input<CompanyBadgeVariant>();
  readonly repoUrl = input<string>();

  readonly expanded = signal(false);

  toggleExpanded(): void {
    this.expanded.update((v) => !v);
  }
}
