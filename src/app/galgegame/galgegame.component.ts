import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {ApiService} from '../api.service';
import {GameModel} from '../shared/game.model';

@Component({
  selector: 'app-galgegame',
  templateUrl: './galgegame.component.html',
  styleUrls: ['./galgegame.component.css']
})
export class GalgegameComponent implements OnInit {
  dataArray = [];
  gameData: GameModel;

  constructor(private http: HttpClient, private apiService: ApiService) {
    // this.getGame();
  }

  ngOnInit() {
  }

  testKnap(value: string) {

    //  virker her ved at putte data i array 
    this.http.get('http://localhost:8080/newgame')
      .toPromise()
      .then( (data: GameModel) => {
        this.gameData = data;
      });
    console.log(this.gameData);



  }

  getGame() {
    this.http.get('http://localhost:8080/newgame')
      .toPromise()
      .then( (data: GameModel) => {
        this.gameData = data;
        console.log('Visible word: ' + this.gameData.visibleWord);
        console.log('Lives: ' + this.gameData.lives);
        console.log('Used letters: ' + this.gameData.usedLetters);
        console.log('IsGameOver: ' + this.gameData.isGameOver);
        console.log('StatusMsg : ' + this.gameData.statusMsg);
      });

  }

  guessLetter(value: string) {
    this.apiService.guessLetter(value)
      .toPromise()
      .then(
        data => {
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              this.dataArray.push(data[key]);
            }
          }
          this.gameData = new GameModel(this.dataArray[0], this.dataArray[1],
            this.dataArray[2], this.dataArray[3], this.dataArray[4]);
          console.log('Visible word: ' + this.gameData.visibleWord);
          console.log('Lives: ' + this.gameData.lives);
          console.log('Used letters: ' + this.gameData.usedLetters);
          console.log('IsGameOver: ' + this.gameData.isGameOver);
          console.log('StatusMsg : ' + this.gameData.statusMsg);
          console.log(this.dataArray);
          this.dataArray = [];
        }
      );


  }

  // legacy:
//   this.http.get('http://localhost:8080/newgame').toPromise()
// .then(data => {
//   for (let key in data) {
//   if (data.hasOwnProperty(key)) {
//   this.dataArray.push(data[key]);
// }
// }
// this.gameData = new GameModel(this.dataArray[0], this.dataArray[1],
//   this.dataArray[2], this.dataArray[3], this.dataArray[4]);
// console.log('Visible word: ' + this.gameData.visibleWord);
// console.log('Lives: ' + this.gameData.lives);
// console.log('Used letters: ' + this.gameData.usedLetters);
// console.log('IsGameOver: ' + this.gameData.isGameOver);
// console.log('StatusMsg : ' + this.gameData.statusMsg);
// console.log(this.dataArray);
// this.dataArray = [];
// });


}
