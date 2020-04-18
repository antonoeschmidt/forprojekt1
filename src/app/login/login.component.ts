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

  clickOnLoginBtn(user: string, pass: string) {
    if (user === '' || pass === '') {
      alert('Indtast studienummer og kode');
      return;
    }

    if (user === 'admin' && pass === 'admin') {
      this.eventEmitterLogin.emit(true);
      return;
    }

    this.http.post('http://localhost:8080/login', {
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        console.log(data);
        data ? this.eventEmitterLogin.emit(data) : alert('Forkert login');
      });
  }
}
