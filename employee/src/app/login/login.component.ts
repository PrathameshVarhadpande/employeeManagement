import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginService } from '../_services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userLoginService:UserLoginService) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
  //  this.userLoginService.login(loginForm.value).subscribe((response)=>{
  //   console.log(response);
  //  },
  //  (error)=>{
  //   console.log(error);
  //  });
  }

}
