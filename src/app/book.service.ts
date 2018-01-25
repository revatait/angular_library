import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { BOOKS } from './sample-books';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()

export class BookService {

  private booksUrl = 'api/books'; //URL to web api

  constructor(
    private http: HttpClient,
    private log(message:string) {
      this.messageService.add('BookService: ' + message);
    }

    getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.booksUrl)
        .pipe(
          catchError(this.handleError('getBooks', []))
        );
    }

    /** Handle HTTP operation that failed; let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<t> => {
        console.error(error); //todo: send the error to remote logging infrastructure
        this.log(`${opeartion} failed: ${error.message}`);  //todo: better job of transforming error for user consumption
        return of(result as T);  // let the app keep running by returning an empty result
      }
    }

    getBook(id: number): Observable<Book> {
      // Todo: send the message _after_ fetching the hero
      this.messageService.add(`BookService: fetched book id=${id}`);
      return of(BOOKS.find(book => book.id === id));
    }
}
