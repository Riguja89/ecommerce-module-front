import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaitContainerComponent } from './container/wait-container/wait-container.component';
import { AppFacade } from './app.facade';
import { Observable } from 'rxjs';
import { IresponseToken } from './core/models/refreshToken.models';
import { SpinnerElementComponent } from './ui/elements/spinner-element/spinner-element.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WaitContainerComponent,SpinnerElementComponent,CommonModule],
  templateUrl: './app.component.html',
//  template: '<router-outlet/>',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ecommerce-front';
  public token$:Observable<string>;
  public token: string;

  showSpinner$: Observable<boolean>;

  constructor(
    private readonly facade: AppFacade
  ) {}

  ngOnInit(): void {
    this.initializeSubscriptions();

  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.token$=this.facade.getRefreshToken$();
    this.token=this.facade.auths$();
    this.showSpinner$ = this.facade.showSpinner$();
  }

}
