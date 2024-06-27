import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foodInfo } from '../shared/modules/Food';
import {Router} from '@angular/router'
import { CartService } from '../services/cart/cart.service';
import { Observable, sample } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
food!:foodInfo
toolong = true ;
Foods:foodInfo[]=[]
  constructor( private activatedroute:ActivatedRoute, private foodservice:FoodService , private cartservice:CartService, private route:ActivatedRoute,private router:Router) 
  {
    let foodsObservable:Observable<foodInfo[]>; 
     this.activatedroute.params.subscribe(params=>{
      if(params.searchTerm)
        {foodsObservable = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm)}
      else if (params.tag)
        {foodsObservable = this.foodservice.getAllFoodsByTag(params.tag)}
      else 
       foodsObservable =foodservice.getAll();
    foodsObservable.subscribe((serverFoods) => {
      this.Foods = serverFoods 
    })
     
    }
    
    )    
   }

  ngOnInit(): void {
    

  
  }
  AddToCart(){
    this.cartservice.addToCart(this.food);
  }
}