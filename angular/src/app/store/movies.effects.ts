import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesActionTypes, LoadMovieAction, LoadMovieSuccessAction, LoadMovieFailrueAction, AddMovieAction, AddMovieSuccessAction, AddMovieFailureAction, DeleteMovieAction, DeleteMovieFailureAction, DeleteMovieSuccessAction } from './movies.actions';
import { ApiService } from '../services/api.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Action } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class MoviesEffects {

    constructor(private actions$: Actions,
        private api: ApiService) { }

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

}