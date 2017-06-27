import {Component, OnInit, Input} from '@angular/core';
import {IWallItemComponent} from "./wall-item.cls";

@Component({
    selector: 'wall-image',
    template: `
        <div class="content">
          <img class="main-image" [src]="Image">
        </div>
    `,
    styles: [`
      
      .content {
          background: #fff;
          border: 1px solid #e6ecf0;
      }      
      .main-image {
        width:100%;
        height: auto;
        
      }
      
    
    `]
})
export class ImageComponent implements IWallItemComponent{

  @Input() data: any;

  get Image() {
    if (this.data && this.data.imgUrl) return this.data.imgUrl;
    return '../assets/feed-image.jpg'; // default
  }

}
