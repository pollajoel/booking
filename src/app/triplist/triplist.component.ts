import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import {TripServices } from '../Services/TripServices';
import { SPINNER, NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {
  fastar = faStar;
  trip:any;
  SPINNER = SPINNER;
  Isinit : Boolean = true;

  constructor(private Trips:TripServices, private ngxService: NgxUiLoaderService) {}

  ngOnInit(): void {
    
    this.getTripdetails();
  }

  getTripdetails(){
    //this.SpinnerService.show(); 
    this.ngxService.start(); 
    this.Trips.Users().subscribe((observer)=>{
      this.trip = observer.data;
      this.ngxService.stop();
    } );

  }


}
