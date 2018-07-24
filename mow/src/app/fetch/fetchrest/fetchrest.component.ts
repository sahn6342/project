import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-fetchrest',
  templateUrl: './fetchrest.component.html',
  styleUrls: ['./fetchrest.component.css']
})
export class FetchrestComponent implements OnInit {
  names;
  ids;
  constructor(private http : HttpClient) {
    this.http.get("http://localhost:6363/user/getrest").subscribe((res:any)=>{
    this.names=res.name;
    this.ids=res.id;
    console.log(res.name)
    })
    // setTimeout(()=>{console.log("time")},1)
   }
   
   showid(temp){
     console.log(temp);
     console.log(this.ids)
   }
   getcat(temp){
     this.http.post("http://localhost:6363/user/getcat",{
       id:temp
     }).subscribe((res:any)=>{
       console.log(res)
     })
   }
  ngOnInit() {
  }

}
