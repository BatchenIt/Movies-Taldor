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

export enum AddMovieErrors {
    Empty = 1,
    IdNotEmpty = 2,
    NameNotInEnglish = 3,
    NameOver30Chars = 4,
    NameMovieExist = 5,
    WrongUrl = 6
}
