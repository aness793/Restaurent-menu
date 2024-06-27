import { Injectable } from '@angular/core';
import { foodInfo } from 'src/app/shared/modules/Food';
import {Tag} from '../../shared/modules/Tag'
import { sample_food, sample_tag } from '../../data'
import { HttpClient } from '@angular/common/http';
import { food_by_id_url, foods_search_url, foods_by_tags_url, foods_url,tags_url } from 'src/app/shared/constants/Links';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private http:HttpClient) { }
  
  getAll(){
    // return this.http.get<foodInfo[]>(foods_url)
    return sample_food
    
    
  }
  getFoodById(id:number):foodInfo{
    // return this.http.get<foodInfo>(food_by_id_url+id)
    return sample_food.find(food=>food.id == id ) ?? new foodInfo();
  }
  getAllTags():Tag[]{
    // return  this.http.get<Tag[]>(tags_url)
    return sample_tag

  };
  getAllFoodsByTag(tag:string):foodInfo[]{
      if(tag =='All')
        return this.getAll() ;
      else
    //  return this.http.get<foodInfo[]>(foods_by_tags_url + tag)
    return sample_food.filter(food => food.tags!.includes(tag))
};
  
  getAllFoodsBySearchTerm(searchTerm:string):foodInfo[]{
      // return this.http.get<foodInfo[]>(foods_search_url + searchTerm);
      return sample_food.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
};
}

