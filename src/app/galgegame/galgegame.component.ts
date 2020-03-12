import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-galgegame',
  templateUrl: './galgegame.component.html',
  styleUrls: ['./galgegame.component.css']
})
export class GalgegameComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  guessLetter(guess: string) {
    this.http.post<any>('http://localhost:8080/guess', guess).subscribe(data => {
      console.log(data);
    });
  }
}
