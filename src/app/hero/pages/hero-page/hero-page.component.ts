import { Component } from '@angular/core';
import { NavbarPageComponent } from "../../../shared/pages/navbar-page/navbar-page.component";

@Component({
  selector: 'app-hero-page',
  imports: [NavbarPageComponent,NavbarPageComponent],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent { }
