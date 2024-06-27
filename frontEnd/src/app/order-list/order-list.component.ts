import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Order } from '../shared/modules/Order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'order-list',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
@Input()
order!:Order
constructor(){}
  ngOnInit(): void {
  }
}