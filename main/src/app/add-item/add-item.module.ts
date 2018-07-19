import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      component:AddItemComponent,
      pathMatch:"full"
    }])
  ],
  declarations: [AddItemComponent]
})
export class AddItemModule { }
