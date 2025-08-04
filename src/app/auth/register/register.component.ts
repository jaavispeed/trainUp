import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormService } from './register-form.service';
import { finalize } from 'rxjs';
import { NavbarPageComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NavbarPageComponent],
  providers: [AuthService, RegisterFormService],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  authService = inject(AuthService);
  registerForm = inject(RegisterFormService);

  form = this.registerForm.inicializarForm(false);

  cargando = signal(false);

  crearCuenta() {
    this.cargando.set(true);
    if (this.form.invalid) {
      this.cargando.set(false);

      return;
    }

    const payload = this.form.getRawValue();

    this.authService
      .postRegister(payload)
      .pipe(
        finalize(() => {
          this.cargando.set(false);
        })
      )
      .subscribe();
  }
}
