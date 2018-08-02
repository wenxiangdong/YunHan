import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public info(tag, ...contents): void {
    const time = new Date().toLocaleTimeString();
    if (console.info) {
      console.info(`At ${time} in ${tag}`);
      for (const item of contents) {
        console.info(item);
      }
    } else {
      this.log(tag, ...contents);
    }
  }

  public error(tag, ...contents): void {
    const time = new Date().toLocaleTimeString();
    if (console.error) {
      console.error(`At ${time} in ${tag}`);
      for (const item of contents) {
        console.error(item);
      }
    } else {
      this.log(tag, ...contents);
    }
  }

   private log(tag, ...contents): void {
    const time = new Date().toLocaleTimeString();
    console.log(`At ${time} in ${tag}`);
    for (const item of contents) {
      console.log(item);
    }
  }
}
