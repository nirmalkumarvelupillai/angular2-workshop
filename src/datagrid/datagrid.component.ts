import {Component, Input, OnInit, Pipe, PipeTransform} from "angular2/core";

@Pipe({ name: "extractrow" })
export class ExtractRowPipe implements PipeTransform {
    // Impure function
    transform(values: any, arg: any[]) {
        console.log(values);
        console.log(arg);
        let rArr: any[] = [];

        if (arg[0]) {
            const keys: any[] = arg[0];
            keys.forEach(key => {
                rArr.push(values[key]);
            })
        }
        console.log(rArr);
        return rArr;
    }
}

@Component({
    selector: "datagrid",
    directives: [],
    providers: [],
    pipes: [ExtractRowPipe],
    template: `        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th *ngFor="#h of headers,">
                        {{h}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#dt of data,#di=index">
                    <td *ngFor="#v of dt | extractrow:keys">{{v}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class DataGridComponent {
    @Input() map: any[];
    @Input() data: any[];
    keys: any[];
    headers: any[];

    constructor() {
    }

    ngOnInit() {
        console.log("Map", this.map);
        console.log("Data", this.data);
        this.keys = this.map.map(m => m.map);
        this.headers = this.map.map(m => m.name);
        console.log(this.keys);
    }
} 