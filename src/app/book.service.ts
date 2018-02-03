import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Book } from './book';
//import { BOOKS } from './sample-books';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class BookService {

  private booksUrl = 'api/books'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getBooks (): Observable<Book[]> {
      return this.http.get<Book[]>(this.booksUrl)
        .pipe(
          tap(books => this.log(`fetched books`)),
          catchError(this.handleError('getBooks', []))
        );
    }

    getBook(id: number): Observable<Book> {
      const url = `${this.booksUrl}/${id}`;
      return this.http.get<Book>(url).pipe(
        tap(_ => this.log(`fetched book id=${id}`)),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
    }

    updateBook (book: Book): Observable<any> {
      return this.http.put(this.booksUrl, book, httpOptions).pipe (
        tap(_ => this.log(`updated book id=${book.id}`)),
        catchError(this.handleError<any>('updateBook'))
      );
    }

    addBook (book: Book): Observable<Book> {
      return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
        tap((book: Book) => this.log(`added book with id=${book.id}`)),
        catchError(this.handleError<Book>('addBook'))
      );
    }

    deleteBook (book: Book | number): Observable<Book> {
      const id = typeof book === 'number' ? book : book.id;
      const url = `${this.booksUrl}/${id}`;

      return this.http.delete<Book>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted book id=${id}`)),
        catchError(this.handleError<Book>('deleteBook'))
      )
    }

    /** Handle HTTP operation that failed; let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); //todo: send the error to remote logging infrastructure
        this.log(`${operation} failed: ${error.message}`);  //todo: better job of transforming error for user consumption
        return of(result as T);  // let the app keep running by returning an empty result
      }
    }

    private log(message: string) {
      this.messageService.add('BookService: ' + message);
    }

    searchBooks(term: string): Observable<Book[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Book[]>(`api/books/?name=${term}`).pipe(
        tap(_ => this.log(`found books matching "${term}"`)),
        catchError(this.handleError<Book[]>('searchBooks', []))
      );
    }
}
