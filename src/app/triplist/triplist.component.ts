import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {
  fastar = faStar;
  trip = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
