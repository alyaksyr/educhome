import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/internal/operators';
import { Resultat } from '../../../shared/models/resultat';
import { MessageService } from '../../../core/services/message.service';
import { Profile } from '../../../shared/models/membres/profile';
import { Eleve } from '../../../shared/models/membres/eleve';
import { Parent } from '../../../shared/models/membres/parent';

@Injectable({
  providedIn: 'root'
})
export class T{
	constructor(){}
}
export class RegisterService {
	public profileUrl = 'http://localhost:8080/profiles';
	public eleveUrl = 'http://localhost:8080/eleves';
	public parentUrl = 'http://localhost:8080/parents';

	profile: Profile;
	eleve: Eleve;
	parent: Parent;

  	constructor(public httpClient: HttpClient,public messageService: MessageService) { }

  	createNewUser(profil:Profile): Observable<Resultat<Profile>> {
  		return this.httpClient.post<Resultat<Profile>>(this.profileUrl,profil)
  		.pipe(
  			tap(res=>{
  				this.log(`Votre compte a été ajouté avec succès`);
  			}),
  		catchError(this.handleError<Resultat<Profile>>('createNewUser')));
	}

	createNewEleve(eleve:Eleve): Observable<Resultat<Eleve>> {
		return this.httpClient.post<Resultat<Eleve>>(this.eleveUrl,eleve)
		.pipe(
			tap(res=>{
				this.log(`Votre compte a été ajouté avec succès`);
			}),
		catchError(this.handleError<Resultat<Eleve>>('createNewEleve')));
   }
    createNewParent(parent:Parent): Observable<Resultat<Parent>> {
		return this.httpClient.post<Resultat<Parent>>(this.parentUrl,parent)
		.pipe(
			tap(res=>{
				this.log(`Votre compte a été ajouté avec succès`);
			}),
		catchError(this.handleError<Resultat<Parent>>('createNewParent')));
	}
	private log(message: string) {
	    this.messageService.add('registerService: ' + message);
	}
	
	private handleError<T>(operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {
	      	console.error(error);
	      	this.log(`${operation} non disponible: ${error.message}`);
	      	return of(result as T);
	    };
	}

}

