import { Injectable } from '@angular/core';
import { HelloWorldBean } from './welcome-data';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoData {
  
  constructor(
    private readonly http: HttpClient
  ){

  }

  retrieveAllTodos(username: string){
      return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    }
}
