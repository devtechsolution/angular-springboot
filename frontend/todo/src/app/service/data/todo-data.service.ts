import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient
    ) { }

  retrieveAllTodos(username) {
    // console.log('Execute Hello World Bean Service');
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }
  deleteTodo(username,id) {
    // console.log('Execute Hello World Bean Service');
    return this.http.get(`http://localhost:8081/users/${username}/todos/${id}`);
  }
}
