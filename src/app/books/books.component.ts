import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

	books:  Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
}
