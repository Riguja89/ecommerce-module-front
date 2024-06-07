import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/store/store';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { selectCart } from '../../core/store/selectors/selectors';
import * as CopiesActions from '../../core/store/actions/actions';
import { IloanRequest } from '../../core/models/loan-request.models';

@Injectable({
  providedIn: 'root',
})
export class CartContainerFacade {

  constructor(private store: Store<AppState>) {}

  cart$(): Observable<ICopieModel[]> {
    return this.store.select(selectCart);
  }
  responseErrorCart$(): Observable<any> {
    return this.store.select((state) => state.copies.checkoutError);
  }

  responseSuccessCart$(): Observable<any> {
    return this.store.select((state) => state.copies.checkoutResponse);
  }

  showSpinner$(): Observable<boolean> {
    return this.store.select((state) => state.copies.showSpinner);
  }
  


  removeCopieFromCart(copieId: string): void {
    this.store.dispatch(CopiesActions.removeCopieFromCart({ copieId }));
  }

  clearCart(): void {
    this.store.dispatch(CopiesActions.clearCart());
  }

  checkoutCart(checkoutRequest: IloanRequest): void {
    this.store.dispatch(CopiesActions.checkoutCart({ checkoutRequest }));
  }

  closeModal(modal: boolean): void {
    this.store.dispatch(CopiesActions.checkoutCartSuccess({ response:modal }));
  }
}
