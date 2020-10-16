const mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/booking'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


let locationSchema = mongoose.Schema({
  locationId: {type: Number, required: true},
  rooms: {type: Number, required: true},
  name: String,
  lowDays: [{}]
});


let Location = mongoose.model('Location', locationSchema);




var deleteLocation = (id) => {
  return new Promise((resolve, reject) => {
    Location.deleteOne({name: id}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result)
        resolve(result);
      }
    });
  });
}


var createLocation = (location) => {
  return new Promise((resolve, reject) => {
    Location.create({
      locationId: location.id,
      rooms: location.rooms,
      name: location.name,
      lowDays: location.lowDays
    }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

var update = function(qu, obj){
  let query = {name: qu}
  return new Promise((resolve, reject) => {
    Location.findOneAndUpdate(query, obj, {upsert: true}, function(err, doc){
      if(err){
        reject(err);
      } else {
        resolve(doc);
      }
    })
  });
}

var getLocationInformation = (locationId) => {
  return new Promise((resolve, reject) => {
    Location.find({
      name: locationId
    }).exec((err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports.update = update;
module.exports.deleteLocation = deleteLocation;
module.exports.createLocation = createLocation;
module.exports.getLocationInformation = getLocationInformation;