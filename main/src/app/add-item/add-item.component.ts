import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css','../../assets/bootstrap/bootstrap.css']
})
export class AddItemComponent implements OnInit {

  constructor(private http:HttpClient) { }
 addItem(temp){
   this.http.post('http://localhost:6000/user/insert',{
    category:temp.category,
    item:temp.item
   }).subscribe((res:any)=>{
     window.alert(res)
   })
 }

  ngOnInit() {
  }

}
