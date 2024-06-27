import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { UsersService ,} from '../services/users.service';
import { user } from '../shared/modules/user';
import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartQuantity = 0
User!:user
  constructor(cartService:CartService ,private userService:UsersService) { 
    // cartService.getCartObservable().subscribe((newCart)=>{
    //   this.cartQuantity = newCart.totalCount
    // })
  userService.userObservable.subscribe((newUser) => {
  this.User= newUser
})
  }

  ngOnInit(): void {
  }
logout(){
  this.userService.logOut() 
  console.log(this.User.token)
}
get isAuth(){
  return this.User.token;
}
}
