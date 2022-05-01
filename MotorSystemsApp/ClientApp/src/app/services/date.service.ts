import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
}

export function compareDates(d1: Date, d2: Date): number {
  let dt1 = new Date(d1).setHours(0, 0, 0, 0);
  let dt2 = new Date(d2).setHours(0, 0, 0, 0);

  return dt1 == dt2 ? 0 : dt1 > dt2 ? 1 : -1;
}
