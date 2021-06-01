import { Component, OnInit } from '@angular/core';
import {faMobile, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faphone = faMobile;
  faemail = faMailBulk;
  falocate = faLocationArrow;
  footertext="wakawakacar est le premier réseau de covoiturage au monde. Plus besoin d'aller en ville pour quitter la ville : nous mettons en relation passagers et conducteurs prêts à partager leur trajet en voiture pour leur permettre d'aller partout, et sans changement."


  constructor() { }

  ngOnInit(): void {
  }

}
