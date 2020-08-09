import { createReducer, on } from '@ngrx/store';
import { AddMovie, DeleteMovie } from './movies.actions';
import { Movie } from '../interfaces/movie';
import { Category } from '../interfaces/category';

export interface State {
    movies: Movie[];
    categories: Category[];
}

export const initialState =
{
    movies:
        [
            {
                id: 1,
                name: 'Joker',
                categoryId: 2,
                imdbUrl: 'https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_4_pd_fp1',
                imgUrl: 'https://www.roshpinacine.com/wp-content/uploads/2019/11/joker.jpg'
            }]
    ,
    categories: [
        { id: 1, name: "דרמה" },
        { id: 2, name: "קומדיה" },
        { id: 3, name: "אקשן" },
        { id: 4, name: "אחר" }]
};
// const _moviesReducer = moviesReducer(initialState,
//     on(addMovie, state => [...initialState, { ...state }])
// );

export function moviesReducer(state = initialState, action) {
    console.log('state', state);
    console.log('action', action);

    switch (action.type) {
        case AddMovie.type:
            return {
                movies: [...state.movies, { ...action }],
                categories: state.categories
            };
        case DeleteMovie.type:
            const movieIndexToDelete = state.movies.findIndex(x => x.id == action.id);
            let movies = [...state.movies];
            if (movieIndexToDelete != -1)
                movies.splice(movieIndexToDelete, 1);
            return {
                movies,
                categories: state.categories
            };
        default:
            return { ...state };
    }
}