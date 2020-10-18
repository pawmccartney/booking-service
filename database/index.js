var cassandra = require('cassandra-driver');


const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'hotels'
});


var getData = function (name, callback){
  if(name === 'hotel0'){
    name = 'hotel1';
   }
  var findHotel = `SELECT * FROM hotel WHERE name = '${name}' ALLOW FILTERING`;
  client.execute(findHotel, function (err, result) {
    if (err) {
      console.log(err);
      callback(['there was an error'])
    }
    if(result.rows.length === 0){
        callback(['hotel not found'])
    } else {
      var obj = {
          locationId: Number(result.rows[0].locationid),
          rooms: result.rows[0].rooms,
          name: result.rows[0].name,
          lowDays: result.rows[0].lowdays.split(',')
      }
      callback([obj]);
    }
  })
}

module.exports.getData = getData;