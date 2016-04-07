const express = require('express');
const middleware = require('./config/middleware');
const app = express();

middleware(app, express);
app.set('port', (process.env.PORT || 1337));

module.exports = app;
