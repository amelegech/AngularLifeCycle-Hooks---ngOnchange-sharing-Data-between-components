import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { Child2Component } from './child2.component';

@Component({
  selector: 'app-root',
  template: `
  <h2>Parent Component</h2>
  <app-child [myName]="name" [message]="myMessage"  (counterVal)="countIncrement($event)"></app-child>
  <hr/>
  <app-child2></app-child2>
  <h4>Using @ViewChild Decoretor with AfterViweInit() hook</h4>
  <h5>Visited so far ==> {{cityList}}</h5>
  <hr />
  <app-add-product [product]="myProduct"></app-add-product>
  `,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  //title = 'input-output';
  
  name:string = "My name is Amelework";
  myMessage:string = " I am sending Data to the child component by using @Input";
  count:number =2;
  myProduct:string= "iphone"
  cityList:string=""
 
 countIncrement(e:number){
  console.log("event captured at parent", e)
  
  }
  ngAfterViewInit(): void {
    this.cityList = this.child.myCity
  }
  @ViewChild(Child2Component,{static:true}) child: any;
  
}
