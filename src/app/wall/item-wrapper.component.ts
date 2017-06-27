import {Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import {WallItem, IWallItemComponent} from "./wall-item.cls";
import {ItemHostDirective} from "../shared/item-host.directive";

@Component({
  selector: 'item-wrapper',
  template: `<ng-template item-host></ng-template>`,
})
export class ItemWrapperComponent implements OnInit {

  @Input() item: WallItem;
  @ViewChild(ItemHostDirective) itemHost: ItemHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadItem();
  }


  loadItem() {

    let feedItem = this.item;
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(feedItem.component);

    console.log(this.itemHost);

    let viewContainerRef = this.itemHost.viewContainerRef;


    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<IWallItemComponent>componentRef.instance).data = feedItem.data;

  }

}
