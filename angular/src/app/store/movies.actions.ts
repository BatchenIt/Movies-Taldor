import { Action } from '@ngrx/store';
import { MoviesActionTypes } from '../interfaces/enum';
import { Movie } from '../interfaces/movie';

export class LoadMovieAction implements Action {
    readonly type = MoviesActionTypes.LOAD_MOVIES;
}

export class LoadMovieSuccessAction implements Action {
    readonly type = MoviesActionTypes.LOAD_MOVIE_SUCCESS;
    constructor(public payload: Movie[]) { }
}

export class LoadMovieFailrueAction implements Action {
    readonly type = MoviesActionTypes.LOAD_MOVIE_FAILURE;
    constructor(public payload: Error) { }
}

export class AddMovieAction implements Action {
    readonly type = MoviesActionTypes.ADD_MOVIE;
    constructor(public payload: Movie) { }
}

export class AddMovieSuccessAction implements Action {
    readonly type = MoviesActionTypes.ADD_MOVIE_SUCCESS;
    constructor(public payload: Movie) { }
}

export class AddMovieFailureAction implements Action {
    readonly type = MoviesActionTypes.ADD_MOVIE_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteMovieAction implements Action {
    readonly type = MoviesActionTypes.DELETE_MOVIE;
    constructor(public payload: number) { }
}

export class DeleteMovieSuccessAction implements Action {
    readonly type = MoviesActionTypes.DELETE_MOVIE_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteMovieFailureAction implements Action {
    readonly type = MoviesActionTypes.DELETE_MOVIE_FAILURE;
    constructor(public payload: Error) { }
}

export class EditMovieAction implements Action {
    readonly type = MoviesActionTypes.EDIT_MOVIE;
    constructor(public payload: Movie) { }
}

export class EditMovieSuccessAction implements Action {
    readonly type = MoviesActionTypes.EDIT_MOVIE_SUCCESS;
    constructor(public payload: Movie) { }
}

export class EditMovieFailureAction implements Action {
    readonly type = MoviesActionTypes.EDIT_MOVIE_FAILURE;
    constructor(public payload: Error) { }
}

export type MoviesActions =
    | LoadMovieAction
    | LoadMovieSuccessAction
    | LoadMovieFailrueAction
    | AddMovieAction
    | AddMovieSuccessAction
    | AddMovieFailureAction
    | DeleteMovieAction
    | DeleteMovieSuccessAction
    | DeleteMovieFailureAction
    | EditMovieAction
    | EditMovieSuccessAction
    | EditMovieFailureAction;


