import { Injectable } from '@angular/core';
import { HttpResponse } from '../../../types/http-response';
import { ResultMessage } from '../../../types/result-message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  constructor() { }

  http(data: any): Observable<any> {
    const response = new HttpResponse(
      ResultMessage.SUCCESS,
      data
    );
    return new Observable<any>(subscriber => {
      setTimeout(() => {
        subscriber.next(response);
      }, 1000);
    });
  }
}
