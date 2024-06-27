import { Component, OnInit, Type } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputContainerComponent } from '../input-container/input-container.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
loginForm!:FormGroup;
checkBox:boolean=true
isSubmitted = false
type:string=''
returnUrl='';
  constructor(private formBuilder:FormBuilder ,  private userservice:UsersService, private activatedroute:ActivatedRoute, private router:Router) {
    

  

   }

  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  this.returnUrl = this.activatedroute.snapshot.queryParams.returnUrl
  }

  // fc is a shortcut for formControl
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted = true ;
    if(this.loginForm.invalid) return;
    this.userservice.login({email:this.fc.email.value , password:this.fc.password.value}).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl)
  })
}
  isCheked(){
    this.checkBox = !this.checkBox
    console.log(this.checkBox)
  }
get check(){
return this.loginForm.invalid
}
}
