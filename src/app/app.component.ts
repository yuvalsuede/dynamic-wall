import { Component } from '@angular/core';
import {WallItem} from "./wall/wall-item.cls";
import {PostsService} from "./services/posts.service";

@Component({
  selector: 'app-root',
  template:`
    <div class="feed-header">{{ title }}</div>
    <div class="feed-content">            
            <wall [items]="items"></wall>
    </div>

  `,

  styles: [`
      .feed-header {
        background: #39579a;
        height: 45px;
        color: white;
        text-align: center;
        line-height: 45px;
      }
      .feed-content {
        width:640px;
        margin: 0 auto;
      }
  `]
})
export class AppComponent {

  items: WallItem[];
  title = 'My feed';

  ngOnInit() {
    this.loadFeed();
  }

  constructor(private feedService: PostsService) {}

  loadFeed() {

    this.items = this.feedService.getWallItems();

  }
}
