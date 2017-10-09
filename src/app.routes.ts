import {Routes} from "@angular/router"
import { BoucleComponent } from "./app/boucle/boucle.component";
import { TemplateComponent } from "./app/template/template.component";
import { TodoComponent } from "./app/todo/todo.component";
import { TodoSecondComponent } from "./app/todo-second/todo-second.component";
import { ChienComponent} from "./app/chien/chien.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
 
export const appRoutes:Routes = [
    {path: 'boucle', component: BoucleComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'todo-second', component: TodoSecondComponent},
    {path: 'chiens', component: ChienComponent},
    {path: '', pathMatch:'full', redirectTo: '/chiens'},
    {path: '**', component: PageNotFoundComponent},
    
];