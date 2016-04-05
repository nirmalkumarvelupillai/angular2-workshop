import {Component} from "angular2/core";

import {TabGroupComponent} from "./tabs.component";
import {Tab} from "./tab.component";


@Component({
    selector: "tab-demo",
    directives: [ Tab, TabGroupComponent],
    providers: [],
    template: `
        <tab-group>
            <tab [title]="'first'">
                <tab-group>
                    <tab [title]="'t1'">
                        <h3>tab1</h3>
                    </tab>
                    <tab title="t2">
                        <h3>tab2</h3>
                    </tab>
                </tab-group>
            </tab>
            <tab title="second">
                <h3>second tab</h3>
            </tab>
            <tab title="third">
                <h3>third tab</h3>
            </tab>                        
        </tab-group>
    `
})

export class TabDemoComponent { }