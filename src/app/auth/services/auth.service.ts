import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface LoginResponse {
  email: string;
  password: string;
}

const loginUrl = '/api/Auth/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  postLogin() {
    this.http.post(loginUrl, {
      email: '',
      password: '',
    });
  }
}
