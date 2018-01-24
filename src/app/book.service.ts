import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './sample-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class BookService {

  getBooks(): Observable<Book[]> {
    // todo: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }

  constructor(private messageService: MessageService) { }

}
