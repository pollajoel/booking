import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profilegenerale',
  templateUrl: './profilegenerale.component.html',
  styleUrls: ['./profilegenerale.component.scss']
})
export class ProfilegeneraleComponent implements OnInit {
  faplus = faPlusCircle;
  UserData = [
    {id: 1, type: 'name', value: 'polla'},
    {id: 2, type: 'firstname' , value : 'polla'},
    {id: 3, type: 'sexe', value : 'Homme'},
    {id: 4, type: 'birthdate', value: 'polla'},
    {id: 5, type: 'phone', value: '0630993084'}];
  constructor() { }

  ngOnInit(): void {
  }
  public closed(): void{
    alert('bonjour');
  }

}
