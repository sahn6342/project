import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginrestaurentComponent } from './loginrestaurent/loginrestaurent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogincustomerComponent, LoginrestaurentComponent]
})
export class LoginModule { }
