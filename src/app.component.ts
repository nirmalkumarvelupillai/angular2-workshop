import {Component} from "angular2/core";
import {EmitterService} from "./service/EmitterService";

import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tab/tab.demo";
import {ZippyDemoComponent} from "./zippy/zippy.demo";
import {DataGridDemoComponent} from "./datagrid/datagrid.demo";
import {PaginationDemoComponent} from "./pagination/pagination.demo";

@Component({
    selector: "app",
    directives: [
        TodoComponent,
        TabDemoComponent,
        ZippyDemoComponent,
        DataGridDemoComponent,
        PaginationDemoComponent
    ],
    providers:[EmitterService],
    template: `
        <div [hidden]="false">
            <hr/>
            <pagination-demo></pagination-demo>
        </div>
        <div [hidden]="true">
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
