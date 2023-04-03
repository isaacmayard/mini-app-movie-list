const knex = require("./dbConnection");

module.exports = {
  getMovieTitles: () => {
    return knex.select("*").from("movies");
  },

  addMovie: (movie) => {
    return knex("movies")
      .insert(movie)
      .then((data) => {
        return data;
      });
  },

  deleteMovie: (title) => {
    return knex("movies").where("title", title).del();
  },
};
