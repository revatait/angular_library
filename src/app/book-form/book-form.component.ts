import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { continents } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})

export class BookFormComponent implements OnInit {
  heroForm: FormGroup;

  continents = continents;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  title = new FormControl();
  bookForm = new FormGroup ({
    title: new FormControl()
  });

  createForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: '',
      medium: '',
      category: '',
      era: '',
      status: '',
      position: '',
      geo: '',
      rating: ''
    });
  }

  ngOnInit() {
  }

}
