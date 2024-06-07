import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetCopiesService } from '../../services/copies.service';
import * as CopiesActions from '../actions/actions';
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/generals/storage.service';
import { Router } from '@angular/router';
import { LoanCopiesService } from '../../services/loan-copies.service';
import { AppState } from '../store';
import { Store } from '@ngrx/store';

@Injectable()
export class CopiesEffects {
  constructor(
    private actions$: Actions,
    private copiesService: GetCopiesService,
    private authService: AuthService,
    private readonly storageService: StorageService,
    private router: Router,
    private loanService: LoanCopiesService,
    private store: Store<AppState>
  ) {}

  loadCopies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.loadCopies),
      mergeMap(() =>
        this.copiesService.getCopies().pipe(
          map((copies) => CopiesActions.loadCopiesSuccess({ copies })),
          catchError((error) => of(CopiesActions.loadCopiesFailure({ error })))
        )
      )
    )
  );

  loadAuths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuth),
      mergeMap((action) => {
        this.store.dispatch(CopiesActions.showSpinner());
        return this.authService.doRefreshToken(action.refreshToken).pipe(
          map((auths) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            this.storageService.set('token', auths.token);
            this.storageService.set('userId', auths.userId);
            this.storageService.set('userName', auths.userName);
            this.router.navigate(['/commerce']);
            return AuthActions.loadAuthSuccess({ auths });
          }),
          catchError((error) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            window.location.href = 'https://sherna0303.github.io/Authentication-Pinguinera-FronEnd/#/login'; //Cambiar a Url de login
            return of(AuthActions.loadAuthFailure({ error }));
          })
        );
      })
    )
  );

  checkoutCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.checkoutCart),
      mergeMap((action) => {
        this.store.dispatch(CopiesActions.showSpinner());
        return this.loanService.createLoanCopies(action.checkoutRequest).pipe(
          map((response) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            return CopiesActions.checkoutCartSuccess({ response: true });
          }),
          catchError((error) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            return of(CopiesActions.checkoutCartFailure({ error }));
          })
        );
      })
    )
  );
}
