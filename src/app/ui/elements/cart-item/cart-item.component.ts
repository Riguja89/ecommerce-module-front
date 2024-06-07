import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICopieModel } from '../../../core/models/ICopiesModel';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() book: ICopieModel;
  @Output() deleteItem= new EventEmitter<string>()

  removeFromCart(id: string){    
    this.deleteItem.emit(id);
  }

}
