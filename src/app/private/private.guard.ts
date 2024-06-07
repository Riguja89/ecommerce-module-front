import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
//import { AppState } from '../core/state/app.state';
import { map } from 'rxjs';
import { StorageService } from '../core/services/generals/storage.service';
import { Token } from '@angular/compiler';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/store';

@Injectable({
  providedIn: 'root',
})
export class PrivateGuard {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
    private readonly storage: StorageService
  ) {}

  canActivate: CanActivateFn = () => {
    const token: String = this.storage.get('token');
    if (token) {
      return true;
    }
    return false;

  };
}
