import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:"",
      redirectTo:"search",
      pathMatch:"full"
    },
  {
    path:"search",
    loadChildren:"./search/search.module#SearchModule"
  },
{
  path:"addItem",
  loadChildren:"./add-item/add-item.module#AddItemModule"
}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
