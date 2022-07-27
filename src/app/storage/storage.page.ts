import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  private frominput: string;

  constructor(private bd: Storage) {
    this.frominput = "";
    this.bd.create();
  }

  ngOnInit() {
  }

  save() {
    const res = this.bd.set('input', this.frominput).then( data => {
      console.log(data);
    });
  }
  
  load() {
    this.bd.get('input').then( data => {
      this.frominput = data;
    });
  }

}
