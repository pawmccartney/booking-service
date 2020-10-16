const mongoose = require('mongoose');
var db = require('./index.js');
var faker = require('faker');



var dbUrl = 'mongodb://localhost/booking'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  mongoose.connection.dropDatabase()
});

var locations = [];
for (var i = 0; i < 100; i++ ) {
  let lowDays = [];
  var today = new Date();
  for (var j = 0; j < 40; j++) {
    lowDays.push(new Date(faker.date.future(0.5, today)))
  }
  location = {
    id: i,
    rooms: 10,
    name: `hotel${i}`,
    lowDays: lowDays
  };
  locations.push(db.createLocation(location));
}


Promise.all(locations)
  .then(result => {
    mongoose.connection.close();
  });

