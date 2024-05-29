import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Err404Component } from './pages/err404/err404.component';
import { SingleComponent } from './pages/single/single.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:"", component:HomeComponent, title: "home"},
  {path:"about", component:AboutComponent, title:"about"},
  {path:"contact", component:ContactComponent},
  // {path:"services", component:ServicesComponent},
  // {path:"services/:id", component:SingleComponent},
  {path: "services", children:[
    {path:"", component: ServicesComponent},
    {path:":id", component: SingleComponent},
    {path:":id/:xyz", component:SingleComponent}
  ]},
  {path: "**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
