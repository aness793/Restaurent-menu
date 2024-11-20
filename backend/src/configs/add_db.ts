import mongoose from 'mongoose'
export const db = ()=>{
mongoose.connect(process.env.MONGO_URI!).then(
    ()=>
       { console.log('connected to databse')}
       
    
)
}