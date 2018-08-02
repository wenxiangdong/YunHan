import { Injectable } from '@angular/core';
import { HttpResponse } from '../../../types/http-response';
import { ResultMessage } from '../../../types/result-message';

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  constructor() { }

  /**
   * 模拟成功
   * @param data
   * @return {Promise<any>}
   */
  go(data: any): Promise<any> {
    const response = new HttpResponse(
      ResultMessage.SUCCESS,
      data
    );
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  }

  /**
   * 模拟失败
   * @return {Promise<any>}
   */
  error(): Promise<any> {
    const response = new HttpResponse(
      ResultMessage.ERROR,
      null,
      '失败原因balabala'
    );
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  }
}
