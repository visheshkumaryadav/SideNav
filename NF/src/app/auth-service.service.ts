import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { login } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedIn: boolean = false;
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(formData: any) {
    return this.http.post<any>("http://localhost:8080/login", formData)
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
  signUp(data: any): Observable<any> {
    return this.http.post(`http://localhost:8080/registerUser1`, data)
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(`http://localhost:8080/registerUser1`, data)
  }


  getEmployeeList(): Observable<any> {
    return this.http.get(`http://localhost:8080`);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/${id}`, data);
  }


  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/${id}`);
  }

  // addEmployee(data: any) {
  //   this.http.post('http://localhost:3000/registerUser1', data, { observe: 'response' })
  //     .subscribe((result) => {
  //       this.isSellerLoggedIn.next(true);
  //       localStorage.setItem('registerUser1', JSON.stringify(result.body))
  //       this.router.navigate(['home']);
  //       console.warn('result', result);

  //     });
  }


