import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Login {
  email: string;
  password: string;
}

const loginUrl = '/api/Auth/login';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  postLogin(login: Login) {
    this.http.post(loginUrl, login);
  }
}
