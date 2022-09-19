const db = require('../models');
const Movie = db.movie;
const City = db.city;
const MovieCityMap = db.movieCityMap;
const Cinema = db.cinema;
const CinemaHalls = db.cinemaHall;
const Shows = db.show;
module.exports = (req, res) => {
  var model = req.params['model'];
  switch (model) {
    case 'movie':
      var movie = {
        movieId: req.body.movieId,
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
        language: req.body.language,
        realeaseDate: req.body.realeaseDate,
        country: req.body.country,
        genre: req.body.genre,
      }
      Movie.create(movie)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
    case 'city':
      var city = {
        cityId: req.body.cityId,
        cityName: req.body.cityName,
        zipCode: req.body.zipCode,
      }
      City.create(city)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
    case 'movieCityMaps':
      var movieCityMaps = {
        cityCityId: req.body.cityId,
        movieMovieId: req.body.movieId,
      }
      MovieCityMap.create(movieCityMaps)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
    case 'cinema':
      var cinema = {
        cinemaId: req.body.cinemaId,
        name: req.body.name,
        totalCinemaHalls: req.body.totalCinemaHalls,
        cityCityId: req.body.cityId,
      }
      Cinema.create(cinema)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
    case 'cinemaHall':
      var cinemaHall = {
        cinemaHallId: req.body.cinemaHallId,
        name: req.body.name,
        totalSeats: req.body.totalSeats,
        cinemaCinemaId: req.body.cinemaId,
      }
      CinemaHalls.create(cinemaHall)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
    case 'show':
      var show = {
        showId: req.body.showId,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        cinemaHallId: req.body.cinemaHallId,
        movieMovieId: req.body.movieId,
      }
      Shows.create(show)
        .then(data => {
          return res.send("Data entered successfully");
        })
        .catch(err => {
          return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the data."
          });
        });
      break;
  }
}