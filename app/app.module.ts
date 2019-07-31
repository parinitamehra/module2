import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MyserviceService } from './myservice.service';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { OnlinelinkComponent } from './onlinelink/onlinelink.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    FetchEmployeeComponent,
    OnlinelinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [HttpClient,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
