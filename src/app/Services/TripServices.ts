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

  Trips() : Observable<Trip>{
    return this.http.get<Trip>(this.apiRoot);
  } 

  // Get trip by Id
  tripsById(id:string):Observable<Trip>{
    let url = `${this.apiRoot}/${id}`;

    console.log( url );
    return this.http.get<Trip>(url);
  }



 
}