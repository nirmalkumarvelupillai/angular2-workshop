import {Component} from "angular2/core";

import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tab/tab.demo";

@Component({
    selector: "app",
    directives: [
        TodoComponent,
        TabDemoComponent
    ],
    template: `
        <hr/>
        <tab-demo></tab-demo>
        <hr/>
        <todo-demo></todo-demo>                
    `
})

export class AppComponent { }
