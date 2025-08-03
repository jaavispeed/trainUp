import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Login {
  username: string;
  password: string;
}

export interface Register {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

const baseUrl = 'http://localhost:5112/api/Users';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  postLogin(login: Login) {
    return this.http.post(`${baseUrl}/Login`, login);
  }

  postRegister(register: Register) {
    return this.http.post(`${baseUrl}/Register`, register);
  }
}
