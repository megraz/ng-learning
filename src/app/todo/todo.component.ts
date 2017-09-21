import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  liste:string[];

  newTodo:string;

  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
    this.liste = this.todoService.getTodos();
  }

  addTodo() {
  this.todoService.add(this.newTodo);
  }

  removeTodo(index:number) {
    this.todoService.remove(index);
  }

}
