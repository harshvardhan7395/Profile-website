import { Component, signal } from '@angular/core';
import { PROFILE_DATA } from '../../data/profile-data';
import { ExperienceEntry } from '../../data/profile-data.models';

const COLLAPSED_BULLET_COUNT = 3;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  readonly experience = PROFILE_DATA.experience;
  readonly collapsedBulletCount = COLLAPSED_BULLET_COUNT;

  private readonly expandedKeys = signal<ReadonlySet<string>>(new Set());

  entryKey(entry: ExperienceEntry): string {
    return entry.company + entry.dateRange;
  }

  isCollapsible(entry: ExperienceEntry): boolean {
    return entry.bullets.length > COLLAPSED_BULLET_COUNT;
  }

  isExpanded(entry: ExperienceEntry): boolean {
    return this.expandedKeys().has(this.entryKey(entry));
  }

  isBulletHidden(entry: ExperienceEntry, index: number): boolean {
    return !this.isExpanded(entry) && index >= COLLAPSED_BULLET_COUNT;
  }

  toggle(entry: ExperienceEntry): void {
    const key = this.entryKey(entry);
    this.expandedKeys.update((keys) => {
      const next = new Set(keys);
      if (!next.delete(key)) {
        next.add(key);
      }
      return next;
    });
  }
}
