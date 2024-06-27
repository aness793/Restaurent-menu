import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  Isloading!:boolean
constructor(private loadingService:LoadingService){
  loadingService.isloading.subscribe((IsLoading)=>{
    this.Isloading = IsLoading
  })
}

}
