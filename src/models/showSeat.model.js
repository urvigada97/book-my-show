module.exports = (sequelize, Sequelize) => {
  const ShowSeat = sequelize.define("showSeat", {
    showSeatId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    status: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
  });
  return ShowSeat;
};