import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/services/employee-api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, DoCheck {

  constructor(public employeeService: EmployeeApiService) { }

  ngDoCheck(): void {
    this.employees=this.employeeService.employee
    this.employees=this.employees.data
  }

  employees:any=this.employeeService.employee

  ngOnInit(): void {
    this.employeeService.getEmployees()      
  }

  check(){
    console.log(this.employeeService)
    // this.employeeService.deleteEmployee()
  }

  delete(id){
    this.employeeService.deleteEmployee(id)
  }
  
  update(id){
    this.employeeService.updateEmployee(id)
  }

}