import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  whenplaceholder = "Quand partez-vous?";
  fromplaceholder = "D'ou partez-vous?";
  toplaceholder = "Ou allez-vous?";
  public buttonlabel = "Chercher"

  constructor() { }

  ngOnInit(): void {
  }

}
