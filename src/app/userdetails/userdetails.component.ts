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
  
  constructor(private Users:UserServices, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
   }

  ngOnInit(): void {
    this.Users.usersById(this.id).subscribe(observer=>{
      console.log( "rrrrrrrrrrrrrrr");
      this.details = observer;
      console.log(observer)
    })
    
  }

  public getUser(){
    
  }



}
