import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  templateUrl: './signupcustomer.component.html',
  styleUrls: ['./signupcustomer.component.css']
})
export class SignupcustomerComponent implements OnInit {
  @ViewChild("customersignupform")form;
  constructor() { }
  signup(data){
    console.log(data)
    this.form.reset()
  }
  ngOnInit() {
  }

}
