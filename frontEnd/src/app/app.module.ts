import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCard, MatCardModule}from '@angular/material/card';
import { MorLessComponent } from './mor-less/mor-less.component';
import { foodInfo } from './shared/modules/Food';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule ,HttpInterceptor} from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component'
import { ToastrModule } from 'ngx-toastr';
import 'boxicons'
import { LoadingComponent } from './loading/loading.component';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';
import { OrderListComponent } from './order-list/order-list.component';
@NgModule({
  declarations:[
    AppComponent,HeaderComponent,MenuComponent,
    ContactComponent,MorLessComponent,SearchComponent,
    TagsComponent,FoodPageComponent,
    CartPageComponent,LoginPageComponent,
    NotFoundComponent,LoadingComponent,
 ],
  imports:[BrowserModule,RouterModule,
    AppRoutingModule,FormsModule, ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false}), BrowserAnimationsModule, BrowserAnimationsModule,MatCardModule, HttpClientModule,ReactiveFormsModule,
  ],
 
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:loadingInterceptor ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
