import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  employee: Employee [] | undefined;

  componentVisibility:boolean = false;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.viewEmployees().subscribe((data)=>{
      this.employee = data;
    },(error)=>{
      console.log(error);
    });
  }

}
