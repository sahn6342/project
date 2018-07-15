import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  myobservable=new Observable(observer=>{
    observer.next('hello');
    observer.next('second');
    setTimeout(()=>{
      observer.next("after 3 second");
      observer.complete();
      observer.next('after comp');
    },3000)
  })
  constructor() { }
}
