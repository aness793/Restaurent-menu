import { Schema , model} from "mongoose";

export interface Users {
    id:string;
    name:string
    email:string
    password:string
    token:string
    isAdmin:boolean
    phone:string
}
export const userSchema = new Schema <Users>
   ( {
        name:{type:String , required:true},
        email:{type:String , required:true},
        password:{type:String , required:true},
        phone:{type:String , required:true},
        isAdmin:{type:Boolean , required:true},

    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)
export const userModel =model<Users>('users',userSchema)