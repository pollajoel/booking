import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Trip} from '../class/Trip';
import { JsonPipe } from '@angular/common';
import {Observable,of, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TripServices {
  apiRoot:string = 'https://covoituragebackend.herokuapp.com/api/v1/trips';
  results:Object[];
  
  constructor(private http:HttpClient) { 
    this.results = [];
  }

  Users() : Observable<Trip>{
    return this.http.get<Trip>(this.apiRoot);
  } 



 
}