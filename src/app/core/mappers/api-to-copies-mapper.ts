import { Injectable } from '@angular/core';
import { ICopieModel } from '../models/ICopiesModel';

@Injectable({
  providedIn: 'root',
})
export class ApiToCopiesMapper {
  map(payload: any): ICopieModel[] {
    if (payload !== null ) {
      return payload.map((item: any) => ({
        id: item.libraryItemId,
        author: item.author,
        title: item.title,
        stock: item.stock,
        gender: item.type,
      }));
    }
    return [];
  }
}
