import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { } from '../book.ts';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  //title = new FormControl();

  // bookForm = new FormGroup ({
  //   title: new FormControl()
  // });

  heroForm: FormGroup;

  createForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
