import { Component } from '@angular/core';
import { NavbarPageComponent } from '../../shared/navbar/navbar.component';
import { ThemeControllerComponent } from '../../shared/theme-controller/theme-controller.component';

@Component({
  selector: 'app-hero-page',
  imports: [NavbarPageComponent, ThemeControllerComponent],
  templateUrl: './hero.component.html',
})
export class HeroPageComponent {}
