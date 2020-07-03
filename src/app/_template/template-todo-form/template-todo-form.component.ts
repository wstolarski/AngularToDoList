import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo: ToDo;

  public addNewTaskToDo(event?: any): void{
    this.toDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
    console.log(this.toDo);
  }

  constructor() {
    this.toDo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

  ngOnInit(): void {
  }

}
