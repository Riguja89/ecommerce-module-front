import { Injectable } from '@angular/core';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { Observable } from 'rxjs';
import { selectCart, selectCopies } from '../../core/store/selectors/selectors';
import * as CopiesActions from '../../core/store/actions/actions';

@Injectable({
  providedIn: 'root',
})
export class CopiesContainerFacade {
  constructor(private store: Store<AppState>) {}

  copies$(): Observable<ICopieModel[]> {
    return this.store.select(selectCopies);
  }

  loadCopies(): void {
    this.store.dispatch(CopiesActions.loadCopies());
  }

  addCopieToCart(copie: ICopieModel): void {
    this.store.dispatch(CopiesActions.addCopieToCart({ copie }));
  }

}
