module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    movieId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.INTEGER
    },
    language: {
      type: Sequelize.STRING
    },
    releaseDate: {
      type: Sequelize.DATE
    },
    country: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
  });

  return Movie;
};