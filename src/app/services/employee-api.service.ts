import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  getApi= "http://dummy.restapiexample.com/api/v1/employees";
  createEmployeeApi="http://dummy.restapiexample.com/api/v1/create";
  deleteEmployeeApi="http://dummy.restapiexample.com/api/v1/delete/"
  updataEmployeeApi="http://dummy.restapiexample.com/api/v1/update/"
  employee:any
  check:any
  obj:any
  constructor( public http : HttpClient) { }

  getEmployees(){
    this.http.get(this.getApi).subscribe(data=>this.employee=data)
  }


  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  //  .set('Access-Control-Allow-Origin', 'http://localhost:4200' )
  //  .set('mode', 'no-cors')
  //   ;

  createEmployee(employee){
    this.obj=JSON.stringify({ "name": employee.value.name,"salary": employee.value.salary,"age": employee.value.age })
    console.log("obj= " + this.obj.name)
    this.http.post(this.createEmployeeApi,this.obj).subscribe((data)=>this.check=data
      ,(err)=> console.log(err) 
      , ()=>console.log(this.check))
  }

  deleteEmployee(id){
    this.http.delete(this.deleteEmployeeApi+id)
      .subscribe((data)=>this.check=data
        ,err=> console.log("err = "+err)
        ,()=>console.log(this.check))
    console.log("check="+this.check)
  }

  updateEmployee(id){
    this.http.put(this.updataEmployeeApi+id ,this.obj).subscribe((data)=>this.check=data
    ,err=> console.log("err = "+err)
    ,()=>console.log(this.check))
    console.log("check="+this.check)
  }
}