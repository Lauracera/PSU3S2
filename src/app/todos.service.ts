import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    { id: 1, title: 'cleaning my car', completed: true },
    { id: 2, title: 'shopping', completed: true },
    { id: 3, title: 'homework', completed: false },
  ];

  count: number = 3;

  newTask: any = '';
  constructor() {}
  wait(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  }

  change(id: number) {
    this.todos = this.todos.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
  getTaskList(): any {
    return this.todos;
  }

  addTask(data: string) {
    this.count++;
    let newTask: Todo = { id: this.count, title: data, completed: true };
    this.todos.push(newTask);
  }

  removeTodo(id: number): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        resolve(this.todos);
      }, 2000);
    });
  }
}
