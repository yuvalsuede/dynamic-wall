import {Component, OnInit, Input} from '@angular/core';
import {IWallItemComponent} from "./wall-item.cls";

@Component({
    selector: 'tweet',
    template: `
      <div class="tweet">
        <div class="content">
          <div class="tweet-header">
            <img class="avatar" [src]="ProfileImgUrl">
            <span class="fullname">{{ FullName }}</span>
            <span class="username">@{{ UserName }}</span>
          </div>
          <div class="tweet-body">
            {{ TweetContent }}
          </div>
        </div>
      </div>
      
    `,
    styles: [`
      .fullname {
        font-weight: bold;
      }
      .avatar {
          float: left;
          margin-top: 5px;
          margin-left: -55px;
          width: 50px;
          height: 50px;
      }
      .username {
          color: #6e8190;
      }
      .content {
          background: #fff;
          margin-left:55px;
      }
      .tweet {
          min-height:100px;
          border: 1px solid #e6ecf0;
          position: relative;
          padding: 10px 12px;
          background: white;
      }
      .tweet-body {
          margin: 10px 0;
          font-size:16px;
      }
      
    `]
})
export class TweetComponent implements IWallItemComponent {
  @Input() data: any;

  get FullName() {
    if (this.data && this.data.fullname) return this.data.fullname;
    return 'Donald J.Trump'
  }
  get UserName() {
    if (this.data && this.data.username) return this.data.username;

    return '@DJ_Trump'
  }
  get TweetContent() {
    if (this.data && this.data.content) return this.data.content;
    return 'Hello world !!!'
  }
  get ProfileImgUrl() {
    if (this.data && this.data.profileImgUrl) return this.data.profileImgUrl;
    return '../assets/profile.png'
  }


}
