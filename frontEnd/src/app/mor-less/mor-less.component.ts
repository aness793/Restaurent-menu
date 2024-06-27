import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-mor-less',
  templateUrl: './mor-less.component.html',
  styleUrls: ['./mor-less.component.css']
})
export class MorLessComponent implements OnInit {
  @Input () text:string='';
  @Input () wordLimit!:number;
  @Input () ShowMore:boolean=false;
  constructor() { }
  ngOnInit(): void {
  }

  }

