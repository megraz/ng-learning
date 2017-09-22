import { Component, OnInit } from '@angular/core';
import { TodoAjaxService } from '../shared/todo-ajax.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  liste:Todo[];
  newTodo:string;

    /**
     * Pour utiliser un service dans un component ou
     * ailleurs, on ne fait pas une instance nous même,
     * à la place, on utilise l'injection de dépendance
     * de angular (https://angular.io/guide/dependency-injection)
     * C'est elle qui se chargera de faire les instances
     * des services et de nous les rendre accessibles dans
     * les component et autre.
     * Pour injecter un service dans un component, on 
     * ajoute simplement en argument du constructor une 
     * variable (public ou private, mais souvent private)
     * qui aura notre classe service comme type (peu importe
     * le nom de la variable tant que le type correspond)
     */
  constructor(private todoService:TodoAjaxService) { 
  }

  ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = todos);
  }

  addTodo() {
    this.todoService.addTodo({message:this.newTodo})
    .then((todo) => this.liste.push(todo));
  }

  removeTodo(index:number) {
    this.todoService.removeTodo({id:index, message:'osef'}).then(() => this.liste = this.liste.filter((todo) => todo.id !== index))
  }

}
