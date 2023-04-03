const knex = require("./dbConnection");

module.exports = {
  getMovieTitles: () => {
    return knex.select("*").from("movies");
  },
};
