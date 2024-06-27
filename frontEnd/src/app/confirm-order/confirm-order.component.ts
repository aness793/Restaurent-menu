import { Component, OnInit} from '@angular/core';
import { Order } from '../shared/modules/Order';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { OrderComponent } from '../order/order.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Cart } from '../shared/modules/Cart';
@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [ReactiveFormsModule,OrderListComponent],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent implements OnInit{
checkoutForm!:FormGroup;
confirm:boolean=false
order:Order=new Order()
Uknown:string='uknown'
constructor(private cartService:CartService,
   private formBuiler:FormBuilder,
   private userService:UsersService
  ,private toastrService:ToastrService
  ,private orderService:OrderService
  ,private router:Router
){
const cart =cartService.getCart()
this.order.items =cart.items

this.order.totalPrice = cart.totalPrice
}
ngOnInit(): void {
  let {name,phone ,adress}=this.userService.currentUser
  this.checkoutForm = this.formBuiler.group({
    phone:[phone,Validators.required],
    name:[name,[Validators.required,Validators.maxLength(10)]],
    adress:[adress,Validators.required]
  })
}

get fc(){
    return this.checkoutForm.controls
}
createOrder(){
  if(this.checkoutForm.invalid){
      this.toastrService.warning('wrong adress or phone number please submit valid information')
    return;
    }
    this.order.name =this.fc.name.value
    this.order.phone = this.fc.phone.value
    this.order.adress = this.fc.adress.value
    this.orderService.create(this.order).subscribe()
    console.log(this.order)
  this.confirm =  confirm(`do you want to confirm your order ${this.order.name}, ${this.order.phone} , ${this.order.adress}`)
if(this.confirm){
  this.toastrService.success('order confirmed')

  this.router.navigateByUrl('/view-order')
}
  
}
submit(){
  console.log( this.order)
}

}