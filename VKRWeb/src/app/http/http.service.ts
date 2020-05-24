import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private router: Router) {}
  private _cache = {};

  public postRequest(url: string, data: any, options: any = {}) {
    return this.http
      .post(url, data, options)
  }

  public getRequest(url: string, cacheName: string, options: any = {}) {
    if (!this._cache[cacheName]) {
      return this.http.get(url, options).pipe(
        switchMap((response) => {
          this._cache[cacheName] = response;
          return of(response);
        })
      );
    } else {
      return of(this._cache[cacheName]);
    }
  }

  /**
   * Вернет занчения из кэша
   */
  public getCacheData(name: string) {
    return this._cache[name];
  }

  public clearCache() {
    this._cache = {};
  }

  public goToUrl(url){
    this.router.navigate([`${url}`])
  }
}
