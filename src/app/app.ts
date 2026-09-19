import { Component } from '@angular/core';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Education } from './features/education/education';
import { Footer } from './features/footer/footer';

@Component({
  imports: [Hero, About, Skills, Experience, Projects, Education, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
