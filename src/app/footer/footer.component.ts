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


  constructor() { }

  ngOnInit(): void {
  }

}
