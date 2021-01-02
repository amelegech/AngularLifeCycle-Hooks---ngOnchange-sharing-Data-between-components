import { shoppingAction, ShoppingActionTypes } from "../actions/products.actions";
import { ShoppingItem } from "../model/product-list.model";


const initialState : Array<ShoppingItem> =[
    {
        id:'612 987 6010',
        ProdName:'iPhone'
    }
];

export function shoppingReducer(state:Array<ShoppingItem > = initialState, action:shoppingAction){
 switch(action.type){
     case ShoppingActionTypes.ADD_ITEM:
         return [...state, action.payload];
     default:
         return state;
 }
}





// import { ProductAction, ProductsActionType } from "../actions/products.actions";
// import { ProductList } from "../model/product-list.model";

// const initialState:Array<ProductList> =[
//     {
//         id:'12',
//         ProdName:'iPhone'
//     }
// ]

// export function ProductsReducer(state:Array<ProductList>=initialState, action:ProductAction) {
//  switch(action.type){
//      case ProductsActionType.ADD_PROD:
//          [...state, action.payload];
//          default:
//              return state
//  }
// }