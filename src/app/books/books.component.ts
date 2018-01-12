import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
	book: Book = {
		id: 1,
		name: 'Harry Potter and the Chamber of Secrets',
		era: 'modern';
	};

  constructor() { }

  ngOnInit() {
  }

}
