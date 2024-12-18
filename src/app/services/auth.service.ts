import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/navbar/navbar.component';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
    this.isAuthSubject.next(!!this.token);
  }

  // token = localStorage.getItem('token');
  apiUrl = 'http://localhost:3001/api/';

  signup(data: any) {
    return this.http.post(this.apiUrl + 'signup', data);
  }

  login(data: any) {
    return this.http.post<any>(this.apiUrl + 'login', data).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthSubject.next(true);
        }
      })
    );
  }

  socialLogin(payload: { token: string; provider: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/social-login`, payload);
  }

  signOut() {
    localStorage.removeItem('token');
    this.isAuthSubject.next(false);
    return this.http.post(this.apiUrl + 'logout', null);
  }

  getUser(): Observable<User> {
    if (!this.token) {
      return throwError(() => new Error('No token found'));
    }
    console.log(this.token);

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<User>(this.apiUrl + 'user', { headers });
  }

  getUsers(): Observable<User[]> {
    if (!this.token) {
      return throwError(() => new Error('No token found'));
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<User[]>(this.apiUrl + 'users', { headers });
  }

  deleteUser(userId: string): Observable<any> {
    if (!this.token) {
      return throwError(() => new Error('No token found'));
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    console.log(userId);
    return this.http.delete(`${this.apiUrl}delete-user/${userId}`, { headers });
  }

  addUser(data: any): Observable<any> {
    if (!this.token) {
      return throwError(() => new Error('No token found'));
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.post(`${this.apiUrl}signup`, data, { headers });
  }

  updateUser(userId: string, data: any): Observable<any> {
    if (!this.token) {
      return throwError(() => new Error('No token found'));
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.patch(`${this.apiUrl}update-user/${userId}`, data, {
      headers,
    });
  }
}
