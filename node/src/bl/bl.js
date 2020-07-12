import { movies, categories } from '../mock.json'
import { validateMovie } from '../validator/validator.js'

export const getMovies = () => {
    const categories = getCategories()

    for (let movie of movies) {
        const foundCategory = categories.find(category => category.id == movie.categoryId)
        if (foundCategory)
            movie.categoryName = foundCategory.name;
    }

    return movies
}


export const getCategories = () => {
    return categories
}


export const addMovie = req => {
    const movieToAdd = req.body
    const errors = validateMovie(movies, movieToAdd)
    
    if (!Object.values(errors).some(val => val != 0)) {
        movieToAdd.id = ((+movies[movies.length - 1].id) + 1).toString()
        movies.push({ ...movieToAdd })
    }
    else {
        errors.movieAdded = false;
        return errors
    }

    movieToAdd.movieAdded = true;
    return movieToAdd
}


export const deleteMovie = req => {
    const errors = { deletedMovie: false }
    const id = req?.params['id']
    if (!id) return errors.deletedMovie = false
    const IndexOfMovieToDelete = movies.findIndex(movie => movie.id == id)
    if (IndexOfMovieToDelete == -1) return errors.deletedMovie = false
    const deletedMovie = movies.splice(IndexOfMovieToDelete, 1)
    deletedMovie.deletedMovie = true
    return deletedMovie
}


