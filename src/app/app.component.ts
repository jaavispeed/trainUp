import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'trainup';
}
