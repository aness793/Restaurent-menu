import { Schema , model} from "mongoose";

export interface Food{
    id:number;
    name:string;
    description:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imgUrl:string;
    available:boolean;
}
export const foodSchema = new Schema<Food>(
    {

    name:{type:String , required:true},
    price:{type:Number , required:true},
    tags:{type:[String]},
    favorite:{type:Boolean , required:false},
    imgUrl:{type:String , required:true},


    },{
        toJSON:{
            virtuals: true
        },
            toObject:{
                virtuals:true
            },
            timestamps:true
        
    }
)
export const foodModel =model<Food>('food',foodSchema);
