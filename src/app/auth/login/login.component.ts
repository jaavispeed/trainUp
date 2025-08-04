import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginFormService } from './login-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { NavbarPageComponent } from '../../shared/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ThemeControllerComponent } from '../../shared/theme-controller/theme-controller.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NavbarPageComponent, RouterLink, ThemeControllerComponent],
  providers: [AuthService, LoginFormService],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  authService = inject(AuthService);
  loginForm = inject(LoginFormService);

  form = this.loginForm.inicializarForm(false);

  cargando = signal(false);

  ingresar() {
    this.cargando.set(true);

    if (this.form.invalid) {
      this.cargando.set(false);
      return;
    }

    const payload = this.form.getRawValue();

    this.authService
      .postLogin(payload)
      .pipe(
        finalize(() => {
          this.cargando.set(false);
        })
      )
      .subscribe();
  }
}
