module.exports = (sequelize, Sequelize) => {
  const Show = sequelize.define("shows", {
    showId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    date: {
      type: Sequelize.DATE
    },
    startTime: {
      type: Sequelize.TIME
    },
    endTime: {
      type: Sequelize.TIME
    },
  });
  return Show;
};