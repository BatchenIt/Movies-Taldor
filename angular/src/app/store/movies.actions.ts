import { Action } from '@ngrx/store'
import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/movie';

// export const AddMovie = '[Movies] AddMovie';
// export const DeleteMovie = '[Movies] DeleteMovie';

// export class AddMovieAction implements Action {
//     type = AddMovie;
//     constructor(public payload: Movie) { }
// }

// export class DeleteMovieAction implements Action {
//     type = AddMovie;
//     constructor(public payload: number) { }
// }


export const AddMovie = createAction(
    '[Movies] AddMovie',
    props<Movie>()
);

export const DeleteMovie = createAction(
    '[Movies] DeleteMovie',
    props<{ id: number }>()
);


