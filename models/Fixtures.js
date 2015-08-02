var mongoose = require('mongoose');

var FixturesSchema = new mongoose.Schema({
  gameWeek: String,
  matchDay: String,
  matchTime: String
});

mongoose.model('Fixture', FixturesSchema);

