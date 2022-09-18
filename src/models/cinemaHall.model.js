module.exports = (sequelize, Sequelize) => {
  const CinemaHall = sequelize.define("cinemaHalls", {
    cinemaHallId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING
    },
    totalSeats: {
      type: Sequelize.INTEGER
    },
  });
  return CinemaHall;
};