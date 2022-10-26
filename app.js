const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT;
const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);
app.use('/api/board', boardRouter);

app.get('/' , (req, res) => {
  res.send('Express start')
});

app.listen(port, (req, res, next) => {
  console.log(`listening on ${port}...`);
});

module.exports = app;