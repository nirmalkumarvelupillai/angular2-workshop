import {Component} from "angular2/core";
import {ZippyGroup} from "./zippy.group.component";
import {Zippy} from "./zippy.component";

@Component({
    selector: "zippy-demo",
    directives: [ZippyGroup, Zippy],
    providers: [],
    template: `        
        <zippy-group [autoclose]="false">
            <zippy title="Course 1">
                <h2> Couse details 1 </h2>
                <p> details for course 1 </p>
            </zippy>
            <zippy [title]="'Course 2'" [unzip]="true">
                <h3> Course Detail 2 </h3>
                <p> details of course 2 </p>
            </zippy>
        </zippy-group>
    `
})

export class ZippyDemoComponent { }