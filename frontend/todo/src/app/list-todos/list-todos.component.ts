import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1,  description: 'Learn Angula'  },
    { id: 2,  description: 'Learn Angula Fullstack'  },
    { id: 2,  description: 'Learn Spring Boot'  }

  ];

  // todo = {
  //   id: 1,
  //   description: 'Learn Angula'
  // };

  constructor() { }

  ngOnInit() {
  }

}
