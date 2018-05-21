const express = require('express');
const path = require('path');
const morgan = require('morgan');
const debug = require('debug')('server');
const config = require('../../config');

const app = express();

const port = config.app.port || 3000;
const movieRouter = require('./routes/movieRoutes');

app.use(morgan('tiny'));
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use('/movies', movieRouter);
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  debug(`listening on port ${port}`);
});
