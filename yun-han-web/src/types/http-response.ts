import { ResultMessage } from './enums/result-message';

export class HttpResponse<T> {
  constructor(
    public result: ResultMessage,
    public data: T,
    public error?: string) {}
}
