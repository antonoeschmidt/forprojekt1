import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forprojekt1';
  loggedIn = true;

  showFeature($event: boolean) {
    this.loggedIn = $event;
  }
}
