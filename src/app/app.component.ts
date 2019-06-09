import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean;
  title: string;
  constructor() {
    this.toggle = false;
    this.title = 'Online Editor';
  }

  toggleme(e) {
      console.log(e)
     // $("#wrapper").toggleClass("toggled");

  }
}

