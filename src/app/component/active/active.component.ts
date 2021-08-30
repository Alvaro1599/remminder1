import { Component, OnInit } from '@angular/core';
import { datos } from 'src/app/models/datos';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  constructor(private dataService: DataService) {}
  array1?: Array<datos>;
  newData(name: string) {
    name.replace(' ', '') !== '' ? this.dataService.Newdata(name, true) : '';
  }
  ngOnInit(): void {
    this.array1 = this.dataService.array;
  }
}
