import { Component, OnInit, DoCheck } from '@angular/core';

import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, DoCheck {
  title: any = '';
  todos: Todo[] = [];
  task: string = '';
  vrb: boolean = false;

  constructor(private todosSrv: TodosService) {}

  async ngOnInit() {
    this.vrb = true;
    await this.todosSrv.wait();
    this.vrb = false;
    console.log(this.vrb);
    this.todos = this.todosSrv.getTaskList();
  }

  ngDoCheck(): void {
    this.todos = this.todosSrv.getTaskList();
  }

  async addTask() {
    this.vrb = true;
    await this.todosSrv.wait();
    this.vrb = false;
    this.todosSrv.addTask(this.task);
  }

  change(id: number) {
    this.todosSrv.change(id);
    console.log(this.todosSrv.todos);
  }
}