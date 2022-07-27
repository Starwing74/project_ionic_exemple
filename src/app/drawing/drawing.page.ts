import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.page.html',
  styleUrls: ['./drawing.page.scss'],
})
export class DrawingPage implements OnInit {

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private old_x: number;
  private old_y: number;

  constructor() { }

  ngOnInit() {
    this.canvas = (document.getElementById("canvas") as HTMLCanvasElement);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext('2d');
  }

  trace(x1, y1, x2, y2) {
    this.context.strokeStyle = "red";
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }

  ts(evt) {
    console.log('start');
    this.old_x = evt.changedTouches[0].clientX;
    this.old_y = evt.changedTouches[0].clientY - this.canvas.offsetTop;
  }

  tm(evt) {
    console.log('move');
    // console.log(evt);
    this.trace(
      this.old_x, this.old_y,
      evt.changedTouches[0].clientX, evt.changedTouches[0].clientY - this.canvas.offsetTop
    );

    this.old_x = evt.changedTouches[0].clientX;
    this.old_y = evt.changedTouches[0].clientY - this.canvas.offsetTop;
  }

  te(evt) {
    // console.log('end');
    // console.log(evt);
  }

}
