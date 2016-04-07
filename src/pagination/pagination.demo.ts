import {Component} from "angular2/core";
import {PaginationComponent} from "./pagination.component";

@Component({
    selector: "pagination-demo",
    directives: [PaginationComponent],
    providers: [],
    template: `        
        <pagination>
        </pagination>
    `
})

export class PaginationDemoComponent {

}