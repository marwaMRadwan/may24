import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { AdduserComponent } from './components/pages/users/adduser/adduser.component';
import { ShowallComponent } from './components/pages/users/showall/showall.component';
import { ShowsingleComponent } from './components/pages/users/showsingle/showsingle.component';
import { EdituserComponent } from './components/pages/users/edituser/edituser.component';
import { ProfileComponent } from './components/pages/auth/profile/profile.component';
import { Err404Component } from './components/pages/err404/err404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    AdduserComponent,
    ShowallComponent,
    ShowsingleComponent,
    EdituserComponent,
    ProfileComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
