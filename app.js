const express = require('express');
const app = express(); 
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const port = process.env.PORT;
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');
const mypageRouter = require('./routes/mypage');
const { errorHandler } = require('./middlewares/errorMiddleware');

app.use(cors({credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Route 
app.use('/api', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/user/mypage', mypageRouter);
app.use('/api/board', boardRouter);

// Error Middleware
app.use(errorHandler);


app.get('/' , (req, res) => {
  res.send('Express start');
});

app.listen(port, (req, res, next) => {
  console.log(`listening on ${port}...`);
});

module.exports = app;