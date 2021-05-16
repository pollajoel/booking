import { Component, OnInit } from '@angular/core';
import {faSmokingBan} from '@fortawesome/free-solid-svg-icons';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-singletripcontain',
  templateUrl: './singletripcontain.component.html',
  styleUrls: ['./singletripcontain.component.scss']
})
export class SingletripcontainComponent implements OnInit {
  
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
  constructor() { }

  ngOnInit(): void {
  }

}
