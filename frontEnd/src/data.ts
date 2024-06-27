import { foodInfo } from './app/shared/modules/Food'
import { Tag } from './app/shared/modules/Tag'
export const sample_food :foodInfo[ ] = [
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
      }
  ]
  export const smaple_Tags:Tag[]= [
    {name:'All',count:4},
    {name:'fast-food',count:3},
    {name:'traditional',count:1},  
  ]