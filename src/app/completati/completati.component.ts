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

  ngOnInit(): void {}

  async ngDoCheck() {
    this.vrb = true;
    await this.todosSrv.wait();
    this.vrb = false;
    this.todos = this.todosSrv.getTaskList();
  }

  addTask() {
    this.todosSrv.addTask(this.task);
  }

  async change(id: number) {
    await this.todosSrv.wait();
    this.todosSrv.change(id);
    console.log(this.todosSrv.todos);
  }
}
