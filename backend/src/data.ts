
import {foodInfo} from '../../frontEnd/src/app/shared/modules/Food';
import {Tag} from '../../frontEnd/src/app/shared/modules/Tag'
export const sample_food:foodInfo[]= [
    {
        id:0,
        name:'pizza',
        price:200,
        imgUrl:'/assets/images/food-1.jpg',
        stars:3.5,
        available:true,
        tags: ['fast-food','Fast'],
        favorite:false ,
        description:'this is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we serve'
      },
      {
        id:1,
        name:'tacos',
        price:200,
        imgUrl:'/assets/images/food-2.jpg',
        stars:5,
        available:true,
        tags: ['fast-food','Fast'],
        favorite:false ,
        description:'this is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we servethis is one of the best of the foods we serve'

    
      },
      {
        id:2,
        name:'burgur',
        price:200,
        imgUrl:'/assets/images/food-3.jpg',
        stars:3,
        available:true,
        tags: ['fast-food','Fast'],
        favorite:false ,
      },
      {
        id:3,
        name:'chorba',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
      {
        id:4,
        name:'chorba',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags:['Fast','traditional'],
        favorite:true ,
      },
      {
        id:5,
        name:'7rira',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
      {
        id:5,
        name:'chorba',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
      {
        id:6,
        name:'soup',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
      {
        id:7,
        name:'chorba',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
      {
        id:8,
        name:'GG',
        price:200,
        imgUrl:'/assets/images/food-4.jpg',
        stars:4,
        available:true,
        tags: ['Fast','traditional'],
        favorite:true ,
      },
  ]
  export const sample_tag:Tag[]= [
    {name:'All',count:4},
    {name:'fast-food',count:3},
    {name:'traditional',count:1},  
  ]
  export const sample_users: any[] = [
  {
    email:'d.rahmanianess@gmail.com',
    name:'aness',
    password:'123',
    phone:'0669231386',
    isAdmin:false,
  
  },  
  {
    email:'aness12317@gmail.com',
    password :'1234'    ,
    name:'rahmani',
    phone:'0696127825',
    isAdmin:true
  },  
  {
    email:'anneessee1@gmail.com',
    password :'12345'    ,
    name:'djilali',
    phone:'0559318619',
    isAdmin:false
  },  
  ]