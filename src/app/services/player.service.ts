import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { Player } from '../interfaces/player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private apiUrl = 'http://nbaprediction.somee.com/api/players'; //'https://6243d34339aae3e3b7475f7a.mockapi.io/player';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl).pipe(
      tap((_) => this.log('fetched players')),
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }
}
