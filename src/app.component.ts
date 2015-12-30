//import {Component, View} from 'angular2/core';
import {Component} from 'angular2/core';
import {TodoInput} from './todoInput';
import {TodoList} from './todoList';
@Component({
    selector: 'app',

//})
//@View({ 
    directives:[TodoInput,TodoList],
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

export class AppComponent { }
