import {Action} from '@ngrx/store';
import {ShoppingItem} from '../model/product-list.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
}

export class AddItemAction implements Action{
    readonly type =ShoppingActionTypes .ADD_ITEM;
    constructor(public payload:ShoppingItem){}
}
 export type shoppingAction = AddItemAction;







// import {Action} from '@ngrx/store';
// import {ProductList} from '../model/product-list.model';

// //stands for enummeration
// export enum ProductsActionType{
//    ADD_PROD ='[PRODUCTS] Add Prod',
//    //ADD_PROD_SUCCESS='[PRODUCTS] Add Prod Success',
//    //ADD_PROD_FAILURE ='[PRODUCTS] Add Prod Failure'
// }

// export class AddProdAction implements Action{
//     readonly type = ProductsActionType.ADD_PROD;
//     constructor(public payload:ProductList ){}
// }

// export type ProductAction = AddProdAction