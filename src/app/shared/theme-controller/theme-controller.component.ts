import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-theme-controller',
  imports: [],
  templateUrl: './theme-controller.component.html',
})
export class ThemeControllerComponent implements OnInit {
  darkMode = signal(false);

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'winter';
    this.darkMode.set(savedTheme === 'dark');
    this.setTheme(savedTheme);
  }

  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.darkMode.set(checked);

    const newTheme = checked ? 'dark' : 'winter';
    this.setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
