import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {user, accessToken} from '../class/user';
import {Observable,of, from} from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
  })
export class UserServices {
  apiRoot:string  = 'https://covoituragebackend.herokuapp.com/api/v1/users';
  loginUrl:string = 'https://covoituragebackend.herokuapp.com/api/v1/login';
  results:Object[];
  

  accessTokenT: accessToken={
    error: false,accessToken:""
  }

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

  Login(value: any, options:object):Observable<accessToken>{
  
     let body = JSON.stringify( value );
    return this.http.post<accessToken>(this.loginUrl,body,options);
  }




 
}