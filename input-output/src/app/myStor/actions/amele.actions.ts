import {Injectable} from '@angular/core';
import {Action} from "@ngrx/store";
import {Amele} from '../models/amele.model';

export const ADD_AMELE = '[AMELE] Add'
export const REMOVE_AMELE = '[AMELE] Remove'


export class AddAmele implements Action {
    readonly type = ADD_AMELE;
    constructor(public payload:Amele){}
}

export class RemoveAmele implements Action {
    readonly type = REMOVE_AMELE;

    //we need the index to remove 
    //constructor(public payload: number){}
}
export type Actions = AddAmele | RemoveAmele // refer the Actions type class
//export type Actions = AddAmele 