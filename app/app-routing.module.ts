import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';



const routes: Routes = [ 
  {
    path:'app-add-employee',component : AddEmployeeComponent
  },
{
  path:'app-fetch-employee',component : FetchEmployeeComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
