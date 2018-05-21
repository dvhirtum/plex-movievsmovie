const express = require('express');
const path = require('path');
const morgan = require('morgan');
const debug = require('debug')('server');

const app = express();

const port = 3000;

app.use(morgan('tiny'));
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  debug(`listening on port ${port}`);
});
