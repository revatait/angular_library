import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './sample-books';

@Injectable()
export class BookService {

  getBooks(): Book[] {
    return BOOKS;
  }

  constructor() { }

}
