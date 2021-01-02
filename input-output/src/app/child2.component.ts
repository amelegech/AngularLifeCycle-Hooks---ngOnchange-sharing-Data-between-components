import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <h2> child2 Component @ViewChild()</h2>
  `,
  styles: [
  ]
})
export class Child2Component implements OnInit {
myCity:string="Addis-Ababa, Seattle, San-Josie, Atlanta, Fairfield,Minnesota,Toronto"
  constructor() { }

  ngOnInit(): void {
  }

}
