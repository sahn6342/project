import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchAllComponent } from './fetch-all/fetch-all.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,HttpClientModule,
    RouterModule.forChild([{
      path:"",
      component:FetchAllComponent
    }])
  ],
  declarations: [FetchAllComponent]
})
export class FetchModule { }
