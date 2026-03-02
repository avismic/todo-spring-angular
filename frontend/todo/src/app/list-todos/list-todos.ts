import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe, DatePipe, JsonPipe } from '@angular/common';
import { TodoData } from '../service/data/todo-data';

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
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe, JsonPipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})
export class ListTodos implements OnInit {
  
  todos: Todo[] = [];

  constructor(
    private todoService: TodoData
  ){}

  ngOnInit() {
    this.todoService.retrieveAllTodos('avismic').subscribe(
      (response) => {
        console.log(response);
        this.todos = response;
      },
    );
  }

}
