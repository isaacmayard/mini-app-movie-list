const express = require("express");
const cors = require("cors");

const controllers = require("./db/controllers");
const app = express();

app.use(express.json());
app.use(cors());

//Routes go here!

app.get("/titles", (req, res) => {
  controllers.getMovieTitles().then((data) => res.status(200).send(data));
});

module.exports = app;
