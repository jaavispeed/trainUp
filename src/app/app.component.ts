import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'trainup';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') || 'winter';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}
