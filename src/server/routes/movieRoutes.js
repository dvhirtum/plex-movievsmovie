const express = require('express');

const movieRouter = express.Router();

const testdata = require('../testdata');

movieRouter.route('/')
  .get((req, res) => {
    res.json(testdata);
  });

module.exports = movieRouter;
