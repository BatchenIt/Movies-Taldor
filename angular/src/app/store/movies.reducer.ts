import { MoviesActions } from './movies.actions';
import { MoviesActionTypes } from '../interfaces/enum';
import { Movie } from '../interfaces/movie';
import { Category } from '../interfaces/category';

export interface MoviesState {
    list: Movie[];
    categories: Category[];
    loading: boolean;
    error: Error;
}

export const initialState: MoviesState =
{
    list: [],
    loading: false,
    error: undefined,
    categories: [
        { id: 1, name: "Drama" },
        { id: 2, name: "Comedy" },
        { id: 3, name: "Action" },
        { id: 4, name: "Other" }
    ]
};

export function moviesReducer(
    state: MoviesState = initialState,
    action: MoviesActions): MoviesState {

    switch (action.type) {
        case MoviesActionTypes.LOAD_MOVIES
            || MoviesActionTypes.ADD_MOVIE
            || MoviesActionTypes.DELETE_MOVIE
            || MoviesActionTypes.EDIT_MOVIE:
            return {
                ...state,
                loading: true
            }

        case MoviesActionTypes.LOAD_MOVIE_FAILURE
            || MoviesActionTypes.ADD_MOVIE_FAILURE
            || MoviesActionTypes.DELETE_MOVIE_FAILURE
            || MoviesActionTypes.EDIT_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case MoviesActionTypes.LOAD_MOVIE_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }

        case MoviesActionTypes.ADD_MOVIE_SUCCESS:
            return {
                ...state,
                list: [...state.list, { ...action.payload }],
                loading: false
            };

        case MoviesActionTypes.DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload),
                loading: false
            };

        case MoviesActionTypes.EDIT_MOVIE_SUCCESS:
            const editedMovieIndex = state.list.findIndex(x => x.id == action.payload.id);
            console.log('editedMovieIndex', editedMovieIndex)
            if (editedMovieIndex != -1)
                state.list[editedMovieIndex] = { ...action.payload };
            return {
                ...state,
                list: state.list,
                loading: false
            };

        default:
            return { ...state };
    }
}
