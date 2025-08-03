import { inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface RegisterForm {
  name: FormControl<string>;
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  role: FormControl<string>;
}

export class RegisterFormService {
  private fb = inject(FormBuilder);

  inicializarForm(disabled = true): FormGroup<RegisterForm> {
    return this.fb.group<RegisterForm>({
      name: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      email: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      username: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      role: new FormControl<string>({ value: 'user', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
