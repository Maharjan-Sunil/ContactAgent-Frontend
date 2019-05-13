import { Injectable } from '@angular/core';
// import { Http,Headers, RequestOptions} from '@angular/http';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

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

  baseUrl:string="http://localhost:62215/api/token/";

  // login(credentials) { 
  //   alert(JSON.stringify(credentials));
  //   let header=new Headers();
  //   header.append('Content-Type', 'application/json');
  //   let option=new RequestOptions({headers:header});
  //   return this.http.post(this.baseUrl+"login",JSON.stringify(credentials),option)
  //                   .map(response => {
  //                             let result=response.json();
  //                             if(result && result.token){
  //                             localStorage.setItem('token',result.token);
  //                             return true;
  //                             }
  //                            return false;
  //                     });
  //   }

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
