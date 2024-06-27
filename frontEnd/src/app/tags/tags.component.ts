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
    foodService.getAllTags().subscribe(serverTags => {this.tags = serverTags})
   }

  ngOnInit(): void {
      }

}
