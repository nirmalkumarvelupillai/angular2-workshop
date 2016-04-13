import {Component, Input, Output, EventEmitter, OnInit, Pipe, PipeTransform} from "angular2/core";
import {DataGridTDComponent} from "./datagrid.td.component";

@Pipe({ name: "extractrow" })
export class ExtractRowPipe implements PipeTransform {
    // Impure function
    transform(values: any, arg: any[]) {
        // console.log(values);
        // console.log(arg);
        let rArr: any[] = [];

        if (arg[0]) {
            const keys: any[] = arg[0];
            keys.forEach(key => {
                // if(key === "edit")
                //     rArr.push("<button>Edit</button>");
                // else
                if (values[key] !== undefined)
                    rArr.push(values[key]);
                else
                    rArr.push(key);
            })
        }
        //console.log(rArr);
        return rArr;
    }
}

@Component({
    selector: "datagrid",
    directives: [DataGridTDComponent],
    providers: [],
    pipes: [ExtractRowPipe],
    template: `        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th *ngFor="#h of headers">
                        {{h}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#dt of data,#di=index">
                    <td *ngFor="#v of dt | extractrow:keys">
                        <datagrid-cell [content]="v" (edit-row)="editRowFunc($event,di)"></datagrid-cell>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export class DataGridComponent {
    @Input() map: any[];
    @Input() data: any[];

    @Output("edit-row") editRow = new EventEmitter();

    editRowFunc($event: any, dt: any) {
        console.log("Event object inside component", $event, dt);
        this.editRow.emit({"index": dt});
    }

    keys: any[];
    headers: any[];

    constructor() { }

    private getkeys(): any[] {
        let keyArr: any[] = [];
        keyArr = this.map.map(m => m.map);
        // console.log("get Keys....", keyArr);
        return keyArr;
    }

    private getheaders(): any[] {
        let headerArr: any[] = [];
        headerArr = this.map.map(m => m.name);
        // console.log("get headers....", headerArr);
        return headerArr;
    }

    ngOnInit() {
        console.log("Map", this.map);
        console.log("Data", this.data);
        this.keys = this.getkeys();
        this.headers = this.getheaders();
    }

    // getCellValue(value: any) {
    //     console.log(value);
    //     if (value !== "edit") return value;
    //     else
    //         value = "<a class='btn btn-primary'>Edit</a>";

    //     return value;
    // }
} 