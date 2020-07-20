import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../_interface/item';
import { DataService } from '../../_service/data.service';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

  @Input() item: Item;
  constructor(private dataService: DataService){}

  ngOnInit(): void {}

  deleteItem(event, item: Item){
    this.dataService.deleteItem(item);
  }
  updateItem(item: Item){
    this.dataService.updateItem(item);
    console.log(item.id);
  }
  changeCheck(item: Item){
    this.item.status = !this.item.status;
    this.dataService.changeCheck(item);
  }
}
