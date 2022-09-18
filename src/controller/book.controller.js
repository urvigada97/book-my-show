const db = require('../models');
const User = db.user;
const CinemaHall = db.cinemaHall;
const Show = db.show;
const Booking = db.booking;

async function bookSeat(req, res) {
  try {
    var showId = req.params['showId'];
    if (!showId) {
      return res.status(400).send("Please send show id");
    }
    var numberOfSeats = req.body.numberOfSeats;
    var email = req.body.email;
    var password = Buffer.from(req.body.password).toString('base64');
    var user = await User.findOne({
      where: {
        email: email,
        password: password
      }
    });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    var userId = user.userId;
    const shows = await Show.findOne({
      where: {
        showId: showId
      },
      include: [CinemaHall]
    });
    if (!shows) {
      return res.status(400).send("Invalid show id");
    }
    var availableSeats = shows.cinemaHall.totalSeats;
    var updatedSeats = availableSeats - numberOfSeats;
    if (updatedSeats < 0) {
      return res.status(400).send("only " + availableSeats + " seats are available");
    }
    const booking = {
      numberOfSeats: numberOfSeats,
      status: 1,
      showShowId: showId,
      userUserId: userId
    };
    await Booking.create(booking);
    await CinemaHall.update({
      totalSeats: updatedSeats
    },
      {
        where: { cinemaHallId: shows.cinemaHall.cinemaHallId }
      });
    return res.status(200).send("" + numberOfSeats + " tickets booked for show " + showId);
  }
  catch (e) {
    console.log("Error:: ", e);
    return res.status(500).send("Something went wrong!!");
  }
}

module.exports = {
  bookSeat
};