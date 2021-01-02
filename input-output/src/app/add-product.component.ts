import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-product',
  template: `
    <h4>LifeCycle Hooks! implementations from add-product component, </h4>
    <p>lists of life Cycle Hooks</p>
    <ul>
    <li>Constructor(): Called befor anything else, Used to instantiat an object, It's default method for any javascript class</li>
    <li>ngOnChange(): Called Befor ngOnnInit, Called whenever input value Changes</li>
    <li>ngOnInit():Called after Input value changes, It called when the componente get rendered for the first time in The DOM.Called only once.</li>
    <li>ngDoCheck(): Called whene ever there is updata/Change, all change detection runs.</li>
    <li>ngAfterContentInit(): Called Once after the first ngDoCheck()</li>
    <li>ngAfterContentChecked(): Called after every ngDoCheck(),Wait Untill the first ngAfterContentInit() run</li>
    <li>ngAfterViewInit():Called ater Angular initialize the component and Child component content, called only once.</li>
    <li>ngAfterViewChecked(): Called after every ngAfterContentChecked(),</li>
    <li>ngOnDistroy(): Called beore the componente removed from the DOM, Used To clean up or Unsubscribe.</li>
    </ul>
    <h4>ngOnChanges will take a parameter changes with SimpleChanges value like this (ngOnChanges(changes: SimpleChanges)</h4>
    <h3>Product @Input(): {{product}}</h3>
  `,
  styles: [
  ]
})
export class AddProductComponent implements OnInit,OnChanges {
@Input() product:string=""
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(".....ngOnchanges-----", changes);
    
  }
  ngOnInit(): void {
   
  }
 

  
}
