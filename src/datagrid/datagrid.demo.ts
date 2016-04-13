import {Component} from "angular2/core";
import {DataGridComponent} from "./datagrid.component";

import {DataGridDemoService} from "./datagrid.demoservice";

@Component({
    selector: "datagrid-demo",
    directives: [DataGridComponent],
    providers: [DataGridDemoService],
    template: `        
        <datagrid [map]="tablemap" [(data)]="tabledata" (edit-row)="editData($event)">
        </datagrid>
    `
})

export class DataGridDemoComponent {
    tablemap: any[];
    tabledata: any[];

    constructor(private _gridDataService: DataGridDemoService) {
        this.tablemap = [
            {
                name: "City",
                map: "city",
            }, {
                name: "Color",
                map: "colorcode"
            }, {
                name: "Edit",
                map: "edit"
            }
        ];

        this.tabledata = this._gridDataService.gridData();
    }


    editData($event: any) {
        const index = $event.index;
        const editObj = this.tabledata[index];
        editObj.city = "chennai";
        this.tabledata[index] = {};
        //this.tabledata[index] = editObj;

    }

}