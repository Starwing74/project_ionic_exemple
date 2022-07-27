import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.page.html',
  styleUrls: ['./helloworld.page.scss'],
})
export class HelloworldPage implements OnInit {

  constructor(
    private router: Router,
    private setservice: SettingsService
  ) {
    console.log('creation page helloworld');
  }

public ngOnInit() {console.log('ngOnInit')}
public ionViewWillEnter() {console.log('ionViewWillEnter')}
public ionViewDidEnter() {console.log('ionViewDidEnter')}
public ionViewWillLeave() {console.log('ionViewWillLeave')}
public ionViewDidLeave() {console.log('ionViewDidLeave')}
public ngOnDestroy() {console.log('ngOnDestroy')}

public buttonclick() {
  console.log('click');
  this.router.navigate(['/fromhelloworld', {
    arg1: 1,
    from: "helloworld"
  }])
}

doIncrement() {
  console.log('increment');
  this.setservice.increment();
}

}
