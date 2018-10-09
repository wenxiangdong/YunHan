import { Injectable } from '@angular/core';

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
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
}
