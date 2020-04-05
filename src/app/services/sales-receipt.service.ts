import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class SalesReceipt {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(receiptdetails: any) {
    this.messageSource.next(receiptdetails)
  }

}