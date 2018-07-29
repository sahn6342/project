import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { FormsModule } from "@angular/forms";
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
      },
    {
      path:"login",
      component:LogincustomerComponent
    },
  {
    path:"signup",
    component:SignupcustomerComponent
  }])
  ],
  declarations: [LogincustomerComponent,SignupcustomerComponent]
})
export class CustomerModule { }
