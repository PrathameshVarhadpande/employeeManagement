import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL : string;

  constructor(private httpClient:HttpClient) { 
    this.baseURL = "https://jsonplaceholder.typicode.com/users";
  }

  public viewEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  public addEmployee(employee:Employee){
    return this.httpClient.post<Employee>(this.baseURL,employee);
  }

  public updateEmployee(){}

  public deleteEmployee(){}
}
