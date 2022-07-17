const express = require("express");
const {
  fetchAllMovie,
  fetchSingleMovie,
  filterBy,
} = require("../handler/movie");

const movieRouter = express.Router();


movieRouter.get("/movie/all", fetchAllMovie);
movieRouter.get("/movie/:id", fetchSingleMovie);
movieRouter.get("/movie", filterBy);
module.exports = movieRouter;
