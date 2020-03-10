import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  clickOnLoginBtn(value: boolean) {
    this.eventEmitterLogin.emit(value);
  }
}
