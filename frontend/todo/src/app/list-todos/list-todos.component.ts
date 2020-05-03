import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

//  Future
//  -No Navigation Menu and Footer
//  -No Formatting- Bootstrap
//  -No Security for Menus
//  -Hardcoded Logic in the TodoList and LoginComponent
//  -Remaining Functionality - Edit, Delete, Add
//  -Spring Boot
//  -Spring Security
export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done:  boolean,
    public targetDate: Date
     ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] ;
  message: string;
  // = [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(1, 'Learn Angula Fullstack', false, new Date()),
  //   new Todo(1, 'Learn Spring Boot', false, new Date())
  //   // { id: 1,  description: 'Learn Angula'  },
  //   // { id: 2,  description: 'Learn Angula Fullstack'  },
  //   // { id: 2,  description: 'Learn Spring Boot'  }

  // ];

  // todo = {
  //   id: 1,
  //   description: 'Learn Angula'
  // };

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('devtechsolution').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
     console.log(`delete todos ${id}`);
     this.todoService.deleteTodo('devtechsolution', id).subscribe(
       response => {
         console.log(response);
         this.message = `Delete of Todo ${id} Successful!`;
         this.refreshTodos();
       }
     );
  }

}
