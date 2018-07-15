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
    window.alert(temp.category+temp.item);
    this.http.post('http://localhost:6000/user/insert',{
      category:temp.category,
      item:temp.item
    }).subscribe((res:any)=>{
      console.log(res.msg)
    })


    // this.http.post('https://additem.herokuapp.com/user/login', {
    //   email: temp.category,
    //   password: temp.item
    // }).subscribe((res: any)=>{
    //   if(res.success){
    //     window.alert(res.msg);
    //   } else{
    //     window.alert(res.msg);
    //   }
    // })

  }
  ngOnInit() {
  }

}
