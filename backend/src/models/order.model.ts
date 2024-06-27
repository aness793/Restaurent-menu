
import {model , Schema , Types} from 'mongoose'
import { foodInfo } from '../../../frontEnd/src/app/shared/modules/Food'
import { foodSchema } from './food'
import { OrderStatus } from '../order_status'
export interface orderItem{
    food:foodInfo
    price:number
    quantity:number
}
export const orderItemSchema = new Schema<orderItem>({
    food:{type:foodSchema ,required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
})
export interface Order {
    id:string
    items:orderItem[]
    totalPrice:number
    adress:string
    orderDate:Date
    status:OrderStatus
    phone:number
    name:string
    quantity:number
    orderId:Types.ObjectId
}
const orderSchema=new Schema<Order>(
    {
        name:{type:String , required:true},
        adress:{type:String, required:true},
        totalPrice:{type:Number ,required:true},
        phone:{type:Number, required:true},
        items:{type:[orderItemSchema],required:true},
        status:{type:String,default:OrderStatus.new},
    },{
        timestamps:true,
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true,

        }
    }
)
export const orderModel = model('orders',orderSchema)