module.exports = (sequelize, Sequelize) => {
  const Cinema = sequelize.define("cinemas", {
    cinemaId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING
    },
    totalCinemaHalls: {
      type: Sequelize.INTEGER
    },
  });
  return Cinema;
};