import { EventsService } from './../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-fromhelloworld',
  templateUrl: './fromhelloworld.page.html',
  styleUrls: ['./fromhelloworld.page.scss'],
})
export class FromhelloworldPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private setservice: SettingsService,
    private evts: EventsService
  ) {
    this.route.params.subscribe(data => {
      console.log('from arg ?')
      console.log(data);
    })

    this.evts.subscribe('jepublie', (data) => {
      console.log('j\'ai recu une publie');
      console.log(data);
    })
  }

  ngOnInit() {
  }

  publication() {
    console.log('publication');
    this.evts.publish(   'jepublie',    {'date': new Date()}   );
  }

}
