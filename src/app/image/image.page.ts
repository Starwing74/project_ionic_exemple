import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  images : Image[] = []

  constructor() {
    for (let k = 0; k < 10; k++) {
      this.images.push({
        titre: `Image ${k}`,
        src: "/assets/images/wall.jpg"
      })
    }
  }

  ngOnInit() {
  }

  imgLoaded(index) {
    console.log(index)
  }
}
