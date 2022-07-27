import { JSONService } from './../services/json.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-json',
  templateUrl: './display-json.page.html',
  styleUrls: ['./display-json.page.scss'],
})
export class DisplayJSONPage implements OnInit {

  authors = [];

  constructor(private json: JSONService) { }

  ngOnInit() {
  }

  loadAuthors() {
    console.log('asked');
    this.json.getAuthors().subscribe(
      (d) => {
        console.log('got it');
        console.log(d);
        
        
        this.authors = d;
    })
  }
}
