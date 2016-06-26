const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

const middleware = (app, express) => {
  if(process.env.NODE_ENV !== 'production') {
    console.log('🛠 Loading dev middleware')
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require('../../webpack-dev.config')
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
  }

  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/static', express.static(`${__dirname}/../../dist`))
  app.use('/api', routes)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../../index.html`))
  })

}

module.exports = middleware
