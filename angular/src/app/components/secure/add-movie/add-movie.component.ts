import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  errMSGs = {};
  newMovie: Movie;
  @Input() categories: Category[];
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter();
  @Output() addMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
    this.newMovie = this._initMovie();

  }

  addMovie() {
    this.errMSGs = this._initErrMsgsObj();
    if (this._isFormValid(this.newMovie)) {
      console.log('this.newMovie', this.newMovie);
      this.addMovieEvent.emit(this.newMovie);
    }
  }

  cancel() {
    this.cancelEvent.emit();
  }

  select(e) {
    const category = this.categories.find(category => category.id == e.target.value);
    if (category)
      this.newMovie.categoryName = category.name;
  }

  private _initMovie() {
    return {
      id: 0,
      name: '',
      categoryId: 0,
      categoryName: '',
      imdbUrl: '',
      imgUrl: ''
    }
  }

  private _initErrMsgsObj() {
    return {
      name: '',
      categoryName: '',
      imdbUrl: '',
      imgUrl: ''
    }
  }

  private _isFormValid(movie: Movie) {
    let validForm = true;
    let errors = this._initErrMsgsObj();

    if (movie.name.trim() == '') {
      errors.name = 'יש להזין שם';
      validForm = false;
    }
    else if (!/^[a-zA-Z]+$/.test(movie.name)) {
      errors.name = 'יש להזין אותיות באנגלית';
      validForm = false;
    }
    if (!movie.categoryName) {
      errors.categoryName = 'יש לבחור קטגוריה';
      validForm = false;
    }
    if (!movie.imdbUrl || movie.imdbUrl.trim() == '') {
      errors.imdbUrl = 'יש להזין קישור לimdb';
      validForm = false;
    }
    else if (!movie.imdbUrl.includes('www.imdb.com')) {
      errors.imdbUrl = 'יש להזין קישור תקין לimdb';
      validForm = false;
    }
    if (!movie.imgUrl || movie.imgUrl.trim() == '') {
      errors.imgUrl = 'יש להזין קישור לפוסטר';
      validForm = false;
    }
    else if (!movie.imgUrl.includes('www.imdb.com') &&
      !(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(movie.imgUrl))) {
      errors.imgUrl = 'יש להזין קישור תקין לפוסטר';
      validForm = false;
    }
    this.errMSGs = { ...errors };
    return validForm;
  }

}
