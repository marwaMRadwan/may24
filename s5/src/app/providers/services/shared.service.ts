import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isLogin = false
  public userData = null
  constructor() { }
}
