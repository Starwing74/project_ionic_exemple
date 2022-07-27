import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  private play: boolean;
  constructor() {
    this.play = true;
  }
  ngOnInit() {}
  handlePlayPause() {
    let v: HTMLVideoElement = (document.getElementById('ma-video') as HTMLVideoElement);

    if (this.play) {
      v.pause();
    } else {
      v.play();
    }
    this.play = !this.play;
  }
}
