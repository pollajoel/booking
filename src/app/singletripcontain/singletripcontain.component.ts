import { Component, OnInit, Input } from '@angular/core';
import {faSmokingBan} from '@fortawesome/free-solid-svg-icons';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {TripServices } from '../Services/TripServices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singletripcontain',
  templateUrl: './singletripcontain.component.html',
  styleUrls: ['./singletripcontain.component.scss']
})
export class SingletripcontainComponent implements OnInit {
  

  id: any;
  private sub: any;
  public singletrip:any;
  

  faangle = faAngleRight;
  fasms   = faComment;
  faarrow = faArrowRight;
  preferences = [
    {name:"acceptation automatique",icon:faPaw},
    {name:"acceptation automatique",icon:faSmokingBan},
    {name:"acceptation automatique",icon:faSmokingBan},
    {name:"je ne préfère pas voyager avec des animaux",icon:faSmokingBan}
  ]

  listPassengers = [{},{},{}]


  constructor(private singleTrip:TripServices,private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
       console.log( this.id +"rrrrrrrrrr");
    });
    
   }

  ngOnInit(): void {
    this.getTripdetails();
  }

  getTripdetails(){
    //this.SpinnerService.show(); 
  
    this.singleTrip.tripsById(this.id).subscribe((observer)=>{
      this.singletrip = observer;
      console.log( this.singletrip );
  
    } );

  }







}
