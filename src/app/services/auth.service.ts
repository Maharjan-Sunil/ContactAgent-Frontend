import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router:Router,
              private http: HttpClient) {
  } 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };

  // baseUrl:string="http://api.ourfreeshare.com/api/token/"; //for live
  baseUrl:string="http://localhost:62215/api/token/"; //for local

    login(credentials) { 
      return this.http.post(this.baseUrl+"login",JSON.stringify(credentials),this.httpOptions)
                      .map(response => {
                                let result=response;
                                if(result){
                                localStorage.setItem('token',result.toString());
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
    return tokenNotExpired();
  }

  get currentUser(){
    let details=localStorage.getItem('token');
    return new JwtHelper().decodeToken(details);
  }
}

