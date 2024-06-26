import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { URL_RESOURCES } from '../resources/url.resources';
import { map } from 'rxjs';
import { IrefreshToken } from '../models/refreshToken.models';
import { ApiToTokenMapper } from '../mappers/api-to-token.mapper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToTokenMapper
  ) { }
doRefreshToken(refreshToken: IrefreshToken){
  const url = URL_RESOURCES.token;  //cambiar esta url con lo que nos den los del back
  console.log(url +"  "+ JSON.stringify(refreshToken))
  return this.httpService.post<String>(url,JSON.stringify(refreshToken))
    .pipe(
      map((result) => this.mapper.map(result))
    );
}
}
