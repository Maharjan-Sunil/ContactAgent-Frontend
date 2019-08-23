import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import { AuthHttp } from 'angular2-jwt';
import { Product } from 'app/model/Product';
import { HttpClient } from '@angular/common/http';
import {Url} from '../config/url';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient,
              private baseUrl:Url
    // private authhttp:AuthHttp //automatically added header request
  ) {
  }

  getOrders() {
    return this.http.get<Product[]>(this.baseUrl.rootUrl + 'Product/GetAllProductDetails');
  }
}
