import {Type, Component} from '@angular/core';

export interface IWallItemComponent {
  data:any;
}

export class WallItem {

  constructor(public component: Type<Component>, public data: any) {}

}
