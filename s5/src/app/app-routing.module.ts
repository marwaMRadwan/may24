import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { ShowallComponent } from './components/pages/users/showall/showall.component';
import { AdduserComponent } from './components/pages/users/adduser/adduser.component';
import { EdituserComponent } from './components/pages/users/edituser/edituser.component';
import { ShowsingleComponent } from './components/pages/users/showsingle/showsingle.component';
import { ProfileComponent } from './components/pages/auth/profile/profile.component';
import { Err404Component } from './components/pages/err404/err404.component';

const routes: Routes = [
  {path:"", component:HomeComponent, title: "session 5 - Home Page"},
  {path:"login", component:LoginComponent, title: "session 5 - Login Page"},
  {path:"users",children:[
    {path:"", component:ShowallComponent, title: "session 5 - All Data"},
    {path:"add", component:AdduserComponent, title: "session 5 - Add User"},
    {path:"edit/:id", component:EdituserComponent, title: "session 5 - Edit user data"},
    {path:"profile", component:ProfileComponent, title: "session 5 - Profile"},
    {path:":id", component:ShowsingleComponent, title: "session 5 - Single user"}
  ]},
  {path:"**", component:Err404Component, title: "session 5 - Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
