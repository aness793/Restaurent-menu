import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
var pandingRequest = 0
@Injectable({
  providedIn:'root'
})
  export class loadingInterceptor implements HttpInterceptor{
    constructor(private loadingService:LoadingService){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      this.loadingService.showLoading()
      return next.handle(req).pipe(
        finalize(
          ()=>{
            this.loadingService.hideLoading()
          }
        )
      )
    }
   
    } 
