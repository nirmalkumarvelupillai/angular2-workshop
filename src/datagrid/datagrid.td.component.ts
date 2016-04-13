import {Component, Input, Output, EventEmitter, OnInit } from "angular2/core";

@Component({
    selector: "datagrid-cell"
    , template: `
        <span *ngIf="isEdit">
            <a class="btn btn-primary" (click)="editClick()">
                {{tdContent}}
            </a>
        </span>
        <span *ngIf="!isEdit" [innerHTML]="tdContent"></span>
    `
})

export class DataGridTDComponent {
    @Input("content") tdContent: any;
    isEdit: boolean;

    @Output("edit-row") editRow = new EventEmitter();

    editClick() {
        console.log("Edit Clicked....");
        this.editRow.emit({ isEdit: true });
    }


    constructor() {
        // console.log("data grid content", this.tdContent);
    }

    ngOnInit() {
        console.log("Inside init", this.tdContent);
        if (this.tdContent === "edit")
            this.isEdit = true;
    }
}