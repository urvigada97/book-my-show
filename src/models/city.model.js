module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define("city", {
    cityId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    cityName: {
      type: Sequelize.STRING
    },
    zipCode: {
      type: Sequelize.INTEGER
    },
  });
  return City;
};