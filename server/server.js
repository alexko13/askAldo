const express = require('express');
const middleware = require('./config/middleware');
const database = require('./config/database');
const app = express();

database();
middleware(app, express);
app.set('port', (process.env.PORT || 1337));

module.exports = app;
