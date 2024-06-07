import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../../core/services/generals/storage.service';


@Injectable({
  providedIn: 'root',
})
export class HeaderContainerFacade {
  private subscriptions: Subscription = new Subscription();

  constructor(private readonly storageService: StorageService) {}

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  remove(): void {
    this.storageService.remove('token');
    this.storageService.remove('userName');
    this.storageService.remove('userId');
    this.storageService.remove('refreshToken');
    //window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
  }
}
