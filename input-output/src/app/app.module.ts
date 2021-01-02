import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
// ***** Ngrx         ****//
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './store/reducer/products.reducer';
import { AddProductComponent } from './add-product.component';
import { Child2Component } from './child2.component';

  
  



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AddProductComponent,
    Child2Component,
   
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      //shopping:shoppingReducer
    }),
    
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
