import { Injectable } from '@angular/core';
import { datos } from '../models/datos';
import { JsonData } from './Jsondatos';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  array: Array<datos> = [];
  num: number = 0;
  constructor() {}

  Newdata(name: string, status: boolean) {
    this.num = this.num + 1;
    let object1 = new JsonData(this.num, name, false);
    this.array.push(object1);
  }
  getData() {
    console.log(this.array);
  }
}
