import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { UserServices } from '../Services/UserServices';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from "@angular/router";
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
      //Authorization: `JWT ${this.auth.getToken()}`
    }) 
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    passWord: new FormControl('',[Validators.required]),
  });

  dot:string ="hidden";

  

  constructor(private route: Router, private auth: AuthService, private user: UserServices) { }

  ngOnInit(): void {
    
  }

  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Login ou mot de passe incorrecte',  
      footer: '<a href="/trip">login ou mot de passe oublié ?</a>'  
    })  
  } 

  onSubmit():void {
    // TODO: Use EventEmitter with form value
  

    const userdata = this.loginForm.value;
    this.dot="visible";
    this.user.Login(userdata,this.httpOptions).subscribe((observer)=>{
      this.dot = "hidden";
      if(observer.accessToken !== undefined )
      this.auth.setToken(observer.accessToken);
      if( this.auth.isLogged() )
        this.route.navigate(["/dashboard"]);
      else{
        this.erroalert();
      }
    },err=>{console.warn(err)})

  }

}
