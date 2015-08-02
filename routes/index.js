var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Fixture = mongoose.model('Fixture');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (app.get('env') === 'production') {
    res.render('index', {environment: ''});
  }else if (app.get('env') === 'staging') {
    res.render('index', {environment: ' - STAGING'});
  }  else if (app.get('env') === 'development') {
    res.render('index', {environment: ' - DEV'});
  }
});

////Returns fixtures from database
//router.get('/fixtures', function(req, res, next){
//
//  Fixture.aggregate({
//        $group:
//        { _id: "$gameWeek",
//          fixtureDetails: { $push:  { matchDate: "$matchDate" ,matchTime: "$matchTime" } }
//        }},
//
//      function(err, fixtures) {
//        if(err){ return next(err); }
//        res.json(fixtures);
//      });
//});

module.exports = router;
