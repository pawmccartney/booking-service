var faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'locationId', title: 'locationId'},
    {id: 'rooms', title: 'rooms'},
    {id: 'name', title: 'name'},
    {id: 'lowDays', title: 'lowDays'},
  ]
});

const data = [];

for (var i = 0; i < 10,000,000; i++ ) {
  let lowDays = [];
  var today = new Date();
  for (var j = 0; j < 40; j++) {
    lowDays.push(new Date(faker.date.future(0.5, today)))
  }
  location = {
    locationId: i,
    rooms: 10,
    name: `hotel${i}`,
    lowDays: lowDays
  };
  data.push(location);
}

csvWriter
  .writeRecords(data)
  .then(()=> console.log('10mil created'));







