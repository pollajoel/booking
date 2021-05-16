import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './slider/slider.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';
import { AboutComponent } from './about/about.component';
import { HomeappComponent } from './homeapp/homeapp.component';
import { FooterComponent } from './footer/footer.component';
import { TripComponent } from './trip/trip.component';
import { TriplistComponent } from './triplist/triplist.component';
import { SingletripComponent } from './singletrip/singletrip.component';
import { SingletripcontainComponent } from './singletripcontain/singletripcontain.component';
import { UserdetailsComponent } from './userdetails/userdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    HomeaboutComponent,
    AboutComponent,
    HomeappComponent,
    FooterComponent,
    TripComponent,
    TriplistComponent,
    SingletripComponent,
    SingletripcontainComponent,
    UserdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
