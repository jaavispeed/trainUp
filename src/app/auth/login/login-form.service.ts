import { inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

export class LoginFormService {
  private fb = inject(FormBuilder);

  inicializarForm(disabled = true): FormGroup<LoginForm> {
    return this.fb.group<LoginForm>({
      username: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl<string>({ value: '', disabled: disabled }, {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
