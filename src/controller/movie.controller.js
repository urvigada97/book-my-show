const db = require('../models');
const Movie = db.movie;
const MovieCityMap = db.movieCityMap;
function searchMovie(req, res) {
  var movieTitle = req.query['movieTitle'];
  var language = req.query['language'];
  var realeaseDate = req.query['realeaseDate'];
  var country = req.query['country'];
  var query = {};
  if (movieTitle) {
    query.title = movieTitle;
  }
  if (language) {
    query.language = language;
  }
  if (realeaseDate) {
    query.realeaseDate = realeaseDate;
  }
  if (country) {
    query.country = country;
  }

  Movie.findAll({ where: query })
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}

function searchMovieByCity(req, res) {
  var cityId = req.params['cityId'];
  if (!cityId) {
    return res.status(400).send("Please send city id");
  }

  MovieCityMap.findAll({
    where: {
      cityCityId: cityId
    },
    include: [
      Movie
    ]
  })
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}
module.exports = {
  searchMovie,
  searchMovieByCity
};