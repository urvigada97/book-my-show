module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("bookings", {
    bookingId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numberOfSeats: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    },
  });
  return Booking;
};