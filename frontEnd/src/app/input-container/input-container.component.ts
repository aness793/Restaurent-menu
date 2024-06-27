import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'input-container',
  standalone: true,
  imports: [],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {
@Input() 
  label!:string
@Input()
bgColor:string='whitesmoke'
background: any;
}
