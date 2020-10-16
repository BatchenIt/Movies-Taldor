import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';

import { AppState } from '../../../store';
import { AddMovieAction, EditMovieAction } from '../../../store/movies.actions';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit {

  @Input() movie: Movie;

  categories: Category[];
  form: FormGroup;
  selectedCategoryName: string;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.store
      .pipe(
        select(store => store.moviesState.categories))
      .subscribe(res => this.categories = res);
  }

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.form = this.fb.group({
      name: [this.movie?.name || '',
      [Validators.required, Validators.maxLength(30),
      Validators.pattern(/^[A-Za-z0-9 ]*[A-Za-z0-9 ][A-Za-z0-9 ]*$/)]],
      categoryId: [this.movie?.categoryId || '',
      Validators.required],
      imdbUrl: [this.movie?.imdbUrl || '',
      [Validators.required,
      Validators.pattern(/[https:\/\/www.imdb.com]$/)]],
      imgUrl: [this.movie?.imgUrl || '',
      [Validators.required,
      Validators.pattern(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)]]
    });
  }

  select(e) {
    const category = this.categories.find(category => category.id == e.value);
    this.selectedCategoryName = category?.name;
  }

  private _prepareObjToSend(form) {
    return {
      id: this.movie?.id || 0,
      name: form.name,
      categoryId: form.categoryId,
      categoryName: this.selectedCategoryName,
      imdbUrl: form.imdbUrl,
      imgUrl: form.imgUrl
    }
  }

  onSubmit() {
    console.log('form', this.form.value)
    if (!this.form.valid) return;
    const movie: Movie = this._prepareObjToSend(this.form.value);
    console.log('movie', movie)
    movie.id == 0 ?
      this.store.dispatch(new AddMovieAction(movie)) :
      this.store.dispatch(new EditMovieAction(movie));
  }
}