import { Component } from '@angular/core';
import { NavbarPageComponent } from '../../shared/navbar/navbar.component';
import { ThemeControllerComponent } from '../../shared/theme-controller/theme-controller.component';
import { RouterLink } from '@angular/router';
import { PremiumPriceComponent } from "../premium-price/premium-price.component";
import { FreePriceComponent } from '../free-price/free-price.component';

@Component({
  selector: 'app-hero-page',
  imports: [NavbarPageComponent, ThemeControllerComponent, RouterLink, PremiumPriceComponent, FreePriceComponent],
  templateUrl: './hero.component.html',
})
export class HeroPageComponent {}
