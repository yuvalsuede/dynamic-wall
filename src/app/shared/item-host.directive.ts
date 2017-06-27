import {Directive, ViewContainerRef} from "@angular/core";
@Directive({
  selector: '[item-host]',
})
export class ItemHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
