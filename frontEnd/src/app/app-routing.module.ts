import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from  './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';


const routes: Routes = [
  {path:'', component:MenuComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact' , component: ContactComponent},
  {path:'order', component: OrderComponent},
  {path:'search/:searchTerm' , component:MenuComponent},
  {path:'tag/:tag' , component:MenuComponent},
  {path:'tags' , component:MenuComponent},
  {path:'food/:id' , component:FoodPageComponent},
  {path:'cart-page' , component:CartPageComponent},
  {path:'menu/cart-page' , component:CartPageComponent},
  {path:'login-Page' , component:LoginPageComponent},
  {path:'Loading' , component:LoadingComponent},
  {path:'confirm-order' , component:ConfirmOrderComponent},
  {path:'view-order' , component:ViewOrderComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
