import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { UserServices } from '../Services/UserServices';
import { FormGroup, FormControl} from '@angular/forms';
import { Router} from "@angular/router"

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
    email: new FormControl(''),
    passWord: new FormControl(''),
  });

  dot:string ="hidden";

  

  constructor(private route: Router, private auth: AuthService, private user: UserServices) { }

  ngOnInit(): void {
    
  }

  onSubmit():void {
    // TODO: Use EventEmitter with form value
  

    const userdata = this.loginForm.value;
    this.dot="visible";
    this.user.Login(userdata,this.httpOptions).subscribe((observer)=>{
      this.dot = "hidden";
      this.auth.setToken(observer.accessToken);
      this.route.navigate(["/dashboard"]);
    },err=>{console.warn(err)})

  }

}
