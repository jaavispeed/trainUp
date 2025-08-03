import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginFormService } from './login-form.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  providers: [AuthService, LoginFormService],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  authService = inject(AuthService);
  loginForm = inject(LoginFormService);

  form = this.loginForm.inicializarForm(false);
}
