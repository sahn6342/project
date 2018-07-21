import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginrestaurentComponent } from './loginrestaurent/loginrestaurent.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"customer",
      pathMatch:"full"
    },
  {
    path:"customer",
    component:LogincustomerComponent
  },
{
  path:"restaurent",
  component:LoginrestaurentComponent
}])
  ],
  declarations: [LogincustomerComponent, LoginrestaurentComponent]
})
export class LoginModule { }
