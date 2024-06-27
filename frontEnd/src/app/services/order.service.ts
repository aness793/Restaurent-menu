import { Injectable } from '@angular/core';
import { Order } from '../shared/modules/Order';
import { create_order_url, view_order_url } from '../shared/constants/Links';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http:HttpClient) { }
create(order:Order){
return this.http.post<Order>(create_order_url,order)}
viewOrder():Observable<Order>{
return this.http.get<Order>(view_order_url)

}




}

