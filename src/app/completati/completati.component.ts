import { Component, OnInit, DoCheck } from '@angular/core';

import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit, DoCheck {
  title: any = '';
  todos: Todo[] = [];
  task: string = '';
  vrb: boolean = false;

  constructor(private todosSrv: TodosService) {}

  async ngOnInit() {
    this.vrb = true;
    await this.todosSrv.wait();
    this.vrb = false;
  }

  ngDoCheck(): void {
    this.todos = this.todosSrv.getTaskList();
  }

  addTask() {
    this.vrb = true;
    this.todosSrv.addTask(this.task);
    this.vrb = false;
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
