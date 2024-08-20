import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = '/api';
  private tokenKey = 'auth-token';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getToken(): string | null {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI0MTAxNDAyLCJleHAiOjE3MjQxMDg2MDJ9.oiFaFQuo-S_kSUNZa-vaZA7gEta2lcjZEG4cMJlXqJU';

    // return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  loginUser(email: string, confirmationCode: string): Observable<User> {
    const payload = {
      email,
      confirmationCode,
    };

    return this.http.post<any>('http://localhost:4000/api/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // toggle(todo: Todo): Observable<any> {
  //   const path = `/todos/${todo.id}`;
  //   return this.http.put<any>(path, { ...todo, completed: !todo.completed });
  // }
}
