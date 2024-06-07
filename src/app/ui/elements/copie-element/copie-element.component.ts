import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICopieModel } from '../../../core/models/ICopiesModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copie-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copie-element.component.html',
  styleUrl: './copie-element.component.css'
})
export class CopieElementComponent implements OnInit{
 
 
  @Input() copie: ICopieModel;
  
  @Output() addToCartEvent = new EventEmitter<ICopieModel>();

  addToCart() {
    this.addToCartEvent.emit(this.copie);    
  }

  
  ngOnInit(): void {
    console.log('CopieElementComponent');
  }


}
