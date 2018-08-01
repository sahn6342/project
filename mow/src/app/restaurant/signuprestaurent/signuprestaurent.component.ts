import { Component, OnInit ,ViewChild} from '@angular/core';
import{HttpClient}from "@angular/common/http"
@Component({
  templateUrl: './signuprestaurent.component.html',
  styleUrls: ['./signuprestaurent.component.css']
})
export class SignuprestaurentComponent implements OnInit {
  @ViewChild('restaurentsignupForm') form;
  constructor(private http:HttpClient) { }
  signup(data){
    this.http.post("http://localhost:6363/user/restsign",{
    name:data.name,
    email:data.email,
    phone:data.phone,
    rest_name:data.rest_name,
    password:data.password,
    street:data.street,
    lane:data.lane,
    landmark:data.landmark,
    city:data.landmark,
    pincode:data.pincode,
    website:data.website,
    openhour:data.openHour,
    openminute:data.openMinute,
    closehour:data.closeHour,
    closeminute:data.closeMinute
    }).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg)
        console.log(res.msg)
        this.form.reset();
      }
      else{
        window.alert(res.msg)
        console.log(res.err)
      }
    })
    console.log(data)
  }
  ngOnInit() {
  }

}
