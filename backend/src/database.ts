import {connect} from 'mongoose'
export const dbConnect = ()=>{
    connect(process.env.DATA_URI!)
    try{
        console.log('connected seccussfully  ')
    }catch (error) {
            console.log(error)
        
    }
}