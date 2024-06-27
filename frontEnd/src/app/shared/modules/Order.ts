import { LatLng } from "leaflet"
import { CartItem } from "./CartItem"

export class Order {
    id!:number
    items!:CartItem[]
    totalPrice!:number
    adress!:string
    orderDate!:string
    status!:string
    phone!:number
    name?:string
    quantity!:number

}

