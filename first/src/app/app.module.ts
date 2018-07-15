import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
