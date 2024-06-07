import { Component, OnInit } from '@angular/core';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { Observable } from 'rxjs';
import { CopiesContainerFacade } from './copies.facade';
import { CopiesListBlockComponent } from '../../ui/blocks/copies-list-block/copies-list-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copies-container',
  standalone: true,
  imports: [CopiesListBlockComponent, CommonModule],
  templateUrl: './copies-container.component.html',
})
export class CopiesContainerComponent implements OnInit {
  copies$: Observable<ICopieModel[]>;

  constructor(private readonly facade: CopiesContainerFacade) {}

  ngOnInit(): void {
    this.facade.loadCopies();
    this.copies$ = this.facade.copies$();
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.copies$ = this.facade.copies$();
  }

  onAddToCart(copie: ICopieModel): void {
    this.facade.addCopieToCart(copie);
  }
}
