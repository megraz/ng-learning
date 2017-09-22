import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/toPromise';
import { Todo } from "./todo";

@Injectable()
export class TodoAjaxService {
    private urlAPI:string = 'http://localhost:3000/todo';
    constructor(private http:HttpClient){}

    getAllTodo():Promise<Todo[]> {
        return this.http.get<Todo[]>(this.urlAPI).toPromise();
    }

    addTodo(todo:Todo):Promise<Todo> {
        return this.http.post<Todo>(this.urlAPI, todo).toPromise();
    }

    removeTodo(todo:Todo):Promise<any> {
        return this.http.delete(this.urlAPI+'/'+todo.id).toPromise();
    }

}