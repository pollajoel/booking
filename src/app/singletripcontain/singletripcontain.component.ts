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
  iconaccepte=faPaw;
  preferences = [
    {name:"acceptation automatique",icon:faPaw},
    {name:"acceptation automatique",icon:faSmokingBan},
    {name:"acceptation automatique",icon:faSmokingBan},
    {name:"je ne préfère pas voyager avec des animaux",icon:faSmokingBan}
  ];

  Animals ={
    isallow:"je peux voyager avec certains animaux",
    havepreferences:" j'adore les animaux wouaf",
    notallow:" je ne prefere pas voyager avec les animaaux"
  }

  Music ={
    musiclisten: "Musique tout le long !",
    slience: "Ça dépend de la musique",
​​​    thatdepends: "Le silence est d'or !",
  }

  Cigarette ={
    smokebrealallow:"Voyager avec des fumeurs ne me dérange pas",
    smokenotallow:"Les pauses cigarette hors de la voiture ne me dérangent pas",
    smookeallow:"Je ne voyage pas avec des fumeurs"
  }

Discussion ={
  notspeak:"Je suis un vrai moulin à paroles !",
  speakalot:"J'aime bien discuter quand je me sens à l'aise",
  speaksmall:"Je suis plutôt du genre discret"
}


  maxplace= " max à l\'arrière ";

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
