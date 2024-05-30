import { Component } from '@angular/core';
import { SharedService } from './providers/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public _shared:SharedService){}
}
