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

  async change(id: number) {
    await this.todosSrv.wait();
    this.todosSrv.change(id);
    console.log(this.todosSrv.todos);
  }
  async removeTodo(id: number) {
    await this.todosSrv.wait();
    this.todosSrv.removeTodo(id).then((updateTodo: Todo[]) => {
      this.todos = updateTodo;
    });
  }
}
