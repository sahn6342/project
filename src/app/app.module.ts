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
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"fetchAll",
        pathMatch:"full"
      },
    {
      path:"fetchAll",
      loadChildren:"./fetch/fetch.module#FetchModule"
    },
  {
    path:"add",
    loadChildren:"./add/add.module#AddModule"
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
