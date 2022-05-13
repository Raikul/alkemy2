const Sequelize = require("sequelize");

const MovieModel = require("./models/movies");
const UserModel = require("./models/users");

const GenreModel = require("./models/genres");
const CharacterModel = require("./models/characters");

const sequelize = new Sequelize(
  "kspsiswm",
  "kspsiswm",
  "1dYUBKgwZXbn1-S92SR1XUqf0QJ2qy6T",
  {
    host: "kesavan.db.elephantsql.com",
    dialect: "postgres",
  }
);

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);

Movie.belongsTo(Genre);
Genre.hasMany(Movie);
//Movie.hasOne(Genre);

//sequelize.sync({ alter: true, force: false })
/*sequelize.sync({ force: false })
    .then(() => {
        console.log('tablas sincronizadas')
    })
*/
module.exports = {
  Movie,
  User,
  Genre,
  Character,
};
