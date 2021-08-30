import { Component, OnInit } from '@angular/core';
import { datos } from 'src/app/models/datos';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  constructor(private dataService: DataService) {}
  array1?: Array<datos>;
  ngOnInit(): void {
    this.dataService.getData();
    this.array1 = this.dataService.array;
  }
  newData(name: string) {
    name.replace(' ', '') !== '' ? this.dataService.Newdata(name, false) : '';
  }
  changeStatus(status: boolean) {}
}
