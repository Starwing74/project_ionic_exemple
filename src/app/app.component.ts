import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Page Image', url: '/image', icon: 'image' },
    { title: 'Page Buttons', url: '/buttons', icon: 'home' },
    { title: 'JSON', url: '/display-json', icon: 'home' },
    { title: 'IF', url: '/if-contenu', icon: 'home' },
    { title: 'Drawing', url: '/drawing', icon: 'home' },
    { title: 'Video', url: '/video', icon: 'home' },
    { title: 'Storage', url: '/storage', icon: 'home' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
