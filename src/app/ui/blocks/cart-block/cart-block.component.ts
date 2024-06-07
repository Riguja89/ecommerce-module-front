import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemComponent } from '../../elements/cart-item/cart-item.component';

import { IloanRequest } from '../../../core/models/loan-request.models';
import { ICopieModel } from '../../../core/models/ICopiesModel';
import { CommonModule } from '@angular/common';
import { ModalElementsComponent } from '../../elements/modal-elements/modal-elements.component';
import { ModalSuccessElementComponent } from '../../elements/modal-success-element/modal-success-element.component';

@Component({
  selector: 'app-cart-block',
  standalone: true,
  imports: [CartItemComponent, CommonModule,ModalElementsComponent,ModalSuccessElementComponent],
  templateUrl: './cart-block.component.html',
  styleUrl: './cart-block.component.css',
})
export class CartBlockComponent implements OnInit {
  @Input() selectedBooks: ICopieModel[];
  @Input() errorResponse: any;
  @Input() successResponse: any;
  @Input() showSpinner: boolean;



  @Output() removeToCopieEvent = new EventEmitter<string>();
  @Output() clearCartEvent = new EventEmitter();
  @Output() checkoutCartEvent = new EventEmitter<IloanRequest>();
  @Output() closeModalEvent = new EventEmitter<boolean>();

  returnDate: number = 15;
  maxReturnDate: string;
  minReturnDate: string;
  today = new Date();
  constructor() {
    const maxDate = new Date(this.today.getTime() + 14 * 24 * 60 * 60 * 1000);
    this.maxReturnDate = maxDate.toISOString().split('T')[0];
    this.minReturnDate = this.today.toISOString().split('T')[0];
  }

  ngOnInit(): void {}


  closeModal() {
    this.successResponse = false;
    this.errorResponse = null;
    this.closeModalEvent.emit(false);
  }

  deleteCopieFromCart(copieId: string) {
    this.removeToCopieEvent.emit(copieId);
  }

  clearCart() {
    this.clearCartEvent.emit();
  }

  checkout(selectedBooks: ICopieModel[]) {
    const loanRequest: IloanRequest = {
      days: this.returnDate,
      copies: selectedBooks.map((b) => b.id),
    };


    console.log(loanRequest);
    this.checkoutCartEvent.emit(loanRequest);
  }

  updateReturnDate(event: Event) {
    const target = event.target as HTMLInputElement;
    const daysDifference = this.calculateDaysDifference(target.value);
    this.returnDate = daysDifference;
    console.log(daysDifference);
  }

  calculateDaysDifference(selectedDate: string): number {
    const selectedDateObj = new Date(selectedDate);
    const timeDifference = selectedDateObj.getTime() - this.today.getTime();
    const daysDifference =
      Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    return daysDifference;
  }
}
