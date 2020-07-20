import { Component, OnInit } from '@angular/core';
import { Item } from '../_interface/item';
import { DataService } from '../_service/data.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass'],
})
export class PageListComponent implements OnInit {
  items: Item[];
  
  constructor(private dataService: DataService){
  }

  ngOnInit() {
    this.dataService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}
