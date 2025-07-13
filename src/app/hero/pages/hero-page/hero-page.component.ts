import { Component } from '@angular/core';
import { NavbarPageComponent } from "../../../shared/components/navbar/navbar.component";
import { ThemeControllerComponent } from "../../../shared/components/theme-controller/theme-controller.component";

@Component({
  selector: 'app-hero-page',
  imports: [NavbarPageComponent, ThemeControllerComponent],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent { }
