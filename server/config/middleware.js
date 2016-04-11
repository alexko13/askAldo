const morgan = require('morgan');
const bodyParser = require('body-parser');

const middleware = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(`${__dirname}/../../dist`));
};

module.exports = middleware;
