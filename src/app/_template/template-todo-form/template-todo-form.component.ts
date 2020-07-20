import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../_interface/item';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass'],
})
export class TemplateTodoFormComponent implements OnInit {

  item: Item = {
    label : '',
    status : false
  };

  constructor(private dataServie: DataService) {}

  ngOnInit(): void {}

  addItem(){
    if(this.item.label != ''){
      this.dataServie.addItem(this.item);
      this.item.label = '';
    }
  }
}
