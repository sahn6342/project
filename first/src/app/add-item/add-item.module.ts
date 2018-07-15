import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([{
      path:"",
      component:AddItemComponent
    }])
  ],
  declarations: [AddItemComponent]
})
export class AddItemModule { }
