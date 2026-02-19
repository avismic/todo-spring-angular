import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ) {}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})
export class ListTodos {
  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn Spring Boot', false, new Date()),
    new Todo(3, 'Learn React', false, new Date()),
  ];
}
