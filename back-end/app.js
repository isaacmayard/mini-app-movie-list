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

app.post("/titles", (req, res) => {
  console.log("THIS IS THE REQ.BODY", req.body);
  controllers.addMovie(req.body).then((data) => res.status(200).send(data));
});

app.delete("/titles", async (req, res) => {
  const data = await controllers.deleteMovie(req.body.title);
  res.status(200).send({ MSG: `${data}` });
});

module.exports = app;
