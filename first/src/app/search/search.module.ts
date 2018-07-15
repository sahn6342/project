import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",
      component:SearchComponent,
      pathMatch:"full"
    }])
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
