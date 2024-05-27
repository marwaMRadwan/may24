import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycomComponent } from "./pages/mycom/mycom.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MycomComponent]
})
export class AppComponent {
  // name: number|null 
  // title = 's2';
  // constructor(){
  //   this.name=8
  // }
  // setMyName(){
  //   this.name=9
  // }
  // name = "M Radwan"
  // data = {
  //   id : 1,
  //   job: "developer"
  // }
  // status = false
  // disabled ="disabled"
  // imgSrc = "img.png"
  // show(){
  //   return "hello from function"
  // }
  // changeName(){
  //   this.name = "Marwa"
  // }
  // getData(){
  //   this.name = "dddddd"
  // }

  //event
  
  //two way

}
