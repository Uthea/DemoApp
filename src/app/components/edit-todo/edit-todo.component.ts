import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Output() newEditTodoEvent = new EventEmitter<string>();
  editTodo: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  editTodoEvent() {
    this.newEditTodoEvent.emit(this.editTodo)
    this.editTodo = "";

  }
}
