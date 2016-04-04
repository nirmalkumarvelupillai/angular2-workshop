import {Component} from "angular2/core";
import {TodoInput} from "./todoInput";
import {TodoList} from "./todoList";
import {TodoService} from "./todoService";

@Component({
    selector: "todo-demo",
    directives: [TodoInput, TodoList],
    providers: [TodoService],
    template: `
        <div class="container">
            <div class="row">
                <todo-input></todo-input>
            </div>
            <br/>
            <div class="row">
                <todo-list></todo-list>
            </div>
        </div>
                
    `
})

export class TodoComponent { }
