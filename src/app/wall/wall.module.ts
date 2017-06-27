import { NgModule } from '@angular/core';
import { WallComponent } from "./wall.component";
import { ItemWrapperComponent } from "./item-wrapper.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "./image.component";
import { TweetComponent } from "./tweet.component";
import { ItemHostDirective } from "../shared/item-host.directive";


@NgModule({
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      WallComponent
    ],
    declarations: [
      WallComponent,
      ItemWrapperComponent,
      ImageComponent,
      TweetComponent,
      ItemHostDirective
    ],
    providers: [

    ],
})
export class WallModule { }
