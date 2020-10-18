var faker = require('faker');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const path = require('path');

const csvStringifier = createCsvStringifier({
  header: [
    {id: 'locationId', title: 'locationId'},
    {id: 'rooms', title: 'rooms'},
    {id: 'name', title: 'name'},
    {id: 'lowDays', title: 'lowDays'},
  ]
});

var filePath = 'test.csv';
const fileWriteStream = fs.createWriteStream(path.resolve(filePath));

var data = [];
var generator = async ()=>{
  for (var i = 0; i < 10; i++ ) {
    let lowDays = [];
    var today = new Date();
    for (var j = 0; j < 40; j++) {
      lowDays.push(new Date(faker.date.future(0.5, today)))
    }
    if(i%100000===0){
      console.log(i);
    }
    location = {
      locationId: i,
      rooms: 10,
      name: `hotel${i}`,
      lowDays: lowDays
    };
    data = [location];
    var csvString = csvStringifier.stringifyRecords(data);
    const ableToWrite = fileWriteStream.write(csvString);
    if(!ableToWrite){
      await new Promise(resolve => {
        fileWriteStream.once('drain', resolve);
      })
    }
  }
  console.log('10mil created');
}
generator();





