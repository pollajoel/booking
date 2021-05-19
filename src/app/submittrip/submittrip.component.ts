import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-submittrip',
  templateUrl: './submittrip.component.html',
  styleUrls: ['./submittrip.component.scss']
})
export class SubmittripComponent implements OnInit {

  faSearch = faSearch;
  StepForm ={
    firstStep:'block',
    secondStep:'none',
    thirdStep:'none',
  }

  constructor() { }

  ngOnInit(): void {
  }


  public Onclick(event: Event){

    event.preventDefault();
    this.StepForm.firstStep="none";
    this.StepForm.secondStep="block";
  }

}
