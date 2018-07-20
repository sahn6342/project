import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignuprestaurentComponent } from './signuprestaurent/signuprestaurent.component';
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"customer",
      pathMatch:"full"
    },
    {
      path:"customer",
      component:SignupcustomerComponent
    },
  {
    path:"restaurent",
    component:SignuprestaurentComponent
  }])
  ],
  declarations: [SignuprestaurentComponent, SignupcustomerComponent]
})
export class SignupModule { }
