import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService {  
  storagekey: string = "JWT_key";

 constructor() {}  // ...
  
 setToken(token:string):void{
   localStorage.setItem(this.storagekey,token);
 }

 getToken(){
  return localStorage.getItem(this.storagekey);
 }

 isLogged():Boolean{
   return this.getToken !== null
 }


Logout(){  localStorage.removeItem(this.storagekey)
}



}