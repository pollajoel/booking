import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component"
import {HomeComponent} from "./home/home.component"
import {AboutComponent} from "./about/about.component"
import {TripComponent} from "./trip/trip.component"
import {UserdetailsComponent} from "./userdetails/userdetails.component"
import { SingletripComponent } from "./singletrip/singletrip.component"

const routes: Routes = [
  {
    path:"index",
    component:HomeComponent
  },
   {
	   path:"",
	   component:HomeComponent
   },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"trip",
    component:TripComponent
  },
  {
    path:"singletrip/:id",
    component:SingletripComponent
  }
  ,
  {
    path:"userdetails/:id",
    component:UserdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
