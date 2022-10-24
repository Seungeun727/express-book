require('dotenv').config();
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/board', boardRouter);

app.get('/' , (req, res) => {
  res.send('Express start')
});

app.listen(port, (req, res, next) => {
  console.log(`listening on ${port}...`);
});

module.exports = app;