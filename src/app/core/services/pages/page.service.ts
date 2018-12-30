import { Injectable } from '@angular/core';
import { Page } from '../../../shared/models/page';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of, Subject } from 'rxjs';
import { Resultat } from '../../../shared/models/resultat';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {
//public jwtToken: string;
public pageUrl = 'http://localhost:8080/pages';

// observables sources
private pageCreerSource = new Subject<Resultat<Page>>();
private pageModifSource = new Subject<Resultat<Page>>();
private pageFiltreSource = new Subject<string>();
private pageSupprimeSource = new Subject<Resultat<boolean>>();

constructor(public httpClient: HttpClient, public messageService: MessageService) { }
/*
loadToken () {
	this.jwtToken = localStorage.getItem('togetToken');
}
*/
getAllPage(): Observable<Resultat<Page[]>> {
	return this.httpClient.get<Resultat<Page[]>>(this.pageUrl)
	.pipe(
    tap(res => {
      this.log(`Les pages ont été recupérés !`);
      console.log('vrifier le retour du service', res.body);
    }),
    catchError(this.handleError<Resultat<Page[]>>('getAllPage',
    new Resultat<Page[]>(null, [], [])))
  );
}

getPageParCode(code: string): Observable<Resultat<Page>> {
	return this.httpClient.get<Resultat<Page>>(this.pageUrl + '/' + code)
	.pipe(
    tap(res => {
			this.log(`La page a été recupérée !`);
      console.log('vrifier le retour du service', res.body);
    }),
    catchError(this.handleError<Resultat<Page>>('getPageParCode'))
  );
}

getPageParId(id: number): Observable<Resultat<Page>> {
  return this.httpClient.get<Resultat<Page>>(this.pageUrl + '/' + id).pipe(
    tap(res => {
      this.log(`La page a été recupérée !`);
      console.log('vrifier le retour du service', res.body);
    }),
    catchError(this.handleError<Resultat<Page>>('getPageParId'))
  );
}

addPage(page: Page): Observable<Resultat<Page>> {
  return this.httpClient.post<Resultat<Page>>(this.pageUrl, page)
    .pipe(
      tap(res => {
        this.log(`block ajouter avec succes : message service=${res.body.page_title}`);
        /*this.toastr.success('block ajouter avec succes : message service= '+ res.body.page_title,
         'Opération réussie');*/
        this.pageCreer(res);
        this.filtrePage(res.body.page_title);
    }),
    catchError(this.handleError<Resultat<Page>>('addPage'))
  );
}

editPage(page: Page): Observable<Resultat<Page>> {
  return this.httpClient.put<Resultat<Page>>(this.pageUrl, page).pipe(tap(res => {
		this.pageModif(res);
		this.filtrePage(res.body.page_title);
	}),
	catchError(this.handleError<Resultat<Page>>('editPage'))
  );
}

// supprimer une page
deletePage(id: number): Observable<Resultat<boolean>> {
	//if (this.jwtToken==null) this.loadToken()
	return this.httpClient.delete<Resultat<boolean>>(`${this.pageUrl}/${id}`)
		.pipe(
			tap(res => {
				this.log(`block supprime id =${id}`);
				/*this.toastr.success('block supprime id = '+ id,
					'Opération réussie');*/
				this.pagesupprime(res);
			}),
			catchError(this.handleError<Resultat<boolean>>('deletePage'))
		);
}


private log(message: string) {
  this.messageService.add('blockService: ' + message);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} a rencontré un problème: ${error.message}`);
    return of(result as T);
  };
}

pageCreer(res: Resultat<Page>) {
  console.log('block a ete  creer correctement essaie source');
  this.pageCreerSource.next(res);
}

pageModif(res: Resultat<Page>) {
  this.pageModifSource.next(res);
}

filtrePage(text: string) {
  this.pageFiltreSource.next(text);
}

pagesupprime(res: Resultat<boolean>) {
  this.pageSupprimeSource.next(res);
 }

}