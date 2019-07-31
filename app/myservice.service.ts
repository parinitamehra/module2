import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
http:HttpClient;
employee:Employee[]=[];
  constructor(http:HttpClient) {
    this.http=http;
   }
fetched:boolean;
fetchEmployees()
{
  this.http.get('./assets/EmployeeJson.json').subscribe(data=>
   {
     if(!this.fetched)
    {
      this.convert(data);
  this.fetched=true;
    }
}
 );
}

getEmployees():Employee[]
{
  return this.employee;
}

convert(data:any)
{
  for(let o of data)
  {
    let e=new Employee(o.eid,o.ename,o.eaddress,o.gender);
    this.employee.push(e);
  }
}


}
