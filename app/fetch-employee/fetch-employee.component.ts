import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-fetch-employee',
  templateUrl: './fetch-employee.component.html',
  styleUrls: ['./fetch-employee.component.css']
})
export class FetchEmployeeComponent implements OnInit {


 service:MyserviceService;
  
 constructor(service:MyserviceService) {
   this.service=service;

  }
  employee:Employee[]=[];
ngOnInit() {
  this.service.fetchEmployees();
  this.employee=this.service.getEmployees();
}
}
