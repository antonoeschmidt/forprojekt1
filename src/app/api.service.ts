import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface ApiResponse {
  'status': 200;
  'message': '';
  'result': {};
}

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/';

  guessLetter(msg: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'guess', msg);
  }

  getGame(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/game');
}



}
