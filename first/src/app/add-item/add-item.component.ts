import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AddItemService } from '../add-item.service';
@Component({
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private http: HttpClient,
  private additemservice:AddItemService
  ) {
    // additemservice.myobservable.subscribe(val=>{
    //   console.log(val)
    // })
   }
  submit(){
    window.alert("done");
  }
  addItem(temp){
    this.http.post('http://localhost:6363/user/getdata',{
      category:temp.category,
      item:temp.item
    }).subscribe((res:any)=>{
      console.log(res)
    })
  }
  ngOnInit() {
  }

}
