const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'hotels',
  port: 5432,
  user: 'postgres',
  password: 'password',
});

module.exports.seedDb = async ()=>{
  var createTable = 'CREATE TABLE hotel(locationId integer NOT NULL,rooms integer NOT NULL, name VARCHAR PRIMARY KEY, lowDays VARCHAR)';



  var plantSeed = ()=>{

    var seed = `COPY hotel (locationId, rooms, name, lowDays) FROM '${__dirname + '/../out.csv'}' WITH CSV HEADER delimiter ','`

    pool.query(seed, (err, res)=>{
      if(err){
        console.log(err);
      } else {
        console.log('table seeded\n', res);
      }
      pool.end();
    })
  }
  pool.query(createTable, (err, res)=>{
    if(err){
      console.log('there was an error the table, it may already exist');
      plantSeed();
    } else {
     console.log('table created');
     plantSeed();
    }
  })
}


module.exports.getData = (name, callback)=>{
  var q = `SELECT * FROM hotel WHERE name = '${name}'`;
  pool.query(q, (err, res)=>{
    if(err){
      callback(res, err);
    } else {
      callback(res);
    }
  })
}