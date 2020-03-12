import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  clickOnLoginBtn(value: boolean) {
    this.http.get('http://localhost:8090/prut').subscribe(data => {
      console.log(data);
    });

  }
}
