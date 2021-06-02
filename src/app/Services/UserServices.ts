import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {user} from '../class/user';
import { JsonPipe } from '@angular/common';
import {Observable,of, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class UserServices {
  apiRoot:string = 'https://covoituragebackend.herokuapp.com/api/v1/users';
  results:Object[];
  
  constructor(private http:HttpClient) { 
    this.results = [];
  }

  Users() : Observable<user>{
    return this.http.get<user>(this.apiRoot);
  } 

  // Get trip by Id
  usersById(id:string):Observable<user>{
    let url = `${this.apiRoot}/${id}`;

    console.log( url );
    return this.http.get<user>(url);
  }

  AddUser(value: any):Observable<user>{
     let body = JSON.stringify( value );
    return this.http.post<user>(this.apiRoot,body);
  }




 
}