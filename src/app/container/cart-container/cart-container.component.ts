import { Component, OnInit } from '@angular/core';
import { CartBlockComponent } from '../../ui/blocks/cart-block/cart-block.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { Observable } from 'rxjs';
import { CartContainerFacade } from './cart-container.facade';
import { IloanRequest } from '../../core/models/loan-request.models';
import { SpinnerElementComponent } from '../../ui/elements/spinner-element/spinner-element.component';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CartBlockComponent, AsyncPipe,SpinnerElementComponent,],
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent implements OnInit {
  cart$: Observable<ICopieModel[]>;
  errorResponse$: Observable<any>;
  successResponse$: Observable<any>;
  showSpinner$: Observable<boolean>;
  


  constructor(private readonly facade: CartContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }
  private initializeSubscriptions(): void {
    this.cart$ = this.facade.cart$();
    this.errorResponse$ = this.facade.responseErrorCart$();
    this.successResponse$ = this.facade.responseSuccessCart$();
    this.showSpinner$ = this.facade.showSpinner$();
  }

  onRemoveFromCart(copieId: string): void {
    this.facade.removeCopieFromCart(copieId);
  }
  onClearCart(): void {
    this.facade.clearCart();
  }

  onCheckoutCart(checkoutRequest: IloanRequest): void {
    this.facade.checkoutCart(checkoutRequest);
  }

  onCloseModal(modal:boolean): void {
    this.facade.closeModal(modal);
  }


}
