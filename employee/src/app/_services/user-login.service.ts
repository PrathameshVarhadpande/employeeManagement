import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  PATH_OF_API = "https://reqres.in/api/login";

  requestHeader = new HttpHeaders({
    "No-Auth":"True"
  });

  constructor(private http:HttpClient) { }

  public login(loginForm:NgForm){
    this.http.post(this.PATH_OF_API, loginForm, {headers: this.requestHeader} );  
  }
}
