import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userUrl = 'http://localhost:8080/users';

  constructor(public httpClient: HttpClient,public messageService: MessageService) { }

  loginIdPassword(){
    
  }
  private log(message: string) {
    this.messageService.add('LoginService: ' + message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} non disponible: ${error.message}`);
      return of(result as T);
    };
  }
}
