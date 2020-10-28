import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Alert{
  message: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert = new Subject<Alert>();
  alertObs = this.alert.asObservable();

  setMessage(object: Alert) {
    this.alert.next(object);
  }
}
