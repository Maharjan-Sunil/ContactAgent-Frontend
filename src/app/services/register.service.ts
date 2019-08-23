import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Url} from '../config/url';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient,
              private baseUrl:Url) {
}

httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })
};

register(credentials){
    return this.http.post<boolean>(this.baseUrl.rootUrl+"token/register",JSON.stringify(credentials),this.httpOptions);
  }

}
