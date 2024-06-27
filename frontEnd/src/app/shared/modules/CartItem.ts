
import { foodInfo } from "./Food";

export class CartItem {
   
    constructor(public food:foodInfo){
        
    }
    quantity: number =1;
    price:number =this.food.price
}
