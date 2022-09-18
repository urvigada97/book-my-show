const db = require('../models');
const Show = db.show;
const CinemaHall = db.cinemaHall;
const Cinema = db.cinema;

function searchShowTimes(req, res) {
  var movieId = req.params['movieId'];
  if (!movieId) {
    return res.status(400).send("Please send city id");
  }
  Cinema.findAll({
    include: [{
      model: CinemaHall,
      include: [{
        model: Show,
        where: {
          movieMovieId: movieId
        },
      }]
    }]
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

function availableSeats(req, res) {
  var showId = req.params['showId'];
  if (!showId) {
    return res.status(400).send("Please send show id");
  }
  Show.findAll({
    where: {
      showId: showId
    },
    include: [CinemaHall]
  })
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    });
}

module.exports = {
  searchShowTimes,
  availableSeats
};