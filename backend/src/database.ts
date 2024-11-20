import {connect} from 'mongoose'
export const dbConnect = ()=>{
    connect('mongodb+srv://aness:k61dYe41cYgE7wuW@cluster0.5ibxkfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    try{
        console.log('connected seccussfully  ')
    }catch (error) {
            console.log(error)
        
    }
}