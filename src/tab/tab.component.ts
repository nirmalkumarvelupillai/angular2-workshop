import { Component, Input } from "angular2/core";

@Component({
  selector: "tab",
  template: `
    <div [hidden]="!active" class="pane">
        <ng-content></ng-content>
    </div>
  `
})

export class Tab {
    @Input() title: string;
    @Input() active: boolean = false;
}