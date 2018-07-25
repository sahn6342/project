import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-fetchrest',
  templateUrl: './fetchrest.component.html',
  styleUrls: ['./fetchrest.component.css']
})
export class FetchrestComponent implements OnInit {
  names;ids;cats;tempcat;restid;switchcondition;items;cart=true;switchcondition1;itemnameArray;priceArray
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
    //  console.log(this.ids)
   }
   getcat(temp){
     this.http.post("http://localhost:6363/user/getcat",{
       id:temp
     }).subscribe((res:any)=>{
       this.tempcat=res.data;
       this.cats=this.tempcat.category
       console.log("restid---",temp,"---")
     })
     sessionStorage.setItem("restId",temp)
     this.restid=temp
     setTimeout(()=>{
      this.switchcondition="category"
    },1)
   }
  //  To get items by id of restaurant
   getitem(temp_id){
    //  console.log(temp_id)
    this.http.post("http://localhost:6363/user/getitems",{
      catid:temp_id,
      id:this.restid
    }).subscribe((res:any)=>{
      console.log("cat id--------",temp_id,"------------");
      this.items=res.data;
      // console.log(this.items);
      sessionStorage.setItem("catId",temp_id)
      setTimeout(()=>{
        this.switchcondition="item"
        console.log("****",this.items,"****")
      },1)

    })
   }
   //add to cart function
   addtocart(itemname,price){
     console.log(sessionStorage.getItem("restId"))
     console.log(sessionStorage.getItem("catId"))
      sessionStorage.setItem("try",this.switchcondition1)
     if(!this.cart){
     this.itemnameArray=JSON.parse(sessionStorage.getItem("itemnameArray")),this.priceArray=JSON.parse(sessionStorage.getItem("this.priceArray"))
     this.itemnameArray.push(itemname),this.priceArray.push(price)
     sessionStorage.setItem("itemnameArray",JSON.stringify(this.itemnameArray))
     sessionStorage.setItem("priceArray",JSON.stringify(this.priceArray))
    }
     else{
      sessionStorage.setItem("itemnameArray",JSON.stringify(itemname))
      sessionStorage.setItem("priceArray",JSON.stringify(price))
      this.itemnameArray.push(itemname),this.priceArray.push(price)
      this.cart=true;
     }
   }
  ngOnInit() {
  }

}
