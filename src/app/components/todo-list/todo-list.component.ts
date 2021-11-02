import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []

  editMode : boolean = false;
  index : number = -1;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content : 'First todo',
        completed : false
      },
      {
        content : 'Second todo',
        completed : false
      }
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v,i) => {
      if (i == id) v.completed = !v.completed;
      console.log(v);
      return v;
    })
  }



  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  editTodo(id : number) {
    this.editMode = !this.editMode;
    this.index = id;
  }

  editTodoText(id: number, content : string) {
    let todo : Todo | undefined = this.todos.find((v, i) => i == id);
    if (todo != undefined) {
      todo.content = content;
    }
    this.editMode = !this.editMode;

  }

  addTodo(todo : Todo) {
    this.todos.push(todo);
  }

}
