import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero/pages/hero-page/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
