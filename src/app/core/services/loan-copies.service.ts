import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { StorageService } from './generals/storage.service';

import { Observable, map, tap } from 'rxjs';
import { IRequestLoanCopies } from '../models/requestLoanCopies';
import { URL_RESOURCES } from '../resources/url.resources';
import { IloanRequest } from '../models/loan-request.models';

@Injectable({
  providedIn: 'root',
})
export class LoanCopiesService {
  constructor(
    private readonly HttpService: HttpService,
    private readonly storageService: StorageService
  ) {}

  createLoanCopies(checkoutRequest: IloanRequest): Observable<any> {
    
    const readerId = this.storageService.get('userId') as string;   
    

    
    const requestBody: IRequestLoanCopies = {
      loanDays: checkoutRequest.days,
      readerId,
      libraryItemIds: checkoutRequest.copies,
    };

    console.log('Request body:', requestBody);

    const url = URL_RESOURCES.loanCopies;
    const body = JSON.stringify(requestBody);

    return this.HttpService.post<any>(url, body).pipe(
      tap((response) => {
        console.log('Respuesta del SERVICIO', response);
      })
    );
  }
}
