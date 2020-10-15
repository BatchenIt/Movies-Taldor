import { Injectable } from '@angular/core';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { MoviesActionTypes } from '../interfaces/enum';
import {
    LoadMovieAction,
    LoadMovieSuccessAction,
    LoadMovieFailrueAction,
    AddMovieAction,
    AddMovieSuccessAction,
    AddMovieFailureAction,
    DeleteMovieAction,
    DeleteMovieFailureAction,
    DeleteMovieSuccessAction,
    EditMovieAction,
    EditMovieSuccessAction,
    EditMovieFailureAction
} from './movies.actions';

import { ApiService } from '../services/api.service';
import { Movie } from '../interfaces/movie';


@Injectable({
    providedIn: 'root'
})
export class MoviesEffects {

    constructor(
        private actions$: Actions,
        private api: ApiService
    ) { }

    @Effect() loadMovies$: Observable<Action> = this.actions$
        .pipe(
            ofType<LoadMovieAction>(MoviesActionTypes.LOAD_MOVIES),
            mergeMap(
                () => this.api.getMovies().pipe(
                    map((data: Movie[]) => new LoadMovieSuccessAction(data)),
                    catchError(error => of(new LoadMovieFailrueAction(error)))
                )
            )
        );

    @Effect() addMovie$: Observable<Action> = this.actions$
        .pipe(
            ofType<AddMovieAction>(MoviesActionTypes.ADD_MOVIE),
            mergeMap(
                (data) => this.api.addMovie(data.payload).pipe(
                    map(() => new AddMovieSuccessAction(data.payload)),
                    catchError((error: Error) => of(new AddMovieFailureAction(error)))
                )
            )
        );

    @Effect() deleteMovie$: Observable<Action> = this.actions$
        .pipe(
            ofType<DeleteMovieAction>(MoviesActionTypes.DELETE_MOVIE),
            mergeMap(
                (data) => this.api.deleteMovie(data.payload).pipe(
                    map(() => new DeleteMovieSuccessAction(data.payload)),
                    catchError(error => of(new DeleteMovieFailureAction(error)))
                )
            )
        );

    @Effect() editMovie$: Observable<Action> = this.actions$
        .pipe(
            ofType<EditMovieAction>(MoviesActionTypes.EDIT_MOVIE),
            mergeMap(
                (data) => this.api.editMovie(data.payload).pipe(
                    map(() => new EditMovieSuccessAction(data.payload)),
                    catchError(error => of(new EditMovieFailureAction(error)))
                )
            )
        );

}