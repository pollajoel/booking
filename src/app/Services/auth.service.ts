import { Injectable } from '@angular/core';


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

 isLogged(){
   return this.getToken() !== null ;
 }


Logout(){  localStorage.removeItem(this.storagekey)
}



}