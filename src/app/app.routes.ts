import { Routes } from '@angular/router';

import LoginComponent from './auth/login/login.component';
import { HeroPageComponent } from './components/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
