module.exports = (sequelize, Sequelize) => {
  const MovieCityMap = sequelize.define("movieCityMap", {});

  return MovieCityMap;
};