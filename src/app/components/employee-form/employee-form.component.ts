import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeApiService } from 'src/app/services/employee-api.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public employeeService : EmployeeApiService) { }

  ngOnInit(): void {
  }

  submit(employee){
    this.employeeService.createEmployee(employee)
    // console.log("submit called")
    // console.log(employee)
  }

  employee= new FormGroup({
    name : new FormControl(""),
    salary: new FormControl(""),
    age: new FormControl("")
  })

}
