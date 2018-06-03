const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const movieRouter = express.Router();

movieRouter.route('/')
  .get((req, res) => {
    (async function get() {
      const result = await axios.get(`${config.plex.host}/library/sections/1/all?X-Plex-Token=${config.plex.token}`);
      const movies = result.data.MediaContainer.Metadata;

      const randomMovies = [];
      while (randomMovies.length < 9) {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        if (randomMovies.filter(m => m.id === movie.ratingKey).length === 0) {
          randomMovies.push({
            id: movie.ratingKey,
            title: movie.title,
            year: movie.year,
            image: `${config.plex.host}${movie.thumb}?X-Plex-Token=${config.plex.token}`
          });
        }
      }
      res.json(randomMovies);
    }());
  });

module.exports = movieRouter;
