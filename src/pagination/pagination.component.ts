import {Component} from "angular2/core";

@Component({
    selector: "pagination",
    directives: [],
    providers: [],
    template: `        
        <ul class="pagination">
            <li *ngFor="#pg of pages">
                <a (click)="navigatePage(pg)">{{pg}}</a>
            </li>
        </ul>
        <hr/>
        <ul class="pagination pagination-centered">
            <li><a href="#">←</a></li>
            <li class="active"><a href="#">10</a></li>
            <li class="disabled"><a href="#">...</a></li>
            <li><a href="#">20</a></li>
            <li><a href="#">→</a></li>
        </ul>
    `
})

export class PaginationComponent {
    pages: number[] = [1, 2, 3, 4];

    navigatePage(pageNumber: number){
        console.log("Page Number =>", pageNumber);
    }
}