import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lpcustom',
  templateUrl: './lpcustom.component.html',
  styleUrls: ['./lpcustom.component.scss'],
})
export class LPCustomComponent implements OnInit {

  @Input() nom: string;
  @Input() nb: number;

  constructor() { }

  ngOnInit() {}

}
