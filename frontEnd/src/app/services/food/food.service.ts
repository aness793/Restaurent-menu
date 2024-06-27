import { Injectable } from '@angular/core';
import { foodInfo } from 'src/app/shared/modules/Food';
import {Tag} from '../../shared/modules/Tag'
import { sample_food, smaple_Tags } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { food_by_id_url, foods_search_url, foods_by_tags_url, foods_url,tags_url } from 'src/app/shared/constants/Links';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private http:HttpClient) { }
  
  getAll():Observable<foodInfo[]>{
    return this.http.get<foodInfo[]>(foods_url)
    
    
  }
  getFoodById(id:number):Observable<foodInfo>{
    return this.http.get<foodInfo>(food_by_id_url+id)
    
  }
  getAllTags():Observable<Tag[]>{
    return  this.http.get<Tag[]>(tags_url)
  };
  getAllFoodsByTag(tag:string):Observable<foodInfo[]>{
      if(tag =='All')
        return this.getAll() ;
      else
     return this.http.get<foodInfo[]>(foods_by_tags_url + tag)
};
  
  getAllFoodsBySearchTerm(searchTerm:string):Observable<foodInfo[]>{
      return this.http.get<foodInfo[]>(foods_search_url + searchTerm);
};
}

