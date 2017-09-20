import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  liste:string[] = ['lire', 'faire', 'voir', 'visiter'];

  newTodo:string;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.liste.push(this.newTodo);
  }

  removeTodo(index:number) {
    this.liste.splice(index,1);
  }

}
