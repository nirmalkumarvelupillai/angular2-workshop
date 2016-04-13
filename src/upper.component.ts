import {Component, RenderViewRef,Renderer, ElementRef,Input, Query, QueryList, ContentChildren, AfterContentInit, EventEmitter, OnInit } from "angular2/core";

@Component({
  selector: "upper",
  template: "<ng-content></ng-content>"
})

export class UpperComponent {
  constructor(private elt: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
    let textNode = this.elt.nativeElement.childNodes[0];
    let textInput = textNode.nodeValue;
    textNode.nodeValue = textInput.toUpperCase();
  }
}