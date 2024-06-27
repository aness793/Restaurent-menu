import mongoose from "mongoose"
export const dbConnect =()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/restaurent').then(
        ()=> console.log('connected to database'),(error)=>console.log(error)
    )
}