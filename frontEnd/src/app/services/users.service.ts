import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservedValueOf, tap } from 'rxjs';
import { user } from '../shared/modules/user';
import { IuserLogin } from '../shared/interfaces/IuserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { login_url } from '../shared/constants/Links';
import { ToastrService } from 'ngx-toastr';
const user_key = 'user'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
private userSubject = new BehaviorSubject<user>(this.getUserFromLocalStorage())
public userObservable:Observable<user>
  constructor(private http:HttpClient, private toastrservice:ToastrService){ 
    this.userObservable = this.userSubject.asObservable()
  }
  login(userLogin:IuserLogin): Observable<user>{
    return this.http.post<user>(login_url, userLogin).pipe(
      tap({
      next: (user) =>{
        this.setUserTolocalStorage(user)
        this.userSubject.next(user)
        this.toastrservice.success(`welcome to our website ${user.name}!`, 'login successful')
      },
      error :(errorResponse) => {
        this.toastrservice.error(errorResponse.error , ('login failed')
        )
      }
    }))
  }
  logOut(){
    this.userSubject.next(new user())
    localStorage.removeItem(user_key);
    window.location.reload()
    
  }
  public get currentUser():user {
    return this.userSubject.value;
  }
  private setUserTolocalStorage(user: user){
    localStorage.setItem(user_key, JSON.stringify(user))
  }
  private getUserFromLocalStorage():user{
    const userJSON  = localStorage.getItem(user_key);
    if(userJSON) return JSON.parse(userJSON) as user ;
    return new user()
  }
}
