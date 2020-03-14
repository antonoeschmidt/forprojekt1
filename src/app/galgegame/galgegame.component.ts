import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-galgegame',
  templateUrl: './galgegame.component.html',
  styleUrls: ['./galgegame.component.css']
})
export class GalgegameComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(
  ) {
  }

  guessLetter(guess: string) {
    log(guess.toString())
    this.http.post<any>('http://localhost:4200/guess', guess).subscribe(data => {
      console.log(data);
    });
  }
}
