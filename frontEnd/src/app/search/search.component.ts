import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';
import { foodInfo } from '../shared/modules/Food';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:String='';
  constructor(route:ActivatedRoute , private router:Router) { 
    route.params.subscribe(params => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    } )
  }
  ngOnInit(): void {
    
  }
  search(searchTerm:string) {
    if(searchTerm)
     this.router.navigateByUrl('/search/'+ searchTerm)
  }
}
