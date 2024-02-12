 require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
 const cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname, './public')));

const mainRouter = require('./routes/main.routes');
const { verifyAccessToken } = require('./middleware/verifyJWT');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(verifyAccessToken);

app.use('/', mainRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server up on ${PORT} port`);
});
