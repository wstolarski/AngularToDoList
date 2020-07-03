import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public showOpenTasks: boolean;
  public showDoneTasks: boolean;

  constructor() {
    this.showOpenTasks = true;
    this.showDoneTasks = true;
  }

  ngOnInit(): void {
  }

}
