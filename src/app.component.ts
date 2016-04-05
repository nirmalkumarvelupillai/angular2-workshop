import {Component} from "angular2/core";
import {EmitterService} from "./service/EmitterService";

import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tab/tab.demo";
import {ZippyDemoComponent} from "./zippy/zippy.demo";
import {DataGridDemoComponent} from "./datagrid/datagrid.demo";

@Component({
    selector: "app",
    directives: [
        TodoComponent,
        TabDemoComponent,
        ZippyDemoComponent,
        DataGridDemoComponent
    ],
    providers:[EmitterService],
    template: `
        <div [hidden]="false">
            <hr/>
            <datagrid-demo></datagrid-demo>
        </div>
        <div [hidden]="true">
            <hr/>
            <todo-demo></todo-demo>
        </div>
        <div [hidden]="true">        
            <hr/>
            <tab-demo></tab-demo>
        </div>
        <div [hidden]="true">                        
            <hr/>
            <zippy-demo></zippy-demo>
        </div>                
    `
})

export class AppComponent { }
