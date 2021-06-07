import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OfferseatComponent } from './offerseat/offerseat.component';
import { ContactComponent } from './contact/contact.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SubmittripComponent } from './submittrip/submittrip.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilegeneraleComponent } from './profilegenerale/profilegenerale.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule,NgxUiLoaderHttpModule, } from "ngx-ui-loader";
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


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
    OfferseatComponent,
    ContactComponent,
    SubmittripComponent,
    DashboardComponent,
    ProfilegeneraleComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GooglePlaceModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    NgxPaginationModule,
    ReactiveFormsModule ,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
