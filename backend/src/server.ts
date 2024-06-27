import express from 'express';
import cors from 'cors';
import {sample_tag, sample_food, sample_users} from './data'
import foodRouter from './routers/foodRouter'
import { dbConnect } from './database';
import { Router } from "express";
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'
import { foodModel } from './models/food';
import { userModel } from './models/users';
import {user} from '../../frontEnd/src/app/shared/modules/user'
import * as bcrypt from 'bcryptjs'
import { orderModel } from './models/order.model';
import { OrderStatus } from './order_status';
const app =express();
app.use(express.json())
dbConnect()
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200'],
}))
app.get('/api/foods/seed', asyncHandler(async (req ,res)=>{
    const foodCount = await foodModel.countDocuments()
    if(foodCount>0){
        res.send('seed already done')
        return;
    }
    await foodModel.create(sample_food)
    res.send('seed is done')
}) )
app.get('/api/users/seed', asyncHandler(async (req, res)=>{
    const userCount = await userModel.countDocuments()
    if(userCount>0){
        res.send('seed already done')
        return;
    }
    await userModel.create(sample_users)
    res.send('seed is done')
}) )
app.get('', asyncHandler
(async( req ,res) => {
    const allFoods = await foodModel.find()
    res.send(allFoods)
}))
app.get('/api/foods', asyncHandler(
    async (req, res)=>{
        const allFoods = await foodModel.find()
        res.send(allFoods)
    }
))
app.get('/api/foods/tags',asyncHandler(
    async (req ,res)=>{
        const tags = await foodModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id:'$tags',
                    count:{$sum: 1}
                }
            },
            {
                $project:{
                    _id:0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count:-1})
        const all = {
            name:'All',
            count: await foodModel.countDocuments()
        }
        tags.unshift(all)
        res.send(tags)
    }
))
app.get('/api/foods/tag/:tag', asyncHandler(
    async (req ,res)=>{
        const food = await foodModel.find({tags: req.params.tag})
        res.send(food)
    }
))
app.get('/api/foods/:id' , asyncHandler(
    async (req, res)=>{
        const id = await foodModel.findById(req.params.id) ;
        res.send(id)
    }
))
app.get('/api/foods/search/:searchTerm', asyncHandler(
    async (req,res) => {
        const searchRegEx = new RegExp(req.params.searchTerm ,'i')
        const searchWord = await foodModel.find({name:{$regex:searchRegEx}})
        res.send(searchWord)
    }
))
app.get('/api/users', async (req, res)=>{
    const usrs = sample_users
    res.send(usrs)
})
app.post('/api/sign-up', asyncHandler(async(req,res)=>{
    const{name,email,phone,password}=req.body
    const userEmail=await userModel.findOne({email})
    const userPhone=await userModel.findOne({phone})
    if(userEmail || userPhone){
        res.status(400).send('email  or phone number already exists')
        return
    }
    const encryptedPassword =await bcrypt.hash('password',10)
    const encryptedPhone = await bcrypt.hash('phone',15)
    const NewUser:user ={
        id: '',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        isAdmin: false,
        phone: encryptedPhone,
        token: ''
    }
    const freshUser = await userModel.create(NewUser)
    res.send(generateToken(freshUser))

    

}))

app.post('/api/users/login' ,asyncHandler(
    async (req,res)=>{
        const {email,password}= req.body
        const user = await userModel.findOne({email,password})
        if(user){
            res.send(generateToken(user))
        }
        else {
            res.status(404).send('user not found')
        }
    }
));
app.post('/api/orders/create',asyncHandler(async(req:any,res:any)=>{
    const requestOrder=req.body
    if(requestOrder.items.length<=0){
        res.status(404).send('cart is empty')
        return;
    }
    const newOrder =new orderModel({...requestOrder,user})
    await newOrder.save()
    res.send(newOrder)
}))
app.get('/api/orders/order', asyncHandler(async(req:any,res)=>{
    const body=req.body
    const order = await orderModel.findOne().sort({ createdAt: -1 });
    if(order){
        res.send(order)
    }
    else {
        res.status(400).send('no order')
    }
}))
const generateToken = (user:any) => {
    const token = jwt.sign({
        password:user.password , isAdmin:user.isAdmin
    },'passCode',
    {expiresIn:'30d'})
    user.token =token;
    return user
    }
const port =5000;
app.listen(port ,()=>
{console.log('we are on port '+ port)})