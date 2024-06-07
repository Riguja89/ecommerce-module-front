
import { createAction, props } from "@ngrx/store";
import { ICopieModel } from "../../models/ICopiesModel";
import { IloanRequest } from "../../models/loan-request.models";


export const loadCopies = createAction('[Copies] Load copies');
export const loadCopiesSuccess = createAction('[Copies] Load copies Success', props<{ copies: ICopieModel[] }>());
export const loadCopiesFailure = createAction('[Copies] Load copies Failure', props<{ error: any }>());


export const addCopieToCart = createAction('[Copies] Add Copie to cart', props<{ copie: ICopieModel }>());
export const removeCopieFromCart = createAction('[Copies] Remove Copie from cart', props<{ copieId: string }>());
export const clearCart = createAction('[Copies] Clear Cart');


export const checkoutCart = createAction('[Copies] Checkout Cart', props<{ checkoutRequest:IloanRequest }>());
export const checkoutCartSuccess = createAction('[Copies] Checkout Cart Success', props<{ response: boolean }>());
export const checkoutCartFailure = createAction('[Copies] Checkout Cart Failure', props<{ error: any }>());


export const showSpinner = createAction('[Copies] Show Spinner');
export const hideSpinner = createAction('[Copies] Hide Spinner');

