import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../utils/logger.service';
import { HttpResponse } from '../../types/http-response';
import { ResultMessage } from '../../types/result-message';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private baseUrl = 'go://localhost:8081';
  private TAG = 'BaseHttpService';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  async get<T = any>(path: string, params?: any): Promise<HttpResponse<T>> {
    let parsedString = '';
    for (let key in params) {
     parsedString += (key + '=' + params[key] + '&');
    }
    this.logger.info(this.TAG, 'parsed', parsedString);
    let url = this.baseUrl + path;
    if (parsedString.length) {
      url = url + '?' + parsedString.slice(0, parsedString.length - 1);
    }
    this.logger.info(this.TAG, `get ${url}`, params);
    // 发起请求
    let res: HttpResponse<T>;
    try {
      const temp = await fetch(url);
      res = await temp.json();
      return res;
    } catch (e) {
      this.logger.error(this.TAG, `get from ${url}, error occurs`, e);
      // return new HttpResponse(
      //   ResultMessage.ERROR,
      //   null,
      //   e.toString()
      // );
      throw e;
    }
  }

  async post<T = any>(path: string, params: any): Promise<HttpResponse<T>> {
    let formData = new FormData();
    for (let key in params) {
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
      return res;
    } catch (e) {
      this.logger.error(this.TAG, `get from ${url}, error occurs`, e);
      throw e;
    }
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
