import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:"",
      redirectTo:"addItem",
      pathMatch:"full"
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
