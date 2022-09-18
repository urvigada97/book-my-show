module.exports = (sequelize, Sequelize) => {
  const CinemaSeat = sequelize.define("cinemaSeat", {
    cinemaSeatId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    seatNumber: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER
    },
  });
  return CinemaSeat;
};