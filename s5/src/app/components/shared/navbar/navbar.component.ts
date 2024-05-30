import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = [
    {keyword:"Home", routesTo: "/"},
    {keyword:"Login", routesTo: "/login"},
  ]

  logout(){

  }
}
