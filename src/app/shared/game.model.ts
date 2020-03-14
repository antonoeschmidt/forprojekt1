export class GameModel {
  private _visibleWord: string;
  private _lives: number;
  private _usedLetters: string[];
  private _isGameOver: boolean;
  private _statusMsg: string;

  constructor(visibleWord: string, usedLetters: string[], lives: number, statusMsg: string, isGameOver: boolean) {
    this._visibleWord = visibleWord;
    this._lives = lives;
    this._usedLetters = usedLetters;
    this._isGameOver = isGameOver;
    this._statusMsg = statusMsg;
  }

  get visibleWord(): string {
    return this._visibleWord;
  }

  set visibleWord(value: string) {
    this._visibleWord = value;
  }

  get lives(): number {
    return this._lives;
  }

  set lives(value: number) {
    this._lives = value;
  }

  get usedLetters(): string[] {
    return this._usedLetters;
  }

  set usedLetters(value: string[]) {
    this._usedLetters = value;
  }

  get isGameOver(): boolean {
    return this._isGameOver;
  }

  set isGameOver(value: boolean) {
    this._isGameOver = value;
  }

  get statusMsg(): string {
    return this._statusMsg;
  }

  set statusMsg(value: string) {
    this._statusMsg = value;
  }
}
