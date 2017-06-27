import {Component, OnInit, Input} from '@angular/core';
import {WallItem} from "./wall-item.cls";

@Component({
    selector: 'wall',
    template: `
        <div  class="wall-item" *ngFor="let item of items">
          <!-- items will be generated here -->
          <item-wrapper [item]="item"></item-wrapper>
        </div>
    `,
    styles: [`
      .wall-item {
        margin-top:10px;
      }
    
    `]
})
export class WallComponent  {

  @Input() items: WallItem[];

  ngOnInit() {
    console.log(this.items);
  }

}
