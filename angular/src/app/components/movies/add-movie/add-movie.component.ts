import { Component, OnInit, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';

import { Category } from '../../../interfaces/category';
import { AddMovieErrors } from '../../../interfaces/enum';

import { AppState } from '../../../store';
import { AddMovieAction } from '../../../store/movies.actions';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  errMSGfromServer = {};
  categories: Category[];

  form = this.fb.group({
    name: ['',
      [Validators.required, Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z]+$/)]],
    categoryId: ['',
      Validators.required],
    imdbUrl: ['',
      [Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/)]],
    imgUrl: ['',
      [Validators.required,
      Validators.pattern(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)]]
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.store.pipe(select(store => store.moviesState.categories))
      .subscribe(res => this.categories = res);
  }

  ngOnInit() {
  }

  // transformServerResToHebrewErrMsg(errNum) {
  //   let errMsgToReturn: string;
  //   switch (errNum) {
  //     case AddMovieErrors.Empty:
  //       errMsgToReturn = 'יש למלא שדה זה';
  //       break;
  //     case AddMovieErrors.IdNotEmpty:
  //       // TO DO - Add Error message
  //       break;
  //     case AddMovieErrors.NameNotInEnglish:
  //       errMsgToReturn = 'יש להזין אותיות באנגלית';
  //       break;
  //     case AddMovieErrors.NameOver30Chars:
  //       errMsgToReturn = 'יש להזין עד 30 תווים';
  //       break;
  //     case AddMovieErrors.NameMovieExist:
  //       errMsgToReturn = 'סרט זה קיים במערכת, יש להזין שם סרט אחר';
  //       break;
  //     case AddMovieErrors.WrongUrl:
  //       errMsgToReturn = 'יש להזין קישור תקין';
  //       break;
  //   }
  //   return errMsgToReturn;
  // }

  select(e) {
    const category = this.categories.find(category => category.id == e.value);
    if (category)
      this.form.value.categoryName = category.name;
  }

  onSubmit() {
    console.log('form', this.form)
    if (!this.form.valid) return;
    this.store.dispatch(new AddMovieAction(this.form.value));
  }
}
