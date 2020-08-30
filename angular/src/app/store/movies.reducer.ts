import { MoviesActions, MoviesActionTypes } from './movies.actions';
import { Movie } from '../interfaces/movie';
import { Category } from '../interfaces/category';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface MoviesState {
    list: Movie[];
    // categories: Category[];
    loading: boolean;
    error: Error;
}

export const initialState =
{
    list: [],
    loading: false,
    error: undefined
    // categories: [
    //     { id: 1, name: "דרמה" },
    //     { id: 2, name: "קומדיה" },
    //     { id: 3, name: "אקשן" },
    //     { id: 4, name: "אחר" }]
};

export function moviesReducer(
    state: MoviesState = initialState,
    action: MoviesActions): MoviesState {

    switch (action.type) {
        case MoviesActionTypes.LOAD_MOVIES:
            return {
                ...state,
                loading: true
            }
        case MoviesActionTypes.LOAD_MOVIE_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case MoviesActionTypes.LOAD_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case MoviesActionTypes.ADD_MOVIE:
            return {
                ...state,
                loading: true
            }
        case MoviesActionTypes.ADD_MOVIE_SUCCESS:
            return {
                ...state,
                list: [...state.list, { ...action.payload }],
                loading: false
                // categories: state.categories
            };
        case MoviesActionTypes.ADD_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case MoviesActionTypes.DELETE_MOVIE:
            return {
                ...state,
                loading: true
            }
        case MoviesActionTypes.DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload),
                loading: false
                // categories: state.categories
            };
        case MoviesActionTypes.DELETE_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return { ...state };
    }
}
