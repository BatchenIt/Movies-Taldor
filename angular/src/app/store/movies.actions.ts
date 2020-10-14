import { Action } from '@ngrx/store';
import { Movie } from '../interfaces/movie';

export enum MoviesActionTypes {
    LOAD_MOVIES = '[MOVIES] loading movie',
    LOAD_MOVIE_SUCCESS = '[MOVIES] loading movie success',
    LOAD_MOVIE_FAILURE = '[MOVIES] loading movie failure',
    ADD_MOVIE = '[MOVIES] Add movie',
    ADD_MOVIE_SUCCESS = '[MOVIES] Add movie success',
    ADD_MOVIE_FAILURE = '[Movies] Add movie failure',
    DELETE_MOVIE = '[MOVIES] Delete movie',
    DELETE_MOVIE_SUCCESS = '[MOVIES] Delete movie success',
    DELETE_MOVIE_FAILURE = '[MOVIES] Delete movie failure',
    EDIT_MOVIE = '[MOVIES] Edit movie',
    EDIT_MOVIE_SUCCESS = '[MOVIES] Edit movie success',
    EDIT_MOVIE_FAILURE = '[MOVIES] Edit movie failure'
}

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


