const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://dbiujzfhugfscs:977134ce803ef8bf8d9bf2f7ec43a0a39d4a0a729715ce0d78ec830fd88eaa74@ec2-3-219-52-220.compute-1.amazonaws.com:5432/d5tqldpd6tsg6k', {

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  ssl: {
    rejectUnauthorized: false
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