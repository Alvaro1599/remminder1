import { Component, OnInit } from '@angular/core';
import { datos } from 'src/app/models/datos';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent implements OnInit {
  deleted: number = 0;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
  updateData() {
    console.log(this.dataService.array);

    console.log(this.deleted);
    this.dataService.array = this.dataService.array.filter((element) => {
      return element.id !== this.deleted;
    });
    console.log(this.dataService.array);
  }
}
