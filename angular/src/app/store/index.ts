import { MoviesState, moviesReducer } from './movies.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    moviesState: MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
    moviesState: moviesReducer
};