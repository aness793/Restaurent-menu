import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/modules/Tag';
import { FoodService } from '../services/food/food.service';
import { Observable } from 'rxjs';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Input()foodPageTags?:String[];
tags?:Tag[]
constructor(private foodService:FoodService) {
    let tagsObservable:Observable<Tag[]>
    tagsObservable = this.foodService.getAllTags()
    tagsObservable.subscribe((tags)=>{
      this.tags = tags
    })
   }

  ngOnInit(): void {
      }

}
