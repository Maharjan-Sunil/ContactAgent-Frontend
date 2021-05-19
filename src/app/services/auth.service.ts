import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
// import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Url } from '../config/url';

@Injectable()
export class AuthService {
  constructor(private router: Router,
    private http: HttpClient,
    private baseUrl: Url) {
  }

  user = {
    name: 'sunil',
    admin: true
  }
  secretKey = "6LcbkM8aAAAAADlt4iXjQ1qEDoecghic0T4JZYg7";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  checkCaptcha(captchaResponse) {
    let obj = {
      secret: this.secretKey,
      response: captchaResponse
    }
    return this.http.post(this.baseUrl.verifyUrl, obj, this.httpOptions)
  }

  login(credentials) {
    return this.http.post(this.baseUrl.rootUrl + "token/login", JSON.stringify(credentials), this.httpOptions)
      .map(response => {
        let result = response;
        if (result) {
          localStorage.setItem('token', result.toString());
          return true;
        }
        return false;
      });
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return false //tokenNotExpired();
  }

  get currentUser() {
    let details = localStorage.getItem('token');
    return this.user;
  }
}

