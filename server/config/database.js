const mongoose = require('mongoose');
const db = process.env.MONGODB_URI || 'mongodb://localhost/askaldo';

// Use native promises
mongoose.Promise = global.Promise;

module.exports = () => {
  mongoose.connect(db);
  mongoose.connection.on('error', (err) => {
    console.error(`🚫 Database connection error: ${err}`);
  });
  mongoose.connection.once('open', () => {
    console.log(`💾 Connected to ${db}`);
  });
};
