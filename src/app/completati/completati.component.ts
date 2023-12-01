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

  constructor(private todosSrv: TodosService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.todos = this.todosSrv.getTaskList();
  }

  addTask() {
    this.todosSrv.addTask(this.task);
  }

  change(id: number) {
    this.todosSrv.change(id);
    console.log(this.todosSrv.todos);
  }
}
