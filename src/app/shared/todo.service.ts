import { Injectable } from "@angular/core";


@Injectable()//pr qu'on puisse injecter qqch ds notre service
export class TodoService {
        liste:string[] = [
        'ga',
        'zo',
        'meu'
    ];

    getTodos():string[] {
        return this.liste;
    }
        add(todo:string) {
          this.liste.push(todo);
        }
      
        remove(index:number) {
          this.liste.splice(index,1);
        }
      }
