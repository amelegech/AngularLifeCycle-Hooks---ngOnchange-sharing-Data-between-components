import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
    <p>Child 1 Component  </p>
    <h3>Name from parent : {{myName}}</h3>
    <h4>Messag from parent:{{message}}</h4>
    <button (click)="addCount()">Count++ </button><span>Counter value from Child:{{count}}</span>
    

  `,
  styles: [
  ]
})
export class ChildComponent implements  OnChanges,OnInit {
@Input() myName:string="";
@Input() message:string="";
@Input() count:number = 0;
@Output() counterVal =  new EventEmitter()


  constructor() { }
  
  addCount(){

    this.count = this.count += 4
    this.counterVal.emit(this.count)
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
     console.log(changes,"===> wever the input val Change<===");
     
   }
   ngOnInit(): void {
     //throw new Error('Method not implemented.');
   }
   
}
