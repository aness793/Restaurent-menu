import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const validators_messages:any={
  required:'should not be empty',
  email:'Email is not Valid'
}
@Component({
  selector: 'app-input-validation',
  standalone: true,
  imports: [],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent  {
@Input()
control!:AbstractControl;
@Input()
showErrorWhen:boolean=true;
errorMessages:string[]=[]
checkValidation(){
  const errors = this.control.errors;
  if(!errors){
    this.errorMessages=[]
    return
  }
  const errorKeys=Object.keys(errors)
  this.errorMessages=errorKeys.map(key => validators_messages[key])

}

}

