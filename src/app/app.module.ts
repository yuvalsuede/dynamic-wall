import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WallModule } from "./wall/wall.module";
import { ImageComponent } from "./wall/image.component";
import { PostsService} from "./services/posts.service";
import { TweetComponent} from "./wall/tweet.component";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    WallModule
  ],
  providers: [ PostsService ],
  entryComponents:[
    TweetComponent,
    ImageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
