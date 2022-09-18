const express = require('express');
const movies = require('../controller/movie.controller');
const shows = require('../controller/show.controller');
const user = require('../controller/user.controller');
const book = require('../controller/book.controller');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome!!');
});

router.post('/signup', user.registerUser);
router.get('/movie', movies.searchMovie);
router.get('/movies-in-city/:cityId', movies.searchMovieByCity);
router.get('/shows/:cityId/:movieId', shows.searchShowTimes);
router.get('/seats/:showId', shows.availableSeats);
router.post('/book/:showId', book.bookSeat);

module.exports = router;