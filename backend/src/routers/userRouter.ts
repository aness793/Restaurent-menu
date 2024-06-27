import { Router } from "express";
import { sample_users } from "../data";
import jwt from 'jsonwebtoken'
const router = Router()
router.post('/login' ,async (req , res)=>{
    const {email,password}= req.body
    const user = sample_users.find(user => user.email === email && user.password === password )
    if(user){
        res.send(generateToken(user))
    }
    else {
        res.status(404).send('user not found')
    }
});
const generateToken = (user:any) => {
    const token = jwt.sign({
        password:user.password , isAdmin:user.isAdmin
    },'passCode',
    {expiresIn:'30d'})
    user.token = token;
    return user
    }
export default router