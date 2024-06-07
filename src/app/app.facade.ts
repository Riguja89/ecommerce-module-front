import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './core/store/store';
import { StorageService } from './core/services/generals/storage.service';
import { ActivatedRoute } from '@angular/router';
import * as AuthActions from './core/store/actions/auth.actions';
import { IrefreshToken, IresponseToken } from './core/models/refreshToken.models';
import { selectAuths } from './core/store/selectors/selectors';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly storage: StorageService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  auths$(): string {
    var x=""
   this.store.select(selectAuths).forEach(t=>x=t.token);
   return x
  }

  // loadCopies(): void {
  //   this.store.dispatch(CopiesActions.loadCopies());
  // }

  // addCopieToCart(copie: ICopieModel): void {
  //   this.store.dispatch(CopiesActions.addCopieToCart({ copie }));
  // }
  loadAuth(): void {
   // this.store.dispatch(AuthActions.loadAuth(this.storage.get('refreshToken')))
  }

  initSubsciptions(): void {

    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.storage.remove('refreshToken');
    this.subscriptions.unsubscribe();

  }


  showSpinner$(): Observable<boolean> {
    return this.store.select((state) => state.copies.showSpinner);
  }

  getRefreshToken$():Observable<string>{
    var token= "";
     this.route.queryParamMap.subscribe((queryParams) => {
      token = queryParams.get('token');
      console.log('Token extraído:', token);
      if (token) {
        console.log('token extraído de la consulta:', token);
        const refreshToken: IrefreshToken={token:token}
        this.storage.set('refreshToken', token);
        this.store.dispatch(AuthActions.loadAuth({refreshToken}))
      }

    });
    return this.storage.get('refreshToken');

  }
}
