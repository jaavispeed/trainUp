import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormService } from './register-form.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  providers: [AuthService, RegisterFormService],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  authService = inject(AuthService);
  registerForm = inject(RegisterFormService);

  form = this.registerForm.inicializarForm(false);

  crearCuenta() {
    if (this.form.invalid) {
      return;
    }

    const payload = this.form.getRawValue();

    this.authService.postRegister(payload).subscribe();
  }
}
