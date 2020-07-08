import express from 'express';
import { getMovies, getCategories, addMovie, deleteMovie } from '../bl/bl.js'

const router = express.Router();

router.get('/movies', (req, res) => {
    res.status(200).send(getMovies())
})

router.get('/categories', (req, res) => {
    res.status(200).send(getCategories())
})

router.post('/movie', async (req, res) => {
    const response = addMovie(req)
    if (response && !response.movieAdded)
        res.status(400).send(response)
    res.status(200).send(response)
})

router.delete('/movie/:id', (req, res) => {
    const response = deleteMovie(req)
    if (response && !response.deletedMovie)
        res.status(400).send(response)
    res.status(201).send(response)
})


export default router;

// TO DO - Handel errors