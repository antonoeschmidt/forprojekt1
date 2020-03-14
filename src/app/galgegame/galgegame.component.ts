import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  imgSrc = 'assets/galge.png';
  guessText: string;
  @ViewChild('inputElement', {static: false}) inputElement: ElementRef<HTMLElement>;


  constructor(private http: HttpClient, private apiService: ApiService) {
    // this.getGame();
  }

  ngOnInit() {
  }

  testKnap(user: string, pass: string) {
    user = 's163051';
    pass = 'koden123';
    this.http.post('http://localhost:8080/login', {
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        console.log(data);
      });
  }

  getGame() {
    this.http.get('http://localhost:8080/newgame')
      .toPromise()
      .then((data: GameModel) => {
        console.log(data);
        this.gameData = data;
        console.log('Visible word: ' + this.gameData.visibleWord);
        console.log('Lives: ' + this.gameData.lives);
        console.log('Used letters: ' + this.gameData.usedLetters);
        console.log('IsGameOver: ' + this.gameData.isGameOver);
        console.log('StatusMsg : ' + this.gameData.statusMsg);
        console.log('IsGameWon: ' + this.gameData.isGameWon);
        this.updatePicture(this.gameData.lives);
      });

  }

  guessLetter(value: string) {
    if (value == null || value == '' || value == ' ') {
      alert('Indtast bogstav');
      return;
    }

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
            this.dataArray[2], this.dataArray[3], this.dataArray[5], this.dataArray[4]);
          console.log('Visible word: ' + this.gameData.visibleWord);
          console.log('Lives: ' + this.gameData.lives);
          console.log('Used letters: ' + this.gameData.usedLetters);
          console.log('IsGameOver: ' + this.gameData.isGameOver);
          console.log('StatusMsg : ' + this.gameData.statusMsg);
          console.log('IsGameWon: ' + this.gameData.isGameWon);
          console.log(this.dataArray);
          this.dataArray = [];
          this.updatePicture(this.gameData.lives);
          this.guessText = '';
          this.inputElement.nativeElement.focus();
          if (this.gameData.isGameOver && this.gameData.isGameWon) {
            alert('Tillykke du har vundet!')
            this.getGame();
          } else if (this.gameData.isGameOver) {
            alert('Du tabte desværre.')
            this.getGame();
          }
        }
      );
  }

  updatePicture(lives: number) {
    switch (lives) {
      case lives = 0:
        this.imgSrc = 'assets/galge.png';
        break;
      case lives = 1:
        this.imgSrc = 'assets/forkert1.png';
        break;
      case lives = 2:
        this.imgSrc = 'assets/forkert2.png';
        break;
      case lives = 3:
        this.imgSrc = 'assets/forkert3.png';
        break;
      case lives = 4:
        this.imgSrc = 'assets/forkert4.png';
        break;
      case lives = 5:
        this.imgSrc = 'assets/forkert5.png';
        break;
      case lives = 6:
        this.imgSrc = 'assets/forkert6.png';
        break;
    }
  }

  // legacy:
  // bedre metode, men virker ikke 100%
  // guessLetter(value: string) {
  //   this.http.post('http://localhost:8080/guess', value)
  //     .toPromise()
  //     .then(
  //       (data: GameModel) => {
  //         console.log(data)
  //         this.gameData = data;
  //         console.log('Visible word: ' + this.gameData.visibleWord);
  //         console.log('Lives: ' + this.gameData.lives);
  //         console.log('Used letters: ' + this.gameData.usedLetters);
  //         console.log('IsGameOver: ' + this.gameData.isGameOver);
  //         console.log('StatusMsg : ' + this.gameData.statusMsg);
  //         this.updatePicture(this.gameData.lives);
  //       }
  //     );
  // }
}
