import { Component, OnInit } from '@angular/core';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrls: ['./homeapp.component.scss']
})
export class HomeappComponent implements OnInit {
 facalendar = faCalendarAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
