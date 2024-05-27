import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./shared/nav/nav.component";
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,  RouterLink, NavComponent, SidenavComponent, FooterComponent]
})
export class AppComponent {
  title = 'app2';
}
