import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToCopiesMapper } from '../mappers/api-to-copies-mapper';
import { ICopieModel } from '../models/ICopiesModel';
import { Observable, map, tap } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class GetCopiesService {
  constructor(
    private readonly HttpService: HttpService,
    private readonly mapper: ApiToCopiesMapper
  ) {}

  getCopies(): Observable<ICopieModel[]> {
    const url = URL_RESOURCES.copies;
    return this.HttpService.get<ICopieModel[]>(url).pipe(
      tap((result) => {
        console.log('Resultado de la API:', result);
      }),
      map((result) => this.mapper.map(result))
    );
  }
}
