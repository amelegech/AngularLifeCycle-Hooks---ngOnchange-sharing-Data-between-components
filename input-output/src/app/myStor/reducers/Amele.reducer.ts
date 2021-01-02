import {Store } from '@ngrx/store';
import {Amele} from '../models/amele.model';
import * as AmeleActions from '../actions/amele.actions';


const initialState : Amele = {
    name: "Amele working on Redux",
    url:"https://i.pinimg.com/236x/91/55/79/91557917be86d7e749dc090e9d3d08e4.jpg"
}

export function reducer (state:Amele[]=[initialState], action: AmeleActions.Actions){
  switch(action.type){
      case AmeleActions.ADD_AMELE:
          return [
              ...state,
              action.payload
          ]
          default:
              return state;
  }

    
}