import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../utils/logger.service';
import { HttpResponse } from '../../types/http-response';
import { ResultMessage } from '../../types/enums/result-message';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private baseUrl = 'http://localhost:8081';
  private TAG = 'BaseHttpService';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  async get<T = any>(path: string, params?: any): Promise<T> {
    const url = this.baseUrl + path;
    const httpParams = new HttpParams(params);
    try {
      const res = await (this.http.get<HttpResponse<T>>(url, {
        params: httpParams
      }).toPromise());
      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data as T;
      }
    } catch (e) {
      this.logger.error(this.TAG, `get from ${url}, error occurs`, e);
        throw e;
    }
  }

  async post<T = any>(path: string, params: any): Promise<T> {
    const formData = new FormData();
    for (const key in params) {
      formData.append(key, params[key]);
    }
    const url = this.baseUrl + path;
    try {
      let res;
      res = await fetch(url, {
        method: 'POST',
        body: formData
      });
      res = await res.json();
      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data as T;
      }
    } catch (e) {
      this.logger.error(this.TAG, `get from ${url}, error occurs`, e);
      throw e;
    }
  }
}
