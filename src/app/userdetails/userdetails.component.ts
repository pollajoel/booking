import { Component, OnInit } from '@angular/core';
import {faSmokingBan} from '@fortawesome/free-solid-svg-icons';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { UserServices } from '../Services/UserServices';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  famusique = faMusic;
  facheck = faCheck;
  faPaw = faPaw;
  facomment = faComment;
  faSmoke = faSmokingBan;
 
  id: any;
  private sub: any;
  public details:any;

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


  


  
  constructor(private Users:UserServices, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
   }

  ngOnInit(): void {
    this.Users.usersById(this.id).subscribe(observer=>{
      this.details = observer.data;
      console.log(observer)
    })
    
  }

  public getUser(){
    
  }



}
