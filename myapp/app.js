const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
if ( !process.env.NODE_ENV || process.env.NODE_ENV!=="production") {
  require('dotenv').config();
}

app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// hardering...
const helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

// cors
const cors = require('cors');
let setCorsOpts = {
  "optionsSuccessStatus": 200,
  "credentials": true,
  "methods": [ "GET", "POST", "PUT", "DELETE" ],
  "allowedHeaders": "Origin, X-Requested-With, Content-Type, Accept",
  "origin": [
    "http://127.0.0.1:3000",
    "http://localhost:3000"
  ]
};
app.use(cors(setCorsOpts))

// session
const redis = require('redis');
const databaseDriverRedis = redis.createClient({
  socket: {
    host: process.env.DATABASE_REDIS_HOST || '127.0.0.1',
    port: process.env.DATABASE_REDIS_PORT || '6378'
  }
});
databaseDriverRedis.connect().catch(err => console.error(err))

const expressSession = require('express-session');
const { RedisStore } = require('connect-redis');
app.set('trust proxy', 1);
app.use(
  expressSession({
    name: "devopsmar25",
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      partitioned: true,
      maxAge: 8 * 60 * 60 * 1000
    },
    store: new RedisStore({
      client: databaseDriverRedis,
      ttl: 28800,
    }),
  })
);

// routes...
var indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
