import { Component } from '@angular/core';
import { SharedService } from '../../../../providers/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public _shared:SharedService){
    _shared.isLogin=true
  }
  ngOnDestroy(){
    this._shared.isLogin=false
  }
  login(user:any){
    
  }
}
