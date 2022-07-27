import { Component, OnInit } from '@angular/core';
import { Button } from '../interfaces/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  listButtons: Button[] = [];
  search: string = "";

  constructor() {

    for (let k = 0; k < 100; k++) {
      this.listButtons.push({
        no: k,
        titre: `c'est le boutton numero ${k}`
      })
    }

    //this.search = "init";

  }

  ngOnInit() {
  }

  clicked(b: Button) {
    console.log('clicked from', b.no);
    console.log(b.titre);

    let aux : Button[] = [];
    for (let k = 0; k< this.listButtons.length; k++) {
      if (this.listButtons[k].no != b.no) {
        aux.push(this.listButtons[k]);
      }
    }
    this.listButtons = aux;
  }

  updateSearchBar() {
    console.log(this.search);
  }

  loadData(evt) {
    console.log('infinite scroll');

    setTimeout(() => {

      for (let k = 0; k < 100; k++) {
        this.listButtons.push({
          no: k,
          titre: `c'est le boutton numero ${k}`
        })
      }
      console.log('Done');
      evt.target.complete();

    }, 1000);
  }
}
