import {Component, Input, Output, EventEmitter} from "angular2/core";
import {EmitterService} from "../service/EmitterService";

@Component({
    selector: "zippy",
    directives: [],
    providers: [],
    styles: [`
    `],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="unzipContent()">
                <h4 class="panel-title">
                    <a [class.collapsed]="!unzip">
                        <span class="pull-right">
                            <i class="glyphicon"
                                [class.glyphicon-chevron-up]="unzip"
                                [class.glyphicon-chevron-down]="!unzip"></i>
                        </span>
                        {{title}}
                     </a>
                </h4>
            </div>
            <div class="panel-collapse collapse"
                 [class.in]="unzip">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `
})

export class Zippy {
    @Input() title: string;
    @Input() unzip: boolean;

    unzipped: EventEmitter<any>;

    constructor(private _emitterService: EmitterService) {
        this.unzipped = this._emitterService.get("_unzipped");
    }

    unzipContent() {
        this.unzip = !this.unzip;
        this.unzipped.emit({zippy: this, unzip: this.unzip});
    }
}