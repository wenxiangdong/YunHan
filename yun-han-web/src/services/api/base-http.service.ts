import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoggerService } from '../utils/logger.service';
import { HttpResponse } from '../../types/http-response';
import { e } from '@angular/core/src/render3';
import { ResultMessage } from '../../types/result-message';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private baseUrl = 'http://localhost:8081';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private TAG = 'BaseHttpService';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  get(path: string, params?: HttpParams): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.baseUrl + path, {
      headers: this.headers,
      params: params
    }).pipe(
        tap(res => {
          this.logger.info(this.TAG, `get from ${path}`, 'response:', res);
        }),
        catchError(this.handleError('http', ''))
      );
  }

  post(path: string, params: any): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + path, params, {
      headers: this.headers
    });
  }

  private handleError<T> (operation = 'http', result?: T) {
    return (error: any): Observable<HttpResponse<T>> => {
      this.logger.error(this.TAG, `${operation} occurs error ${error.message}`);
      // return of()
      const response = new HttpResponse(
        ResultMessage.ERROR,
        result as T
      );
      return of(response);
    };
  }
}
