import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICopieModel } from '../../../core/models/ICopiesModel';
import { CommonModule, JsonPipe, KeyValuePipe } from '@angular/common';
import { CopieElementComponent } from '../../elements/copie-element/copie-element.component';

@Component({
  selector: 'app-copies-list-block',
  standalone: true,
  imports: [CopieElementComponent,CommonModule, JsonPipe, KeyValuePipe],
  templateUrl: './copies-list-block.component.html',
  styleUrl: './copies-list-block.component.css'
})
export class CopiesListBlockComponent implements OnInit{
  

  @Input() copies: ICopieModel[];
  
  @Output() addToCartEvent = new EventEmitter<ICopieModel>();

  onAddToCart(copie: ICopieModel) {
    this.addToCartEvent.emit(copie);
    console.log('copie added to cart:'+copie.id);
  }



  ngOnInit(): void {
    console.log('lista de copias:'+this.copies);
  }


}
