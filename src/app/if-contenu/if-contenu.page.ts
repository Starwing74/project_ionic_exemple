import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-contenu',
  templateUrl: './if-contenu.page.html',
  styleUrls: ['./if-contenu.page.scss'],
})
export class IfContenuPage implements OnInit {

  private toogleval: boolean;

  constructor() { }

  ngOnInit() {
  }

  tooglechanged() {
    console.log("TOOGLE HAS CHANGED");
    console.log(this.toogleval);
  }

}
