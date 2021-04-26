import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router, private http: HttpClient) { }
  
  get() {
    return localStorage.getItem('auth_token');
  }

  remove() {
    localStorage.removeItem('auth_token');
    this.router.navigateByUrl('')
  }

  isValid() {
    const token = this.get();
    if (token) {
      return true;
    }
    return false;
  }

  loggedIn() {
    return this.isValid();
  }


}
