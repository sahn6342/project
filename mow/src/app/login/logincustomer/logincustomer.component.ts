import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {

  constructor(private http:HttpClient) { }
  login(data){
    this.http.post("http://localhost:6363/user/login",{
      email:data.email,
      password:data.password
    }).subscribe((res:any)=>{
      window.alert(res.msg)
    })
  }
  ngOnInit() {
  }

}
