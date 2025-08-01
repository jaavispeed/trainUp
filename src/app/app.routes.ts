import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero/pages/hero-page/hero-page.component';
import LoginComponent from './auth/components/login/login.component';

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
