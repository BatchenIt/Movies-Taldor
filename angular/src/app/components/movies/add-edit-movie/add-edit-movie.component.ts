import { Component, OnInit, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';

import { Movie } from 'src/app/interfaces/movie';
import { Category } from '../../../interfaces/category';
import { AddMovieErrors } from '../../../interfaces/enum';

import { AppState } from '../../../store';
import { AddMovieAction, EditMovieAction } from '../../../store/movies.actions';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit {

  errMSGfromServer = {};
  categories: Category[];

  form = this.fb.group({
    name: [(this.movie && this.movie.name) || '',
    [Validators.required, Validators.maxLength(30),
    Validators.pattern(/^[a-zA-Z]+$/)]],
    categoryId: [(this.movie && this.movie.categoryId) || '',
    Validators.required],
    imdbUrl: [(this.movie && this.movie.imdbUrl) || '',
    [Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)]],
    imgUrl: [(this.movie && this.movie.imgUrl) || '',
    [Validators.required,
    Validators.pattern(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)]]
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {
    console.log('movie', this.movie)
    this.store.pipe(select(store => store.moviesState.categories))
      .subscribe(res => this.categories = res);
  }

  ngOnInit() {
  }

  select(e) {
    const category = this.categories.find(category => category.id == e.value);
    if (category)
      this.form.value.categoryName = category.name;
  }

  onSubmit() {
    console.log('form', this.form)
    if (!this.form.valid) return;
    this.form.value.id == 0 ?
      this.store.dispatch(new AddMovieAction(this.form.value)) :
      this.store.dispatch(new EditMovieAction(this.form.value));
  }
}
