import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import { AuthHttp } from 'angular2-jwt';
import { Http,RequestOptions,Headers } from '@angular/http';

@Injectable()
export class OrderService {

  constructor(private http: Http,
             // private authhttp:AuthHttp //automatically added header request
              ) {
  }

  getOrders() { 
    let header=new Headers();
    let token=localStorage.getItem('token');
    header.append('Authorization', 'Bearer '+token);
    let option=new RequestOptions({headers:header});
    return this.http.get('/api/orders',option)
      .map(response => response.json());
  }
}
