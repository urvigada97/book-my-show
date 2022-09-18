const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.booking = require("./booking.model")(sequelize, Sequelize);
db.cinema = require("./cinema.model")(sequelize, Sequelize);
db.cinemaHall = require("./cinemaHall.model")(sequelize, Sequelize);
db.cinemaSeat = require("./cinemaSeat.model")(sequelize, Sequelize);
db.city = require("./city.model")(sequelize, Sequelize);
db.movie = require("./movie.model")(sequelize, Sequelize);
db.show = require("./show.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);
db.movieCityMap = require("./mapMovieCity.model")(sequelize, Sequelize);

db.cinema.hasMany(db.cinemaHall);
db.cinemaHall.hasMany(db.show);
db.cinemaHall.hasMany(db.cinemaSeat);
db.city.hasMany(db.cinema);
db.movie.hasMany(db.show);
db.show.hasMany(db.booking);
db.user.hasMany(db.booking);
db.movie.hasMany(db.movieCityMap);
db.city.hasMany(db.movieCityMap);

db.cinemaHall.belongsTo(db.cinema);
db.show.belongsTo(db.cinemaHall);
db.cinemaSeat.belongsTo(db.cinemaHall);
db.cinema.belongsTo(db.city);
db.show.belongsTo(db.movie);
db.booking.belongsTo(db.show);
db.booking.belongsTo(db.user);
db.movieCityMap.belongsTo(db.movie);
db.movieCityMap.belongsTo(db.city);
module.exports = db;