import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';
import { ApiService } from '../../../services/api.service';
import { AddMovieErrors } from '../../../interfaces/enum';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnChanges {

  errMSGs;
  errMSGfromServer = {};
  newMovie: Movie;
  @Input() categories: Category[];
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter();
  @Output() addMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.newMovie = this._initMovie();
    this.errMSGs = this._initErrMsgsObj();
  }

  ngOnChanges() {
    this.api.addMovieServerRes.subscribe((res) => {
      if (res.error) {
        delete res.error.movieAdded;
        this.buildErrObjFromServerRes(res.error);
      }
    });
  }

  buildErrObjFromServerRes(errors) {
    for (let [key, value] of Object.entries(errors)) {
      this.errMSGs[key] = this.transformServerResToHebrewErrMsg(value);
    }
  }

  transformServerResToHebrewErrMsg(errNum) {
    let errMsgToReturn: string;
    switch (errNum) {
      case AddMovieErrors.Empty:
        errMsgToReturn = 'יש למלא שדה זה';
        break;
      case AddMovieErrors.IdNotEmpty:
        // TO DO - Add Error message
        break;
      case AddMovieErrors.NameNotInEnglish:
        errMsgToReturn = 'יש להזין אותיות באנגלית';
        break;
      case AddMovieErrors.NameOver30Chars:
        errMsgToReturn = 'יש להזין עד 30 תווים';
        break;
      case AddMovieErrors.NameMovieExist:
        errMsgToReturn = 'סרט זה קיים במערכת, יש להזין שם סרט אחר';
        break;
      case AddMovieErrors.WrongUrl:
        errMsgToReturn = 'יש להזין קישור תקין';
        break;
    }
    return errMsgToReturn;
  }

  addMovie() {
    this.errMSGs = this._initErrMsgsObj();
    if (this._isFormValid(this.newMovie)) {
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
    else if (!movie.imdbUrl || movie.imdbUrl.trim() == '' ||
      !movie.imdbUrl.includes('www.imdb.com')) {
      errors.imdbUrl = 'יש להזין קישור תקין';
      validForm = false;
    }
    else if (!movie.imgUrl || movie.imgUrl.trim() == '' ||
      !movie.imgUrl.includes('www.imdb.com') &&
      !(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(movie.imgUrl))) {
      errors.imgUrl = 'יש להזין קישור תקין';
      validForm = false;
    }
    this.errMSGs = { ...errors };
    return validForm;
  }

}
