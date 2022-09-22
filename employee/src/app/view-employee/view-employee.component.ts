import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee[] | undefined;

  colorURL: string = "";

  componentVisibility:boolean = true;

  constructor(private employeeService:EmployeeService, private router:Router) {
    this.colorURL = this.router.url;
   }

  ngOnInit(): void {
    this.employeeService.viewEmployees().subscribe((data)=>{
      this.employee = data;
    },(error)=>{
      console.log(error);
    });
  }

}
