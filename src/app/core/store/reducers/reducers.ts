import { createReducer, on } from '@ngrx/store';
import { ICopieModel } from '../../models/ICopiesModel';
import * as CopiesActions from '../actions/actions';
import { IloanRequest } from '../../models/loan-request.models';


export interface CopiesState {
  copies: ICopieModel[];
  cart: ICopieModel[];
  loading: boolean;
  error: any;
  checkoutRequest:IloanRequest;  
  checkoutResponse: boolean;
  showSpinner: boolean;
  checkoutError: any;

}

export const initialState: CopiesState = {
  copies: [],
  cart: [],
  loading: false,
  error: null,
  checkoutRequest:null,
  showSpinner: false,
  checkoutResponse: false,
  checkoutError: null,

};

export const copiesReducer = createReducer(
  initialState,
  on(CopiesActions.loadCopies, (state) => ({ ...state, loading: true })),

  on(CopiesActions.loadCopiesSuccess, (state, { copies }) => ({
    ...state,
    copies,
    loading: false,
  })),

  on(CopiesActions.loadCopiesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(CopiesActions.addCopieToCart, (state, { copie }) => {
    const isBookInCart = state.cart.some((item) => item.id === copie.id);
    return {
      ...state,
      cart: isBookInCart ? state.cart : [...state.cart, copie],
    };
  }),

  on(CopiesActions.removeCopieFromCart, (state, { copieId }) => ({
    ...state,
    cart: state.cart.filter((item) => item.id !== copieId),
  })),

  on(CopiesActions.clearCart, (state) => ({ ...state, cart: [] })),

 // Checkout Cart=======================
  
  on(CopiesActions.showSpinner, (state) => ({ ...state, showSpinner: true })),
  on(CopiesActions.hideSpinner, (state) => ({ ...state, showSpinner: false })),
 

  on(CopiesActions.checkoutCartSuccess, (state, { response }) => ({
    ...state,
    cart: [],
    
    checkoutResponse: response,
    checkoutError: null,
  })),
  on(CopiesActions.checkoutCartFailure, (state, { error }) => ({
    ...state,
    checkoutError: error,
  }))


);
