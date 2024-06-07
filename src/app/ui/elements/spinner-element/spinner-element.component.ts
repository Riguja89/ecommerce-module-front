import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner-element.component.html',
  styleUrl: './spinner-element.component.css'
})
export class SpinnerElementComponent implements OnInit {


  @Input() showSpinner: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
