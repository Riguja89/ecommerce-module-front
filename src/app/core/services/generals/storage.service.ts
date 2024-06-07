import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string):void {
    localStorage.removeItem(key);
  }

  // getUsernameFromToken(): string | null {
  //   const token = this.get<string>('token');
  //   if (token) {
  //     const decoded = this.decodeJwtToken(token);
  //     if (decoded && decoded.sub) {
  //       return decoded.sub;
  //     }
  //   }
  //   return null;
  // }

  // private decodeJwtToken(token: string): any {
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   const jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split('')
  //       .map(function (c) {
  //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join('')
  //   );

  //   return JSON.parse(jsonPayload);
  // }


}
