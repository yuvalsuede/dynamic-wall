import { Injectable } from '@angular/core';
import {WallItem} from "../wall/wall-item.cls";
import {TweetComponent} from "../wall/tweet.component";
import {ImageComponent} from "../wall/image.component";

@Injectable()
export class PostsService {

    constructor() {

    }

    getWallItems() {
      return [

        new WallItem(TweetComponent,{
          firstname:'Donald J. Trump',
          username: 'DJ_Trump',
          profileImgUrl : '../assets/profile.png',
          content: 'Hello World !!!'
        }),

        new WallItem(TweetComponent,{
          firstname:'Real D.Trump',
          username: 'RealTrump',
          profileImgUrl : '../assets/profile-2.png',
          content: 'Angular is really cool. We should use it to build the wall!!'
        }),

        new WallItem(ImageComponent, {
          imgUrl:'../assets/feed-image.jpg'
        }),

        new WallItem(TweetComponent,{
          firstname:'Donald J. Trump',
          username: 'DJ_Trump',
          profileImgUrl : '../assets/profile.png',
          content: 'Facebook must pay for building the wall!! We will make MySpace great again!'
        }),

        new WallItem(ImageComponent, {
          imgUrl:'../assets/feed-image2.jpg'
        }),
        new WallItem(TweetComponent,{
          firstname:'Real D.Trump',
          username: 'RealTrump',
          profileImgUrl : '../assets/profile-2.png',
          content: 'Most versions of Greek salad contain either black or kalamata olives, each of which is a healthy source of unsaturated fat.'
        }),
        new WallItem(TweetComponent,{
          firstname:'Osnat J. Trump',
          username: 'DJ_Osnat',
          profileImgUrl : '../assets/profile.png',
          content: 'Hello Mega !!!'
        }),



      ]
    }

}
