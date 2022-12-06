const express = require('express');
const app = express(); 
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const port = process.env.PORT;
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');

app.use(cors({credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/board', boardRouter);

app.get('/' , (req, res) => {
  res.send('Express start')
});

app.listen(port, (req, res, next) => {
  console.log(`listening on ${port}...`);
});

module.exports = app;