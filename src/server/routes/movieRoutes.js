const express = require('express');
const debug = require('debug')('server:movieRoutes');

const movieRouter = express.Router();

const testdata = require('../testdata');

movieRouter.route('/')
  .get((req, res) => {
    debug(testdata);
    res.json(testdata);
  });

module.exports = movieRouter;
