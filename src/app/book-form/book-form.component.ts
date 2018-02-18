import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  constructor() { }

  //title = new FormControl();

  bookForm = new FormGroup ({
    title: new FormControl()
  });

  ngOnInit() {
  }

}
