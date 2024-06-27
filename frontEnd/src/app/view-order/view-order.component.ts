import { Component, input } from '@angular/core';
import { Order } from '../shared/modules/Order';
import { OrderService } from '../services/order.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Route, Router, RouterLink } from '@angular/router';
import { OrderListComponent } from '../order-list/order-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [OrderListComponent, RouterLink, CommonModule],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent {
order:Order =new Order()
constructor(private orderservice:OrderService ,private toastrService:ToastrService, private router:Router ){
  orderservice.viewOrder().subscribe({
    next: (order)=>{
      this.order = order
    },
    error: (error)=>{
      console.log('error')
    }
  })
}
}
