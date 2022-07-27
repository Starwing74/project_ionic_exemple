import { Injectable } from '@angular/core';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private variable: number;
  constructor(private evts: EventsService) {
    this.variable = 0;

    this.evts.subscribe('jepublie', (data) => {
      console.log('j\'ai recu une publie (mais je suis dns les settings');
      console.log(data);

      this.evts.destroy('jepublie');
    })
  }

  increment() {
    this.variable++;
  }

  getVariable() {
    return this.variable;
  }
}
