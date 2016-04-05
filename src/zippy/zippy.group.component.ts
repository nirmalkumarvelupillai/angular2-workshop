import {Component, Input, QueryList, ContentChildren, AfterContentInit, EventEmitter, OnInit } from "angular2/core";

import {EmitterService} from "../service/EmitterService";
import {Zippy} from "./zippy.component";

@Component({
    selector: "zippy-group",
    directives: [],
    providers: [],
    template: `
        <div class="panel-group">
            <ng-content></ng-content>
        </div>
    `
})

export class ZippyGroup implements AfterContentInit {
    unzipped: EventEmitter<any>;

    @Input() autoclose: boolean = false;

    @ContentChildren(Zippy)
    zippys: QueryList<Zippy>;

    constructor(private _emitterService: EmitterService) {
    }

    ngOnInit() {
        this.unzipped = this._emitterService.get("_unzipped");
        this._configureAutoClose();
    }

    ngAfterContentInit() {
        //console.log(this.zippys.length);
        //console.log(this.zippys.toArray());
    }

    private _configureAutoClose() {
        this.unzipped.subscribe((evtObj: any) => {
            if (this.autoclose) {
                this._resetAllZippy();
                evtObj.zippy.unzip = evtObj.unzip;
            }
        });
    }

    private _resetAllZippy() {
        this.zippys.toArray().forEach(zippy => zippy.unzip = false);
    }
}