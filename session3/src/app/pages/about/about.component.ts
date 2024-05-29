import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myData :any= []
  constructor(private _global:GlobalService){
    _global.getData()
    .subscribe(
      res => {
        this.myData=res
        console.log(res)
      },
      err => console.log(err.message),
      ()=> console.log("test")
    )
  }
}
