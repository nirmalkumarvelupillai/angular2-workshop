import {Component} from "angular2/core";
import {DataGridComponent} from "./datagrid.component";

@Component({
    selector: "datagrid-demo",
    directives: [DataGridComponent],
    providers: [],
    template: `        
        <datagrid [map]="tablemap" [data]="tabledata">
        </datagrid>
    `
})

export class DataGridDemoComponent {
    tablemap: any[];
    tabledata: any[];

    constructor() {
        this.tablemap = [
            {
                name: "ID",
                map: "id"
            }, {
                name: "First Name",
                map: "firstname"
            }
        ];

        this.tabledata = [
            {
                id: "232323",
                dummy: "dummy1",
                firstname: "James",
                lastname: "Vasanth"
            }, {
                id: "823233",
                dummy: "dummy2",
                firstname: "John",
                lastname: "Jacob"
            }
        ];
    }

}