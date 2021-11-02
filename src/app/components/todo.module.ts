import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoFormComponent} from "./add-todo-form/add-todo-form.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddTodoFormComponent,
    EditTodoComponent,
    NavbarComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddTodoFormComponent,
    EditTodoComponent,
    NavbarComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
