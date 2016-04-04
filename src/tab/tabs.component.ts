import { Component, ContentChildren, QueryList, AfterContentInit, forwardRef, Inject  } from "angular2/core";
import { Tab } from "./tab.component";

@Component({
    selector: "tab-group",
    template: `
        <ul class="nav nav-tabs">
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
                <a href="#">{{tab.title}}</a>
            </li>
        </ul>        
        <ng-content></ng-content>
    `
})

export class TabGroupComponent implements AfterContentInit {

    @ContentChildren(Tab)
    tabs: QueryList<Tab>;

    ngAfterContentInit() {
        let activeTabs = this.tabs.filter(tab => tab.active);
        if(activeTabs.length === 0 && this.tabs.length > 0){
            this.tabs.first.active = true;
        }
    }

    selectTab(tab: Tab){
        this.tabs.toArray().forEach(tab => tab.active = false)
        tab.active = true;
    }

}
