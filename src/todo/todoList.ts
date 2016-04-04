import {Component, Inject} from "angular2/core";
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, COMMON_PIPES, FORM_DIRECTIVES} from "angular2/common";
import {TodoService} from "./todoService";

@Component({
    selector: "todo-list",
    directives: [CORE_DIRECTIVES],
    template: `
        <div class="col-md-8">
            <div *ngFor="#todo of _todoService.todos;#i = index" class="alert alert-info alert-dismissible" role="alert">
                <button type="button" class="close" aria-label="Close" (click)="closeTask(todo)"><span aria-hidden="true">&times;</span></button>
                {{todo}}
            </div>
        </div>
    `
})

export class TodoList {
    public _todoService: TodoService;

    constructor( @Inject(TodoService) todoService: TodoService) {
        this._todoService = todoService;
    }
    closeTask(todo: string) {
        const index = this._todoService.todos.indexOf(todo);
        this._todoService.todos.splice(index, 1);
    }
}
