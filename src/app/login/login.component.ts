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
    this.http.get('http://localhost:8090/rest/hej').subscribe(data => {
      console.log(data);
    });


    // tslint:disable-next-line:max-line-length
    // this.http.get('https://www.dr.dk/mu-online/api/1.3/list/' +
    //   'view/mostviewed?channel=dr1&channeltype=TV&limit=5&offset=4')
    //   .subscribe(data => {
    //   console.log(data);
    // });


  }
}
