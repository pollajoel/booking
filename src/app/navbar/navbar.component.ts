import { Component, OnInit } from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../Services/auth.service';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faarrowgle  = faArrowRight;
  faangle = faAngleRight;
  public IsLogin = true;

  loginMenu = [
    { title: 'Tableau de bord', icon: faAngleRight, iconleft: faHome, urlRoute: '/dashboard'},
    { title: 'Vos trajets', icon: faAngleRight, iconleft: faQuoteLeft, urlRoute: '/Trips'},
    { title: 'Boîte de reception', icon: faAngleRight, iconleft: faComment, urlRoute: '/Messages'},
    { title: 'Profil', icon: faAngleRight, iconleft: faUserCircle, urlRoute: '/profils'},
     {title: 'Déconnexion', icon: faAngleRight, iconleft: faTimesCircle, urlRoute: '/Trips'}
  ];

 
  public authentification;

  constructor(private auth:AuthService) { 
    this.authentification = auth;
  }

  ngOnInit(): void {
  }

}
